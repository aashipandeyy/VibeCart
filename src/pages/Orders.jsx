import React from 'react';
import { Link } from 'react-router-dom';

const OrdersPage = () => {
  // Orders data
  const recentOrders = [
    {
      id: 1,
      status: "Delivered",
      date: "July 20, 2024",
      itemCount: "2 items",
      orderNumber: "#1234567890",
      amount: "$55.98",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSRbztZnPWwYDn5J-tE74BCOwo0r2Q8WluEvB_sKtJIV2BcrrYxetZ8Hs8eT6VxtI6BxF4z9mBxyWeRaxfo77wleGQGnfm3utOp5BndHsQyR68SCOuQlsi6zPhyrC42LcALCxMmp9EW9XQZLZTNQ__QNchiUbLqfeBcKsR-Hqay-KWmBkqEy0Is7RQlXmWsPptvLMSNPnkqMawrOIvuPOw6MM9FnynXJ_DUGQFyNv7V79hlvvt6ybXI82xG4QeMhRA1utJCzswEpw"
    },
    {
      id: 2,
      status: "Shipped",
      date: "July 15, 2024",
      itemCount: "1 item",
      orderNumber: "#9876543210",
      amount: "$29.50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXP-qIAvhV7A6EXEqRVsRzZcYdeROSHKpf84OrHvJao-1OpjwQbnTRZy0V7YOJ7SI3Pe3ZWXlLlJoDFBcHzACWWwOEtQECtHTMjmi52j61NHOU3qVJ4IgtFvgqqqkEhZOvqyQvZBnPYVMDo81mKQdzEg5JZIfI6odsVlen0ADexeGTRK9KIqwyBT4qqvy-zFG8iWGoJIcYZ0RZyKamJGDW7Ecp9F2WKrKxn6ph_MiEeKC5ASbVSDdZ5C313_G9Yv5CYqWVgGNfgyw"
    },
    {
      id: 3,
      status: "Delivered",
      date: "June 28, 2024",
      itemCount: "3 items",
      orderNumber: "#5678901234",
      amount: "$89.75",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB2qvEM93bhOy-k_1SPw6aE7pXyPC6gF9W3ZeeNpTkhSzAFCxk-qq8BcrhZ3w-vczePpJOytDTc6WQMuKwIqB2jo7ITvvhDS1wmqA5dC_IO1ydVQJEvCe0c2Yy_92Ygv-HPPPt8vKBmH4MAmaC9loqD5sU2ZbgqCzmScHOMxTibB7hpbuyDYY_0DkD7d2-CBEauvQNdQjX1qvMF9w4rMoMUN7lYrRzu1nUOYzp-sGekF1xYP_q0AP7P3vHB3LcLlwIN-dd2o-Mytc"
    }
  ];

  const olderOrders = [
    {
      id: 4,
      status: "Delivered",
      date: "May 10, 2024",
      itemCount: "2 items",
      orderNumber: "#2345678901",
      amount: "$42.20",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOW_U7H-vYkukU8E9glexw9odsm4vhHdifsh7ybutmy48gJOBPYfNG2NP6uh3mQELvYpPuvqFjXZUmY0g7F0-oIx528aDVvkLGx6nk-elDaYaOLrrdoEiKTOc6Tbo0pgdbpr4Q8Kktop2HM7BAvDWOOXt2RjBi1pip0SmcXKmjSF9GmldQYmLCLwl8_HvGN04Yo9IHDT-VvPkXcRFpT_emIjs3Fnvf45gLukSXCSc16rZhi0gyGpRDNepilfFOhChm7Du5buflqkA"
    },
    {
      id: 5,
      status: "Delivered",
      date: "April 15, 2024",
      itemCount: "1 item",
      orderNumber: "#8901234567",
      amount: "$15.75",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVGS9lkpLW_fU34Wx4c9P19G3xijR1k5JCKDyLgoEuQDr62X4POZfM4a2aU0MMhNMobpMeIYZN2TE8ssAALHMzeq_dr7tUygK4BhP8yPNNmZbOsnxuPp6f5o4T0dCOyupPgmAHu5ldT2CPvIGX4stP_l0YcVrG5ezb2mu7U7_KknV4znLRk9IdEslBCNGhp02wt-rObQByI6UcfcsEWQxSaK_jZmhFmYZeReRczqGUNp1bnifAWlJO3mSEawY3Tj_UAvyvtHpHS98"
    }
  ];

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

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Page Title */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121517] tracking-light text-[32px] font-bold leading-tight min-w-72">Order History</p>
            </div>

            {/* Recent Orders */}
            <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Recent Orders</h3>
            {recentOrders.map(order => (
              <div key={order.id} className="flex gap-4 bg-white px-4 py-3 justify-between">
                <div className="flex items-start gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                    style={{ backgroundImage: `url(${order.imageUrl})` }}
                  ></div>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-[#121517] text-base font-medium leading-normal">{order.status} on {order.date}</p>
                    <p className="text-[#677a83] text-sm font-normal leading-normal">{order.itemCount}</p>
                    <p className="text-[#677a83] text-sm font-normal leading-normal">{order.orderNumber}</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#121517] text-base font-normal leading-normal">{order.amount}</p>
                </div>
              </div>
            ))}

            {/* Older Orders */}
            <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Older Orders</h3>
            {olderOrders.map(order => (
              <div key={order.id} className="flex gap-4 bg-white px-4 py-3 justify-between">
                <div className="flex items-start gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
                    style={{ backgroundImage: `url(${order.imageUrl})` }}
                  ></div>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-[#121517] text-base font-medium leading-normal">{order.status} on {order.date}</p>
                    <p className="text-[#677a83] text-sm font-normal leading-normal">{order.itemCount}</p>
                    <p className="text-[#677a83] text-sm font-normal leading-normal">{order.orderNumber}</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <p className="text-[#121517] text-base font-normal leading-normal">{order.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;