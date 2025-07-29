import React from 'react';
import { Link } from 'react-router-dom';
const ShopSwipeDiscover = () => {
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
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">Discover</p></div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Curated Collections</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrjhhjAaxiypIvzPBOjTebc-qyWa4p1-B8w-Mqb_71ZhsMVt-CwQ-8uOUuv2aKIjVlZyMbyJ0Bx1q19CBY7_6L0s7hOrre7uGBmrh6wEhVCdM31P538WZ6EmAAzZ8L9mb6os0Xr_8-D7D9K9L98ecfpxN7ugrlQu8fTsT7UkbAl6aoeN5jm2S95zzcMtwfKxE8SLPRjRVpTpYgHtPlaDNdtSas5qBAEfNTET1WvbyGlUm6SUhz4kSVYBPkaYozFk-MW4Yh4Gmjevk")' }}
                  ></div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Modern Living</p>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjTmxpaN-0eoSMAfJJbcqFtw_mpFyLDW5jgAI7HhTkssiAxy9ecm1dDzQUjJjW5KeQnSuxJd88muscaguhmDb-TieIxphrz5aPGI1rNrSIoxCxrMN-3ZXPkbBgXow2RD2ZSdq_d2Y4b7gl8VrHbtVTGz7zyThaK0XcmPgMREgoEGHz9w2RvjuBP0joBMraykuHKYr6JcmGspcHRJZVxbZg_EgYmdfFLcTBXOBERQfF5gG4e6eWn4gtXJiUYbH1oq3W9sXbf9sc1fw")' }}
                  ></div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Cozy Comforts</p>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGuGeKxl2-c6sMXqTIok7MN3jVvcwzmeDLJ9oqNacq-4NoZ0CpXyY23745gPT1Xx2RGMlZES69ys97ef78DlvQ1hd_hELN4x9qkuXftGCmUM7suVxhMRV4ihVK-jVO4qcdwUa6LJl6sLi7zmKzrzPZvvTI2EsacSLvqxTEH9HpK2kHhfZgz7YTNxuJrZGiU4Yuqe_x1zwmb2XhSoedejaGez5qlpDMI9NwFouFbPuFWOoQGPW8KanJWI-RAPwFBtpWCsXl0RG6q2c")' }}
                  ></div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Culinary Creations</p>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaUKj12-ZSBapnWITJUXpUTXOWENa9Kz6DwZt1bmAfIaOEUAaLBOPpL-6F31rp6W-blk8CPk6GmlBPAulUAE9zuqGFEo494BwQA7zjaa3Bf1SFyspyBRf6w-qIShBA8nD-ODzpDq-BO-OJhly0JnXxpLSw5hoqg7TwsiWHNu5110VI_eStEZbLzxpWLkg4GfSUjBp_kmTg8I7LBQi5ohWSC66kf1J2bm3ewWsO4SP6P8Xox4q_2v8yEcaKGmIRjLepjuUyH8liB98")' }}
                  ></div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Work From Home</p>
                </div>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Trending Now</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2ZUvvC6OwggHPSwFAXQejSg2vQMcKOZ9ZwYKA67HmB9oH8nVIqVpaWZARWAIu5PItJcd69n6wM-cvf6zNMpt7lQToaF3kd2iq2u45cUKQxo5kEcMecVednhZIosEe-OjNto98XDlZ_yXfHcGjSPLtYfa_6JewCDuOObJcoaL8xQysaUZwvYUNt8axzNVswYX0lmNhMfSiJRcZqzvDL5VapgTpW1sfui9meN2pC64K1U84VxEIu6FJf2R4m85KdVCHmHHISqRqETI")' }}
                ></div>
                <p className="text-[#111518] text-base font-medium leading-normal">Smart Home Essentials</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTB6d-P3uoNK9n8_SInxfqky6iApWvjuuCyocEvuagxNM9CfHrxZIjuNarU68tmyhbtqQe-kFaJ9simR0LfQVTnBBPUog0DYEsyEzbNqW0hYj8m5t_HtbjHuaWDdDsuhxggNEpk4Z-WHWYwmz_Etxfd8YbEWuemqRASDndQsOX9Fk-8B5wbkvxLaFWoGTCk0dgQPbe7GrGEh30JnYQ_gbWVRYB0bvQZDIf5s9qqNfn82puosu-GKERvd_ufw5ZQeoqS6GVuZ3sQqU")' }}
                ></div>
                <p className="text-[#111518] text-base font-medium leading-normal">Outdoor Living</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGFocC14gYuRVj4iCNW4JI3wvMn3ClhbWN8630wu2wcqsuCbA9GNdQN-njY9KIttteZbAD-YQKVV6yzE-mBiHRGNp1cFjRHEIxUV7BM-wYanK3GZaKEQfz0kpaVh43QUu1xfhkyN2yLJNBSDC8FwtWwCQYAaLspUgYHqKjdHbC9Q4fyBv6Qqp8DRNtGvCR4vJoc2PqbHqhbxdsQAG2n0N47yNX9O40I9nU5tAGOrMhgu1S0HX_kFdRWkGAtYLa2ucQlJQP6oVe2gg")' }}
                ></div>
                <p className="text-[#111518] text-base font-medium leading-normal">Tech Gadgets</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNKDGVtl93f5nQautuxonyxjnOk2R9gBqN5Dv-SwhzbBWcINI3s7791FquQqFh0j8NcIeItO_J7BfQOgH1z_XR6JUuEUyc_im6H9seTnOOuXMD1Qb4S5uRl-L5N3_qGZh84qiXzQJJaZveKRI9Pv0xVwdgA1X1yr-P6GB3Bnf_8lhm4nQhNamoNQNJ_i0LqURcL_M0CICWLvy4gd3LXaN8MQv2lsttmZVpREdOFMcFXIz2dlRuaXXRBdkRRka_ub_QM_OtONCnhrc")' }}
                ></div>
                <p className="text-[#111518] text-base font-medium leading-normal">Fitness & Wellness</p>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recommended For You</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBv9Mb2m2A4k9Sc8U3Qm-YX0_DF0xFkG5q3e1EB6_TuJFabz_JGZrieCeOrT5LEjzamJPpA6JfWyuGAVySEOJ5-PoXMifL7QEj1PRZC9z4reEwJEN42jIXyrySDShpxsHfLQRa5DnV4_zQsM3VVsuKsmnL854BuwfHTnLQMpBOMRSC6Dllj7Rfvbnl30RbKuzOqh32GKUe8L4_udsQnhh68Y0r5ucfqPB3plUCc9b7qhwgiph47wzZVE5Z2cBDZEzhoox0iO2gR4sI")' }}
                  ></div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Fashion Finds</p>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1sIhnfSZt8oJdxUcAFxFCvMgCWB5F8mOHiuMTgeh0udtCaUya0dZ3gVslAkrESvnRXIwScxwFnrNqw6h1SyRG6TZzfQWBKo5M280mx9i4m0v97FyK0G4ut75Okxnktcf2OpQiug8pPObROkeKpZipzLOhu_OAJGetrP6qeJkj69knvo-IRzd7wNspx8yz4f16U1g2sWWhmeRqrt2A0VIbZYHKtJDOdKzLLs_cCFrMBcIhbyew8a1HgK-5MQNd9HAlslWwbBJEr-s")' }}
                  ></div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Style Guide</p>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCqIQmtc4qGY__-Un37LZM2UWznRq-4UGo5tz1tB0eG9rp5H7aHlGc8pcEW3wFknLwAblL_XF4aIyWo13OY18kK8mXBk9ltvyH7P-5Fngn3ABNsT3OLVB1urUTYu8aCmtUhOduV2HEq8nYFpFk5zqm7PoFUnAwk3Xwxvzr5kOpH7wFn4PcoLdndmnLIDtHZAvGV4m87TkTeZbBtRxtWhZsSPEigi-AjVUXnzH7H_wTfjB5eI0GCTfXbf_Sl4j3VwVwkXXm3F-vpII")' }}
                  ></div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Beauty Essentials</p>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIulgVRGGPSeL4-MOghoTPfTrUSo7y9AWDV0e4FPtoHgpKPclkg6EdrNmMslgm5tWgfJ8Lt4Xmy3Qv3MCphJ9YRacuuFYIgZQiU_yzN1fUI3VGBTNQYMoTH8bH9KEx2DF7qv37_q4T0sQeXRJZTgsw4u-A1xeT8DxfY9P-eHOZWD0QcFsor4cUSBbjJ9JPhXtX6M6V-qNeFcFaa9aJdV9CEUnVDu6WMgIlXrimPce7UNcD-VAONj1HqUgqc-xgLWO0jYMQgHVaUL4")' }}
                  ></div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Decor Inspiration</p>
                </div>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Explore More</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCO9l69KE7cZ4xU2ACQf-6C1VpbUOl3EXWgJvXYVPaJAX_uEGNUVFLMRTn2LcmWb8BBgzSsI8z7efQH2DUe7HgzijdhEQC33Hx9VJN-NxJkE-zil_KDet-eBoagR0xL9FtLbVh_fIRkg9wcOkakgmSkIY1vZuZsdwoFuuxMJYYUrgjMKq0CvRWT9Hz4nG2ZB0IpWEdLg2yN6Ar_EKljrmxoByJKsD3675k_U_lcElr1yz08yxGfeKsIeEDN2jV_jlF1T2T-qvrlC18")' }}
                ></div>
                <p className="text-[#111518] text-base font-medium leading-normal">Visual Search</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR63YXQhIpYEmYa9Abp77WHtLCPvm6aNgyEa4yq3tI5gboK1ZsfZQSl__ebuxUGq2ArY5DrENI5Skgtml0hgXSP-WK7klExaGVE3NVf1sP3aor1Lwd93IcTiObxAUFQOk7U2KSvbIiJZf5rcLl3p0P8T8khDVPjI5pdh7-bq_eob2xh26OJWuUTwi4VjuTXkovLaXp7k4DjpPBNCWz6-otvvaRcj3psMzX4gAM-mrBIeEFdVlWuIDB97rcj1B4L5NsM3-_hggpDHk")' }}
                ></div>
                <p className="text-[#111518] text-base font-medium leading-normal">Style Quiz</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8T091AudFdYqrZSSjAVVBV8vRhZ5X99uHe8ZQ6yxUnrjUQW4M6OKNZu649bb85vDAU7bNCqcVxISvdP2PpyC85KGsKD5Y6aMmGa4WPDAIZVlEjcylbRgtxL6bz_crTGcNm6I35e86lp3O073KlWx-tu16mNj9vA81Jg5rMCvJHToWnwkyL_CInuQ0S7mTeD36byaa58vd6fuLjbRAa5Blu87Ly0D8J22apuytFDj0wUCK_iNPOGWzG6qMmqSTf0IuiBndzVLgF9U")' }}
                ></div>
                <p className="text-[#111518] text-base font-medium leading-normal">Category Browse</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIzSoSMp8HmY3oMy6k4hF8Tp6NPvj-8XA5d7QjKltdaWiUQ6aX_JNadk2wVXBZqtCWZ0Vsxp69F64R-K2L6Br2ODzWTV9p9Ag-gg6nvrWGvD8rMQRF9RTGJEmxeiEibjFdAWEn2dvaLdLDedDWNShMkUCBfXnI2AW16pRGfJgxKJIz7dI5fW115RYMFYFUWqF64LQfhMloCJPfLgithinsf6hPzRfUq7V6wWhbvrzdEc9rl00vMetBKawx6IBcOddyN5EKdwarsIg")' }}
                ></div>
                <p className="text-[#111518] text-base font-medium leading-normal">Featured Brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSwipeDiscover;