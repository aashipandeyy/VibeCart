import React from 'react';
import { Link } from 'react-router-dom';
const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Eco-Friendly Bamboo Toothbrush",
      quantity: 1,
      price: 5.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVwzhFJGwfJ-_MjICwy5NqbGsKwqozXiAyA7AJPpd67dM_2w6M6xClGJvGT-xKMPnaiiq77yggb36eLKhL73vNyHbM5zKSD6vXhMvenPQiZmhb4hMwfpMYtjXmZXLh_kCxls-Mw625yUXEUO1IZnHhQxJlyvl7M_kfqS3891fUqXkEglEtq8NdL6A6ZtTFXectBUvpY1g1rwIX2eFk7tBd9qRt59Leh7bSWcS3v-T-NZOxgMHMlE9ibG1jmVwt9FjTRmxB_quEGs0"
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      quantity: 2,
      price: 19.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBDZiBhWKIYorlNDsG46dWKay1MRkP6GdpF5ZWS0sDTyMqdRKh4_H0_F9GAWDmKhHCezAbqcLxvfgo-gAvFoIyPAk9xMDjJ5Ng5IMyscnUCdWPGiTamzfEgjbEGQnhYfUL4xFpoKo0m9DVEOEstO33zHySDX6bYhIAfYP_ipj-h7nb0f8Cr7gRWMubSI-WAf2gFzW7o6B8x3MVt1m31sEAEn-aAoDxZbyqrVRB2bwguqz0gd-8vYfXqZtO9c-m2KH2QBAUx0pDptk"
    },
    {
      id: 3,
      name: "Reusable Water Bottle",
      quantity: 1,
      price: 12.50,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC90RVujXJcHTjjA02rCGVQtJafo0Tin9uOz4KlV8Mb4Pfva7e4IZ8hc-NikBrKkQQqLGMzLT5I6cr6Yp0CSpk5zouMvM6dE0Rd7EIZfbGb087LlHh0-39gdCdy6IovVKidbxJyPemOiIphK-SNvMkNemrRmWr4NwuK_ZIXVo5a3tG-9v_T8NBnaqyH1bsXeO2XOVX_n4HWlBu0rrcBbM8swDFcmntMaMhqo_7uwMwRq12QIhSx-vYhv14yAbAPJ-caG0dhx3Zo_vo"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex bg-blue-700 items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-10 py-5">
          <div className="flex items-center gap-8">
            {/* Logo linking to home */}
            <Link to="/" className="flex items-center gap-4 text-[#111518]">
              <h2 className="text-[#ffc220] text-2xl font-bold leading-tight tracking-[-0.015em]">Walmart X ShopSwipe</h2>
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
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
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
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">Shopping Cart</p>
            </div>
            
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">{item.name}</p>
                    <p className="text-[#637c88] text-sm font-normal leading-normal line-clamp-2">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#111518] text-base font-normal leading-normal">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
            
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Subtotal</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#111518] text-base font-normal leading-normal flex-1 truncate">Subtotal</p>
              <div className="shrink-0">
                <p className="text-[#111518] text-base font-normal leading-normal">${subtotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 
                bg-[#42b2ea] text-[#111518] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#41a3d4] hover:shadow-lg transition-all duration-300">
                <span className="truncate">Proceed to Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;