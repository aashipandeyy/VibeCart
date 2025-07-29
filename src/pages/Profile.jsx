import React from "react";
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
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
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBv2grvkuKzektZQPyA6Rf_ai8B7lIbK_gWpl4d76YtCwEcYJu4ptg97Bnt_znpHEMagk9BujsqmuQRn1dVR6Cpi5FunH2eVXb2CpOMcb_JZU-DF8JVz66iqSTF0bAOi-mXcKcUiP8Qv0tV7Xndauv1u_4giCffKzHM1a5eLXXC802zQlx-GMcPHbnBQbgqCuoci89xdVRyruGlfrdQ8lk0v57iMpETQw_X5bJ2hWJZ1vHZZu58e1hqCfcVFjYC8KpXsAK12ZArKTI")' }}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[#121517] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Sophia Carter</p>
                    <p className="text-[#677a83] text-base font-normal leading-normal text-center">Fashion Enthusiast</p>
                  </div>
                </div>
                <Link to="/editprofile">
                  <button
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f3f4] text-[#121517] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
                  >
                    <span className="truncate">Edit Profile</span>
                  </button>
                </Link>
              </div>
            </div>
            <h2 className="text-[#121517] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About</h2>
            <p className="text-[#121517] text-base font-normal leading-normal pb-3 pt-1 px-4">
              I'm a fashion enthusiast who loves discovering new styles and trends. I'm excited to share my finds and connect with fellow fashion lovers on ShopSwipe!
            </p>
            <h2 className="text-[#121517] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Swipe History</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#121517] flex items-center justify-center rounded-lg bg-[#f1f3f4] shrink-0 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#121517] text-base font-medium leading-normal line-clamp-1">250 items</p>
                <p className="text-[#677a83] text-sm font-normal leading-normal line-clamp-2">Swiped Right</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#121517] flex items-center justify-center rounded-lg bg-[#f1f3f4] shrink-0 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#121517] text-base font-medium leading-normal line-clamp-1">150 items</p>
                <p className="text-[#677a83] text-sm font-normal leading-normal line-clamp-2">Swiped Left</p>
              </div>
            </div>
            <h2 className="text-[#121517] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Preferences</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#121517] flex items-center justify-center rounded-lg bg-[#f1f3f4] shrink-0 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M200,48H179.31L165.66,34.34A8.07,8.07,0,0,0,160.05,32H96a8,8,0,0,0-5.66,2.34L76.69,48H56A16,16,0,0,0,40,64V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V64A16,16,0,0,0,200,48Zm-38.76,4.56L168,59.31V112L138.57,86.56ZM88,59.31l6.76-6.75,22.67,34L88,112ZM120,216H56V64H72v48a15.85,15.85,0,0,0,9.21,14.49A16.1,16.1,0,0,0,88,128a15.89,15.89,0,0,0,10.2-3.73.52.52,0,0,0,.11-.1L120,105.48ZM111,48h34.1L128,73.58ZM200,216H136V105.48l21.65,18.7a.52.52,0,0,0,.11.1A15.89,15.89,0,0,0,168,128a16.1,16.1,0,0,0,6.83-1.54A15.85,15.85,0,0,0,184,112V64h16Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#121517] text-base font-medium leading-normal line-clamp-1">Clothing</p>
                <p className="text-[#677a83] text-sm font-normal leading-normal line-clamp-2">Fashion</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#121517] flex items-center justify-center rounded-lg bg-[#f1f3f4] shrink-0 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#121517] text-base font-medium leading-normal line-clamp-1">Makeup</p>
                <p className="text-[#677a83] text-sm font-normal leading-normal line-clamp-2">Beauty</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#121517] flex items-center justify-center rounded-lg bg-[#f1f3f4] shrink-0 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#121517] text-base font-medium leading-normal line-clamp-1">Decor</p>
                <p className="text-[#677a83] text-sm font-normal leading-normal line-clamp-2">Home</p>
              </div>
            </div>
            <h2 className="text-[#121517] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Settings</h2>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#121517] text-base font-normal leading-normal flex-1 truncate">Notifications</p>
              <div className="shrink-0">
                <label
                  className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#f1f3f4] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#add6ea]"
                >
                  <div className="h-full w-[27px] rounded-full bg-white" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px' }} />
                  <input type="checkbox" className="invisible absolute" />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#121517] text-base font-normal leading-normal flex-1 truncate">Privacy</p>
              <div className="shrink-0">
                <div className="text-[#121517] flex size-7 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#121517] text-base font-normal leading-normal flex-1 truncate">Help</p>
              <div className="shrink-0">
                <div className="text-[#121517] flex size-7 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#121517] text-base font-normal leading-normal flex-1 truncate">Logout</p>
              <div className="shrink-0">
                <div className="text-[#121517] flex size-7 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;