from flask import Flask, request, jsonify
import sqlite3
import numpy as np

app = Flask(__name__)
DATABASE = 'shop_swipe.db'



def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def get_user_vector(user_id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT taste_vector FROM users WHERE user_id = ?", (user_id,))
    row = cur.fetchone()
    conn.close()
    if row:
        return np.fromstring(row['taste_vector'], sep=',')
    return None

def get_product_vector(product_id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT embedding FROM products WHERE product_id = ?", (product_id,))
    row = cur.fetchone()
    conn.close()
    if row:
        return np.fromstring(row['embedding'], sep=',')
    return None

def update_user_vector(user_id, new_vector):
    conn = get_db_connection()
    cur = conn.cursor()
    new_vector_str = ','.join(map(str, new_vector))
    cur.execute("UPDATE users SET taste_vector = ? WHERE user_id = ?", (new_vector_str, user_id))
    conn.commit()
    conn.close()

def get_dummy_recommendations():
    return [
        {"product_id": "p101", "name": "Minimalist Sneakers"},
        {"product_id": "p102", "name": "Denim Jacket"},
        {"product_id": "p103", "name": "Canvas Tote Bag"}
    ]



@app.route('/')
def index():
    return jsonify({"message": "ShopSwipe API is running."})


@app.route('/add-user', methods=['POST'])
def add_user():
    data = request.get_json()
    user_id = data.get('user_id')
    taste_vector = data.get('taste_vector')  

    if not user_id or not taste_vector:
        return jsonify({"error": "Missing user_id or taste_vector"}), 400

    if isinstance(taste_vector, list):
        taste_vector = ','.join(map(str, taste_vector))

    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("INSERT INTO users (user_id, taste_vector) VALUES (?, ?)", (user_id, taste_vector))
        conn.commit()
    except sqlite3.IntegrityError:
        conn.close()
        return jsonify({"error": "User already exists"}), 409

    conn.close()
    return jsonify({"message": "User added successfully."})


@app.route('/update-taste', methods=['POST'])
def update_taste():
    data = request.get_json()
    user_id = data.get('user_id')
    new_vector = data.get('new_vector')

    if not user_id or not new_vector:
        return jsonify({"error": "Missing user_id or new_vector"}), 400

    user_vector = get_user_vector(user_id)
    if user_vector is None:
        return jsonify({"error": "User not found"}), 404

    if isinstance(new_vector, list):
        new_vector = np.array(new_vector)
    else:
        new_vector = np.fromstring(new_vector, sep=',')

    # Weighted average (optional)
    updated_vector = 0.7 * user_vector + 0.3 * new_vector
    update_user_vector(user_id, updated_vector)

    return jsonify({"message": "User vector updated."})


@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    user_id = data.get('user_id')

    if not user_id:
        return jsonify({"error": "Missing user_id"}), 400

    user_vector = get_user_vector(user_id)
    if user_vector is None:
        return jsonify({"error": "User not found"}), 404

    # Replace this with real embedding comparison logic
    recommendations = get_dummy_recommendations()

    return jsonify({"recommendations": recommendations})


@app.route('/swipe', methods=['POST'])
def swipe():
    data = request.get_json()
    user_id = data.get('user_id')
    product_id = data.get('product_id')
    swipe_action = data.get('swipe_action')  # 'like', 'dislike', 'skip'

    if not all([user_id, product_id, swipe_action]):
        return jsonify({"error": "Missing user_id, product_id, or swipe_action"}), 400

    user_vector = get_user_vector(user_id)
    product_vector = get_product_vector(product_id)

    if user_vector is None or product_vector is None:
        return jsonify({"error": "User or product not found"}), 404

    if swipe_action == 'like':
        updated_vector = 0.8 * user_vector + 0.2 * product_vector
        update_user_vector(user_id, updated_vector)
        return jsonify({"message": "User vector updated (liked)."}), 200

    elif swipe_action == 'dislike':
        # Optionally subtract disliked influence
        updated_vector = user_vector - 0.1 * product_vector
        update_user_vector(user_id, updated_vector)
        return jsonify({"message": "User vector updated (disliked)."}), 200

    else:
        return jsonify({"message": "Swipe skipped. No update made."}), 200


if __name__ == '__main__':
    app.run(debug=True)