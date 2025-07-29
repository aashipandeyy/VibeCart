import React from "react";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      {/* Header */}
      <header className="flex bg-blue-700 items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-10 py-5">
        <div className="flex items-center gap-8">
          {/* Logo linking to home */}
          <Link to="/" className="flex items-center gap-4 text-[#111518]">
            <h2 className="text-[#ffc220] text-2xl font-bold leading-tight tracking-[-0.015em]">VibeCart</h2>
          </Link>
          <div className="flex items-center gap-6">
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
      <main className="px-4 flex flex-1 justify-center py-5 md:px-40">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Hero Section */}

          {/* How It Works */}
          <section>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
              <Link to="/swipe">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#111518" viewBox="0 0 256 256">
                    <path d="M220.2,100l-18-31.18a28,28,0,0,0-47.3-1.92L139.56,40.31a28,28,0,0,0-48.12-.63,28,28,0,0,0-43,34.78l3.34,5.79a28,28,0,0,0-22,41.92l38,65.82a87.46,87.46,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3A88,88,0,0,0,220.2,100Zm-6.67,62.63A72,72,0,0,1,81.63,180l-38-65.82a12,12,0,0,1,20.79-12l22,38.1a8,8,0,1,0,13.85-8l-38-65.81a12,12,0,0,1,13.5-17.59,11.9,11.9,0,0,1,7.29,5.59l34,58.89a8,8,0,0,0,13.85-8l-26-45h0a12,12,0,0,1,20.78-12L160,107.78a48.08,48.08,0,0,0-11,61,8,8,0,0,0,13.86-8,32,32,0,0,1,11.71-43.71,8,8,0,0,0,2.93-10.93l-10-17.32a12,12,0,0,1,20.78-12l18,31.18A71.49,71.49,0,0,1,213.53,162.62ZM184.27,29.93a8,8,0,0,1,9.8-5.66c15.91,4.27,29,14.11,36.86,27.73a8,8,0,0,1-13.86,8c-5.72-9.92-15.36-17.12-27.14-20.27A8,8,0,0,1,184.27,29.93ZM80.91,237a8,8,0,0,1-11.24,1.33c-11-8.69-20.11-19.58-28.6-34.28a8,8,0,0,1,13.86-8c7.44,12.88,15.27,22.32,24.65,29.72A8,8,0,0,1,80.91,237Z" />
                  </svg>
                  <h2 className="text-[#111518] text-base font-bold leading-tight">Swipe</h2>
                </div>
              </Link>
              
              <Link to="/discover">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#111518" viewBox="0 0 256 256">
                    <path d="M169.64,134.33l44.77-19.46A16,16,0,0,0,213,85.07L52.92,32.8A16,16,0,0,0,32.8,52.92L85.07,213a15.83,15.83,0,0,0,14.41,11l.79,0a15.83,15.83,0,0,0,14.6-9.59h0l19.46-44.77L184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63Zm-69.48,73.76.06-.05Zm95.15-.09-49.66-49.67a16,16,0,0,0-26,4.94l-19.42,44.65L48,48l159.87,52.21-44.64,19.41a16,16,0,0,0-4.94,26L208,195.31ZM88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM8,96a8,8,0,0,1,8-8h8a8,8,0,0,1,0,16H16A8,8,0,0,1,8,96ZM120.85,28.42l8-16a8,8,0,0,1,14.31,7.16l-8,16a8,8,0,1,1-14.31-7.16Zm-81.69,96a8,8,0,0,1-3.58,10.74l-16,8a8,8,0,0,1-7.16-14.31l16-8A8,8,0,0,1,39.16,124.42Z" />
                  </svg>
                  <h2 className="text-[#111518] text-base font-bold leading-tight">Discover</h2>
                </div>
              </Link>
              
              <Link to="/shop">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#111518" viewBox="0 0 256 256">
                    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                  </svg>
                  <h2 className="text-[#111518] text-base font-bold leading-tight">Shop</h2>
                </div>
              </Link>
              
            </div>
          </section>

          {/* Featured Categories */}
          <section>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQ98LJwBsIctiHrbNLCFObgI7VqCaHQtuKvpyo5nyjWi9nVHStoxB7CxRa4OUQZPfPbqkE6fI-mOpFrNuVCrrgLLKm1Phr5FQizfnnTqBOwb5DGVCf3VjxY7laSVOneWoT2LuCeHHNApMurp5zIKbD7ojkTZOotpnT8fUumOvyQd9rzCGQCi385wYwLzrCLrKg-OdBfbeTLGVn_LLOjlJsuS-spqVHu0bVSoQ16bNGzNN5r3Ms4_f9EWGlLvH0lFyYL0Y6xCNZw9A")' }}
                  aria-label="Fashion category"
                />
                <p className="text-[#111518] text-base font-medium leading-normal">Fashion</p>
              </div>
              
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEsUz7MS60LVUj4_8oyI_zxHxsF649SRvXM2a8IBBPdA01paCYBkgYJrnEK1jOghuQo7OqoZwrPB7u5TBbJ9kF_Xr1oqzgdAaa9mqf9ig_qnLFvRb1I3wvRkg4qXu-NfaUMDhV3NzPpqs8gxNC22YXK4UvRQ7GQ76mwT0eJgfj85sBoKVmtAJRdJx_JNX9rb0fmWb1Bv65fE45ISBL40RKbr3RdyTfljzMtCW2ZOhoZj4YEnMcdKCWLL-_e3ex_6pf4dV_IHMA1BA")' }}
                  aria-label="Electronics category"
                />
                <p className="text-[#111518] text-base font-medium leading-normal">Electronics</p>
              </div>
              
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCM3m5qN05CwYW8P8baNzILP4Ym-RblvpVHxxdDN93oS3tby3P_sf9c0T7t7LckpHpD6z8D1ISEDbHd1oRNl-y6bDbDn-7SEeYo9O5R3i_cQAH1t-bo7zNwHpmQ8V_hcyTvwt2Fj4xPgZClF0oituB2DtOcPprT0js5tR0ruq6LqAqX1oz4zQRNeib0H2LA4XqLf5G7TNtEpqt6lmm9mPQ86DCOfuWmIjFqQrchcZ8vic1wR-uAGGJ95EO8DdeaOlY1QLGT_VVmpYk")' }}
                  aria-label="Home & Garden category"
                />
                <p className="text-[#111518] text-base font-medium leading-normal">Home & Garden</p>
              </div>
              
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAImta3WRZQGsKUEFZOAYjf4zu_iyIkE7irACHXIatE2kjaYLAXJN6_BxBzMdur-2yrzR3bYp9FdFoqNhszMiWh9FXz_v6CwhMkRW9qGbi6wFiBekseA5vvjrFs-MDaKLmYkQneuFslnQaHq91Z9I08KHXihZsIsOmWDtShSet3BWrCrszEFKKnKm1ClBKmniadYZD120iGVtTL8hUnOkK1uieTq7KdNhcFRAVSe9DG_SVwtnH8HmtSRkjhgMT5U5fgiH7zx4FkU7E")' }}
                  aria-label="Beauty category"
                />
                <p className="text-[#111518] text-base font-medium leading-normal">Beauty</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="@container">
            <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-[#111518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px] mx-auto">
                  Ready to Find Your Perfect Match?
                </h1>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="flex justify-center">
                  <Link to="/swipe">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 @[480px]:h-12 @[480px]:px-9 bg-blue-700 text-white text-m font-bold leading-normal tracking-[0.015em] @[480px]:text-base grow">
                      <span className="truncate">Start Swiping</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <Link to="/about" className="text-[#637c88] text-base font-normal leading-normal min-w-40">About Us</Link>
              <Link to="/contact" className="text-[#637c88] text-base font-normal leading-normal min-w-40">Contact</Link>
              <Link to="/privacy" className="text-[#637c88] text-base font-normal leading-normal min-w-40">Privacy Policy</Link>
              <Link to="/terms" className="text-[#637c88] text-base font-normal leading-normal min-w-40">Terms of Service</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#637c88" viewBox="0 0 256 256">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                </svg>
              </a>
              <a href="" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#637c88" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              </a>
              <a href="" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#637c88" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                </svg>
              </a>
            </div>
            <p className="text-[#637c88] text-base font-normal leading-normal">@2024 ShopSwipe. All rights reserved.</p>
          </footer>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;