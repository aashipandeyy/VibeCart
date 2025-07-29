import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductDetailsPage = () => {
  const location = useLocation();
  const productId = location.pathname.split('/').pop();
  
  // All products data
  const allProducts = [
    {
      id: 1,
      name: "Women's Cozy Knit Sweater",
      brand: "StyleWear",
      price: "$39.99",
      rating: 4.5,
      reviewCount: 125,
      description: "This cozy knit sweater from StyleWear is a wardrobe essential. Made from soft, breathable cotton, it offers warmth and durability. Available in a variety of colors and sizes.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0BjH2l4sSWPDStLNR27dFA_Qs-xH5B9wCohj_VSGZQk9m_LBDv-qfRRjP5GJ9sPuPV7dVKi0-WmcO6dbvmdB_mxZVfpE_bxGUFVErHaJt-ScRi5AKlDTgybBoIZyA6LDdvcCRa2CnbGlthjv8wqk3pwunyg8Q92Z8LSYrR1eEpE6682yBSJCwVgGRCAVUz4dt0DUB1Q0Pmy8iNqbSgsTxhZmZVlXhKPv0XKLQj6EYKQkUx_rqspzznpvYJlrYwA9M-OFjs6PvtbI",
      sizes: ['S', 'M', 'L', 'XL'],
      ratingDistribution: [
        { stars: 5, percentage: 40 },
        { stars: 4, percentage: 30 },
        { stars: 3, percentage: 15 },
        { stars: 2, percentage: 10 },
        { stars: 1, percentage: 5 }
      ]
    },
    {
      id: 2,
      name: "Premium Wireless Headphones",
      brand: "AudioPro",
      price: "$129.99",
      rating: 4.8,
      reviewCount: 342,
      description: "Experience premium sound quality with active noise cancellation and 30-hour battery life. Perfect for music lovers and frequent travelers.",
      imageUrl: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UF1000,1000_QL80_.jpg",
      colors: ['Black', 'Silver', 'Blue'],
      ratingDistribution: [
        { stars: 5, percentage: 65 },
        { stars: 4, percentage: 25 },
        { stars: 3, percentage: 7 },
        { stars: 2, percentage: 2 },
        { stars: 1, percentage: 1 }
      ]
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      brand: "HydroFlask",
      price: "$24.99",
      rating: 4.7,
      reviewCount: 289,
      description: "Keep your drinks cold for 24 hours or hot for 12 with this durable, vacuum-insulated stainless steel bottle. Eco-friendly and leak-proof design.",
      imageUrl: "https://m.media-amazon.com/images/I/51-VxJDI3nL.jpg",
      sizes: ['500ml', '750ml', '1L'],
      ratingDistribution: [
        { stars: 5, percentage: 60 },
        { stars: 4, percentage: 30 },
        { stars: 3, percentage: 7 },
        { stars: 2, percentage: 2 },
        { stars: 1, percentage: 1 }
      ]
    },
    {
      id: 4,
      name: "Organic Cotton T-Shirt",
      brand: "EcoWear",
      price: "$19.99",
      rating: 4.3,
      reviewCount: 178,
      description: "Comfortable and eco-friendly t-shirt made from 100% organic cotton. Breathable fabric with a relaxed fit for all-day comfort.",
      imageUrl: "https://images.asos-media.com/products/selected-homme-3er-pack-oversize-t-shirts-in-schwarz-wei-cremewei/207199290-4?$n_640w$&wid=513&fit=constrain",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Gray', 'Navy'],
      ratingDistribution: [
        { stars: 5, percentage: 45 },
        { stars: 4, percentage: 35 },
        { stars: 3, percentage: 12 },
        { stars: 2, percentage: 5 },
        { stars: 1, percentage: 3 }
      ]
    },
    {
      id: 5,
      name: "Smart Fitness Watch",
      brand: "FitTech",
      price: "$199.99",
      rating: 4.6,
      reviewCount: 421,
      description: "Track your workouts, heart rate, sleep patterns, and more with this advanced smartwatch. Water-resistant with 7-day battery life.",
      imageUrl: "https://m.media-amazon.com/images/I/61qIlFz9faL._UF1000,1000_QL80_.jpg",
      colors: ['Black', 'Silver', 'Rose Gold'],
      ratingDistribution: [
        { stars: 5, percentage: 55 },
        { stars: 4, percentage: 35 },
        { stars: 3, percentage: 7 },
        { stars: 2, percentage: 2 },
        { stars: 1, percentage: 1 }
      ]
    }
  ];

  // Find the current product
  const product = allProducts.find(p => p.id === parseInt(productId)) || allProducts[0];

  // Reviews data
  const reviews = [
    {
      id: 1,
      name: "Ethan Carter",
      date: "2023-08-15",
      rating: 5,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPDVnvIR822VaNoYZ_7u_suM0wEvt4Dnva0ja16nDjbCtoVwdYDYfB99nwvae7BYWBvweG4_ff_9HwvmJKfIXwaK2AIJV9ppaXgpqgidAjxhKZ-KxbGf-xAOZY0n0pviyHmlWvCBDbwHfhtcXes9bDl4YVsR8VMtdDvww_iG5ir9rwm90nMaFOneIQRz3Oa2FPXwnDwHQ-umYAxuC1JkIOqV63oRWyFgB3MoJVsPd2O-r10hcfaPmH4qODO3fYtezWZ_P8CiBGvHk",
      content: "Great quality t-shirt! The fabric is soft and comfortable, and it fits perfectly. I've washed it several times, and it still looks new. Highly recommend!",
      likes: 10,
      dislikes: 2
    },
    {
      id: 2,
      name: "Olivia Bennett",
      date: "2023-07-22",
      rating: 4,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmI8QjkDIiOYCaJmMKZr4IFKejDrRSD4NgfZfayZ57W5rhJpm7j9A6QO8dBvufKKqHHAFc2ImaHBLc2ZNX0ADYOw9hq52pBoL-vWt4XVJVrIWQTWFg5xLYeQFECi6CRXwFgi4c_FqTX-083L3Rex1vKGmpul0KUkHQ9e5fVPhskn3Ib1FmUpb5ewxiAIZNXnZSpy8aqRGzuk_iwdzvo-g6C-MlQDOBua0nDJjAtfrukom7CQqPhieARgQqHOZXmie3e1yb3ia0YbQ",
      content: "Nice t-shirt for the price. The material is good, and it's comfortable to wear. The color is a bit different from what I expected, but overall, I'm satisfied.",
      likes: 5,
      dislikes: 1
    }
  ];

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <div key={i} className="text-[#121517]" data-icon="Star" data-size="18px" data-weight="fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
            </svg>
          </div>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="text-[#121517]" data-icon="Star" data-size="18px" data-weight="fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
            </svg>
          </div>
        );
      } else {
        stars.push(
          <div key={i} className="text-[#121517]" data-icon="Star" data-size="18px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
            </svg>
          </div>
        );
      }
    }
    return stars;
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Navigation Bar */}
        <header className="flex bg-blue-700 items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-10 py-5">
          <div className="flex items-center gap-8">
            {/* Logo linking to home */}
            <Link to="/" className="flex items-center gap-4 text-[#111518]">
              <h2 className="text-[#ffc220] text-2xl font-bold leading-tight tracking-[-0.015em]">VibeCart</h2>
            </Link>
            <div className="flex items-center gap-6">
                <Link to="/" className="text-white text-m font-semibold leading-normal hover:text-[#ffc220]">Home</Link>
                <Link to="/categories" className="text-white text-m font-semibold leading-normal hover:text-[#ffc220]">Categories</Link>
                <Link to="/deals" className="text-white text-m font-semibold leading-normal hover:text-[#ffc220]">Deals</Link>
            </div>
          </div>
  
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#637c88] flex border-none bg-[#f0f3f4] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-full placeholder:text-[#637c88] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                />
              </div>
            </label>
  
              {/* Wishlist icon */}
            <div className="flex gap-2">
              {/* Wishlist Button */}
              <Link to="/wishlist">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-blue-700 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-blue-950">
                  <div className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                    </svg>
                  </div>
                </button>
              </Link>
  
              {/* Shopping Cart Button */}
              <Link to="/shoppingcart">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-blue-700 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-blue-950">
                  <div className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </div>
                </button>
              </Link>
  
  
              <Link to="/settings">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-blue-700 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-blue-950">
                  <div className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56,3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
            {/* Profile icon */}
            <Link to="/profile">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hover:ring-2 hover:ring-[#ffc220] cursor-pointer"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5g60cBKnUTq95g_b_PTsx9FUCMTlzdTSbkwmigDJbaqcCtG6aX2OvcB2J0oldHfR-FT0qJqJtLUTe76CmzDvyK54ZLqOlDTSiUw2zsE-xjYArKt3FMK8OCh6vPWMsAoQxGeLp4HmbCUKBmoTFtK3MQrXSiT6WIvOSfSPzfnmbAw4bBWzxlCyXUCCZl5qSaCZ9KiX_eOyjG3TCAMCEO1avVMmf1lZQArzZDWYCi0qXAdWXLVpN3QtktTnAHnh4SO1KxXVL_2gskPc")' }}
              ></div>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        {/* Back to Swipe Button */}
        <div className="flex px-4 py-3 justify-start">
          <Link 
            to="/swipe" 
            state={{ currentIndex: allProducts.findIndex(p => p.id === product.id) }}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-700 text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Back to Swiping</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-3">
              <Link className="text-[#677a83] text-base font-medium leading-normal" to="/categories">Clothing</Link>
              <span className="text-[#677a83] text-base font-medium leading-normal">/</span>
              <span className="text-[#121517] text-base font-medium leading-normal">{product.name}</span>
            </div>

            {/* Product Image */}
            <div className="flex w-full justify-center grow bg-white @container p-4">
              <div className="w-[70%] gap-1 overflow-hidden bg-white @[400px]:gap-2 aspect-[1] rounded-xl flex">
                <div
                  className="bg-center bg-no-repeat bg-cover aspect-square rounded-none flex-1"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                ></div>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="text-[#121517] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
              {product.name}
            </h1>

            {/* Brand */}
            <p className="text-[#677a83] text-sm font-normal leading-normal pb-3 pt-1 px-4">
              Brand: {product.brand}
            </p>

            {/* Rating Section */}
            <div className="flex flex-wrap gap-x-8 gap-y-6 p-4">
              <div className="flex flex-col gap-2">
                <p className="text-[#121517] text-4xl font-black leading-tight tracking-[-0.033em]">{product.rating}</p>
                <div className="flex gap-0.5">
                  {renderStars(product.rating)}
                </div>
                <p className="text-[#121517] text-base font-normal leading-normal">{product.reviewCount} reviews</p>
              </div>
              
              {/* Rating Distribution */}
              <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
                {product.ratingDistribution.map((item) => (
                  <React.Fragment key={item.stars}>
                    <p className="text-[#121517] text-sm font-normal leading-normal">{item.stars}</p>
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#dde2e4]">
                      <div className="rounded-full bg-[#121517]" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                    <p className="text-[#677a83] text-sm font-normal leading-normal text-right">{item.percentage}%</p>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <p className="text-[#121517] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {product.description}
            </p>

            {/* Price */}
            <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Price</h3>
            <p className="text-[#677a83] text-sm font-normal leading-normal pb-3 pt-1 px-4">{product.price}</p>

            {/* Size Selection */}
            {product.sizes && (
              <>
                <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Size</h3>
                <div className="flex flex-wrap gap-3 p-4">
                  {product.sizes.map((size) => (
                    <label
                      key={size}
                      className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dde2e4] px-4 h-11 text-[#121517] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#add6ea] relative cursor-pointer"
                    >
                      {size}
                      <input type="radio" className="invisible absolute" name="size-selection" />
                    </label>
                  ))}
                </div>
              </>
            )}

            {/* Color Selection */}
            {product.colors && (
              <>
                <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Color</h3>
                <div className="flex flex-wrap gap-3 p-4">
                  {product.colors.map((color) => (
                    <label
                      key={color}
                      className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dde2e4] px-4 h-11 text-[#121517] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#add6ea] relative cursor-pointer"
                    >
                      {color}
                      <input type="radio" className="invisible absolute" name="color-selection" />
                    </label>
                  ))}
                </div>
              </>
            )}

            {/* Add to Cart Button */}
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#add6ea] text-[#121517] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Add to Cart</span>
              </button>
            </div>

            {/* Customer Reviews Section */}
            <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Customer Reviews</h3>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
              {reviews.map((review) => (
                <div key={review.id} className="flex flex-col gap-3 bg-white">
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                      style={{ backgroundImage: `url(${review.avatar})` }}
                    ></div>
                    <div className="flex-1">
                      <p className="text-[#121517] text-base font-medium leading-normal">{review.name}</p>
                      <p className="text-[#677a83] text-sm font-normal leading-normal">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-[#121517] text-base font-normal leading-normal">
                    {review.content}
                  </p>
                  <div className="flex gap-9 text-[#677a83]">
                    <button className="flex items-center gap-2">
                      <div className="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-inherit">{review.likes}</p>
                    </button>
                    <button className="flex items-center gap-2">
                      <div className="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-inherit">{review.dislikes}</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;