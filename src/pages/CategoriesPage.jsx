import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  const categories = [
    {
      id: 1,
      name: "Clothing",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq0g1uYh7dJBWc0qLiO0j2jYhnTX43fQ6rS8u0v-dqQAsID0gnQNp1ohkLr00_SeF71vABPqzPcDdzUbtHCRIpK-HQ3_kupdLt2fSrRA6xFl5TAYvU4Nfmv87JYTkhDrOe8rGKNyDS8b4r4Ue4o1JsM3tMiK4nmgfmBKgnqEGUImh_Z9EI5fUGWYaYU4rZclEY6dJaEfRJSAwPWacHzZrpuJW7-Z6c9GwAeh9yty8AU9Y6B2PTt8n1WtloRYWv51S5VlbrgqPL7ho"
    },
    {
      id: 2,
      name: "Home Decor",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZUUZjlp8X0ynGZyRlfmjmb3s0x1VDPI4D7lvutL1sefaG8wL10wXKIMfgkjZQR0dEgr7SFq2utsb1vt1Y0uAS33DjPnagxWYTx8LHvEhdOGgJlyuqLTrMR9OuchLPbF2aJrVbHnWtqgpBYLoCP-Nb_qTTuGUQppoywtfIwBkd_nMC_UUTiSSZu48pmObX0k_oSB6yAKNNf7jNP3nkeOV0R2SORygjT4VQZL6dbW577CmQstYsrvEprxpWeUgB_csynBsP660QNes"
    },
    {
      id: 3,
      name: "Electronics",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_b3zyCsyyO7NNNoSfe6nW2jANuBlHw59U7iFQesH46-HPim0Cz_xaPGmsSbYzqykTey3a1o6bJ2LwJazaU_4Q5S63ioFqgSkoyhQKE2Lq_TQnLu4nXuSC0XwSG5cgqnbKO59zKnuP4QPdCuVijLk3mFPsGH_bToxDtRm4Uw4nylXfpEpGqXjH8beranCtxJu4tClBD-TwCl0c1H968ySvK6JrCNkHpDpG0aUtJGOAlrb7UKx8S-k3nzxauV7WIhUW9GJv5r-72_k"
    },
    {
      id: 4,
      name: "Books",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhVLd81ybM02kw94lb0q088k8ut9lCb1FqQ58x98YoxIPY36rx0hg3l-A5y8Jlqcmkie2U5vut_r8aUJY2qyl_YC3UKnLD2IQjx9mRp1rq4WPPse_uC1s8eOCAmGqoh__P1unOdTvoXYYArTcuLAMerxep8P48VwRi16dpjNGEwh59w_AifE_qOJS-myN5uWzapa8K_Aq7MUcbMgyJgdMKOGkQzXn3eVAvaLDdDCxtS3D3w_CSIxCoYFBVXymdH9fjE8odQhJabsk"
    },
    {
      id: 5,
      name: "Sports",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcXvS6DiTiEn-lCyTKvLe0fIx1H9y1di8WNzzgQ3_dy1FnSqh3HCmGF3wNfGZfqVE6En51U1ov3YJcndN4RzS1bZKebB0zL3PQQw9HGu0Mt-YspP7-UFgvUp1HBVfJ__b-WbZMDEOikEYlfzaKimY_HcbsWWT6meBFX-IijIcy8hqeemaraUX-j7w0Eoz_XVm0ASiL7_xRgGfViX4gCQ1ULkObrJzbSEFtL58Y1C2xeKOVh27iGpZssai2MpO6xC5aECPhOKRLluE"
    },
    {
      id: 6,
      name: "Beauty",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhQnxt6rh9h9FBBECGbqsexEEPU8LkW1IxbgTUxku7R5IYHW7WYG2kivRXDIFdAO5_k1bQRlhCUIHFVoQJQiEmM6Qy6JV6cug8VW_thTsf_y3a0TdOCGUidd7ChrUrqPvG7Z3XNQRy4oUmhSXoiWVerTnvKtEHiXDqfvVlSJCCw6uWFgUrOh4Cv_Hx5PkFapriAgXls82uJI24tOBDXD45B3BRKYhkb7J2hrFWTrVjcvaQ-Vk7krWW7H6dPJMWtT8MNx9QBEG9sdw"
    },
    {
      id: 7,
      name: "Toys",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCoFCt_fq238UEgspWK9nLPpqklLDZrLBeoejsTQF0Q10ANXCmwTnnxirgI-HY62JXUl2p59M_jY9tQWUIzIEAnCc4IbZr5OCn1BAGaKACepfaf7GUjfeqiEsZQKkiAzfhFN8zoHo81kqoM3c_bT37wab40RgZUmgcKFXs45URHgG6u56TToKzX0cfEbz__V6nsIuyI1Ns02bcaz66LO2GpJGhhPL4FzX7kmzgDdRL_QfiKMgL7aP0kpyYFQmpWXDuPH2AszOYoMo"
    },
    {
      id: 8,
      name: "Food",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZV2ibCfgE2rVwj058XTPM0jIpos24XRLjBS_rYwN98lM74PsqpU9pJ9WpkDDZKKCx5JMRoMKYFsfEmLVU86aPds_TudVMoHJNNKn-PPH_oWt2iBvfGRmcEjfJ_u0dVpRpQEHyw-_x5U2Ihh1iTYVgQq_GMEMj3fYhegkh8bUGG1IkaZrEa52Oy7_k_reUFdzEwedVG353F3JWMRcbl3UJPKjdAUOXch4opYwv2Rs5HOtZ9GMVsBacdLMR4gSzKcN-f6USeKPHYwM"
    }
  ];

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
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">Categories</p>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#637c88] flex border-none bg-[#f0f3f4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search categories"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-full placeholder:text-[#637c88] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
            </div>
            <div className="grid grid-cols-[repeat(2,minmax(150px,1fr))] gap-10 p-4">
              {categories.map(category => (
                <Link 
                  to={`/category/${category.id}`} 
                  key={category.id} 
                  className="flex flex-1 gap-3 rounded-lg border border-[#dce2e5] bg-white p-4 items-center hover:border-[#42b2ea] hover:shadow-md transition-all"
                >
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                    style={{ backgroundImage: `url(${category.image})` }}
                  ></div>
                  <h2 className="text-[#111518] text-base font-bold leading-tight">{category.name}</h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;