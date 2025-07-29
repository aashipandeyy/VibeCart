import React from 'react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  // Products data
  const products = [
    {
      id: 1,
      name: "Cozy Knit Sweater",
      price: "$49.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3EJpn7VCzAHmo0hIvx5aYyuzrevLtLofdTBe-bfbfONqf2G4ZRwKMwYeUq_tuilPHAwUqS-qlhoElhJ6i9Zky4JEiJcJp8rwXKM8Z_CBaR5lHP5fR4VyrF9MP7MO6XkwH2bH_bIdbYXTqnEhqFnEoVJcGmTg7EXzb0ozfPaN9pOMzJBM0vsEV3P-bin_dXCd7FxJSxiFj348XpX_CjugBqwQ9ciw5fPe0CSlviTGjTZ2-xiZq0igvcns76ng7B1xrFbBL5w_3DHY"
    },
    {
      id: 2,
      name: "Classic Denim Jeans",
      price: "$59.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP6x6UXqJz_jEaiRYSn3DX-bDCwM-W-T0-Kgepo6215e4RxaR2WTE9VEwOmcpMi7sB8IDrDwJ6ENlIuo4mP_iEY4bdBjVlFLwzp1Jmp8BY_s_6YMWGi5BSDwytwWzoZBA8P6MR0UvJK-eSo936MOq-5wjErmeY6we29XEM3LA1Wtf4_lPhiwipnOa5O4W-mkMXprGKzSg8MOkawTv3HxbErAL2Q91k_Zq_6G7VCTUihygsi4JvWXdBhyGDbMiT2tE6glZXtCxo_w0"
    },
    {
      id: 3,
      name: "Leather Ankle Boots",
      price: "$89.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvD5bClAoPhr8jJsw6TYPHvTL-6tjXTnqeCfZyukHkcs18hXmpgatpkHO883xy_BIQ1OPRh1kYa4_v_eUnRMEgajzyEFbhyX0cm7yeJwiFpIJj6PUcTdMH9sUW7phrsrVQOJfqfTUIeOMGWCYdUnUJF-D6RgDTXLdhK1yJtkQjHlBZLzx-zgbJhHWz6zPijY39mm1NT_wNvaRwkleiZXFheX-7bxbos6e7tMlqXwtuHeAgasMlKCT33BMG_0u6jb_eNgV1WZcEMKo"
    },
    {
      id: 4,
      name: "Cotton T-Shirt",
      price: "$19.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFzkatOhFeacjSmisg-kEYCvUqBZAGUZl1hh81a01wJvdVdUXqQw7PmtjqkNOiXrgulYDcAHDbvdWPnrMgr6AmZQbtLPYfAe6ZAS4O0Bcd03gTQ-yiSziHWrkugviRQCYi3VDDz6-HqKTzbqjW7aFqNRJYjD-mKb4wCPrXsbErm2nDxuaa4nB-3A54_GHmLiOJ7TM1FDMshxxURN6gurUyeUlBpBMIp76EQlWgmxdXNOFXvjTVuoSHUo0HF9vQ9D2i0aaYclwMhZI"
    },
    {
      id: 5,
      name: "Sporty Running Shoes",
      price: "$79.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVKH-cb3OlgJNTSYUzxJiKW5xUSyQpaSM-ssY8rrjdj38gRkBifX6tanHTtuSLWEHlDggPEzAE5MR5PDD1xcGojWsSFu_QXlTx7gZtuJct8bzG_qislFe6BIXdAkGnmJR2I9a-8Rxnl4wnO6jO6o6IEen3B7H4_LafrqMkMRWLbJO85QYf0V27-dL3tvZ0wmPtY3gUFVmvLF-8LWxZGkwqYFmN5-1jxLeo_UeyxOzGLufI-SE53_tzG2X91HRAzH-BDvYS7M8V6J0"
    },
    {
      id: 6,
      name: "Stylish Backpack",
      price: "$39.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8LsZ15BxPNr6TJLcosy9NJO1c4A2ymHwUx565bDXRHNG0gosMl3M-c_neuvXLH97LoKVuDKM_KkV8stl8EK4ex54-9ejuMvJmxoSEtOxswm2--qzNhZ5OQk7iWft1B2ry666bvHkQMMsar8OgjfyKazVtng54fMLxMML5airpuPMaAvJtj4f8bSyltsSCXy0-jecxGvpOmKp40OuQuyqTtTxrMHKzasHCedUvVZJp0vaZkjlszuCSLpOloH-G4--YyaFM1_K5fXA"
    },
    {
      id: 7,
      name: "Elegant Wristwatch",
      price: "$129.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw2pYjGi3pKXWL9kAE_xaz2cH5i7LcPZqdx1IlUSJO6M-O96G09-t_64cMPesGEyCXyBu1kMOERxssb3NhsiFgaYoiqgwauJfhjUhBIHplMSrUiDR3To5nknkTjOTahjtYxYFMQkDeGKhY8oHvdl4YAlwsJ2egpiYqPMFFVLq4TpdLx3tpdjnFZpB564okwmtUGrGQ6y66slAZCxtqnylRUd3QnghHp2YjjvkCVqzJ0GFKIjcVyx3h271lleSMi3tlyoGLxVa4Kko"
    },
    {
      id: 8,
      name: "Summer Sunglasses",
      price: "$29.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgHR1Mj4FD4ftIIYWR89QnaiPUPMva-IJhCaDkiB78ehd9g9-MTnyui7r2-hPA7xsk-VoQ7jPt6aiXLn7PxJgpPjPS4vNhhDcDPA2tmW761tjFOtBYorT9zzMsOFJXRlfUyxAFdFdkpQzcvT3TuwOdh4eNFoxnMp8njGoOZp1X5tYg6lZpvRrJhzOwKU0sxOGGRzG8l0HLuA7eSgoA9hPYgUTbtlc86uETjymO8Cv7N0DaLZiF3-Bsf9EP5Arvdm43H9Ijoy3udTc"
    },
    {
      id: 9,
      name: "Casual Sneakers",
      price: "$69.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB9ZZ_H69eKCCsj3Jv2N5R4k5BXgI0r1cZjuP_ZGxfBshcV_u0vV9La0xT7llQeOzaDVDtWg-GK9Oo7PzbZdI5xFkRmVQkv_rCxA8T9zeSWcB7F0bTtPpxUB_UsKm-DEhZMIOVPr1GXYtreRp7HzHt_7CezwQK6md2B7p9VwrWp6R6NKTHLLXog8cHLO7yJeg64k1LnyHqtxj-RlhSnJYZcIf4KQMaNekNIrZvPbdUvu5lgz_1mD12NsxumNNhlPyZhjPS7Al1x64"
    },
    {
      id: 10,
      name: "Warm Winter Coat",
      price: "$149.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7EePLtLrnyO06GHZ43rCAwTPhEXRzd6gWxyfVqUAqWHkl_fsju8DatPmL8f_JuvXbj3YL3aHSkQbUcXfpYs6ONjlmv6UBMjGTXo8joHlarFl-B9M3_Rcg0FqaitLoReWphm5yr2qA2RtK-LezSxnc-gC7FJEPNXRE3RtXlAcHIJ8jAtqKYmsLgxjHQIS8paEHhctodq8yiaKFgpD0lOGrUEyCD0O2MSBEQJMe-wVjwfZNWbBkaUicIxUU-XhognaY0RY6VS4D5p4"
    },
    {
      id: 11,
      name: "Chic Handbag",
      price: "$99.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoypDx7mOJ7Q6FpA7AI5wK8fpnQRGVSfWO_yBHxrVamV3CTLBQG2D4KD62ccpmSr_WXuJlQmpCB0oXzL0NoTMfvvhmHCYNvcNqlaxnH97D7DNmazatkvwA9kAtCdmBaNAmIH_wEw98iJIat4ejszTOqTHnWaAePbWdiIqqDjE1-Ldg4lAlSj8uC3tYzkEgweK4vMsC74ARxj_bfIA5_8BYNxP1h1oT7oZ1AmXrd1_UrzHV2YLrkVQuop3CGHjt11whfRVpRpK4Y68"
    },
    {
      id: 12,
      name: "Comfortable Joggers",
      price: "$44.99",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmjGVvzxVg51BgfLnySBTFsEKsoQqdpb8RX7t-u77jCtfz25H7jAUWkEYc1oHeouq8R_3EVsHQ4KT9w0eSQDY26sXqGHO4oneL1zSpqeNy_XfV08IcrBfrQpLDNID2lsWMiDBBwUJQlF62cItHDa1rYh5K_-bp7_CJr7BOa-EqO7AAoHeCq2FSym7I8htui9d6wh4lEfei08DScO0tabHBrFpLvQCnysR6SjpEN0cn0IrjxmddhIVOrBWTI2SpgKyQbExFEuysuJI"
    }
  ];

  // Filter options
  const filterOptions = [
    { name: "Category", icon: "CaretDown" },
    { name: "Price", icon: "CaretDown" },
    { name: "Rating", icon: "CaretDown" },
    { name: "Brand", icon: "CaretDown" }
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
              <p className="text-[#121517] tracking-light text-[32px] font-bold leading-tight min-w-72">Shop</p>
            </div>

            {/* Filter Options */}
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {filterOptions.map((option, index) => (
                <button key={index} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f3f4] pl-4 pr-2">
                  <p className="text-[#121517] text-sm font-medium leading-normal">{option.name}</p>
                  <div className="text-[#121517]" data-icon={option.icon} data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {products.map(product => (
                <div key={product.id} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                  ></div>
                  <div>
                    <p className="text-[#121517] text-base font-medium leading-normal">{product.name}</p>
                    <p className="text-[#677a83] text-sm font-normal leading-normal">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <Link className="text-[#677a83] text-base font-normal leading-normal min-w-40" to="/about">About</Link>
                <Link className="text-[#677a83] text-base font-normal leading-normal min-w-40" to="/contact">Contact</Link>
                <Link className="text-[#677a83] text-base font-normal leading-normal min-w-40" to="/privacy">Privacy Policy</Link>
                <Link className="text-[#677a83] text-base font-normal leading-normal min-w-40" to="/terms">Terms of Service</Link>
              </div>
              <p className="text-[#677a83] text-base font-normal leading-normal">@2024 ShopSwipe. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ShopPage;