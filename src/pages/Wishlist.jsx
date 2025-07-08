import React from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Elegant Evening Dress",
      price: 79.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg-MQagdPKieXR42hhxC3QYbQvvqa26FRG38aKk-691jJiu3KZocoWEQPV_KiYOZAp1xvc9_rxK8_17WUwDxBUq_jZOctwq31PRkflK0taHCWFAlpRgTTMREVIBw0pk7MT4XTO9Ro2h0K1Q6r_fkhDvxVhqoPGty1ugfM5kMFnXFbvTrruff1-K2bljuO5QCwpt9S9dU3_dx3Rms2cUZrrOSrrspn59eqrCbtZBGi9N14zWRwwhuT4BXWCyJZkVcGSwOoCBrBAiQ4"
    },
    {
      id: 2,
      name: "Casual Summer Top",
      price: 29.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC6CHZoz5VgL1WpR-fkFLafCNKDXmazJQZlJ11mQpzp7Mwjdq9muKzANq9QOPcufrjEqgcdlSQw8pkeyN2SNLoGBzd8DT9aVFrwj7GMDxy1Vx-4Sh5g495U7IwMdvIchocNvHmENeYYDcArkIB5ZmFTDTmnjdvRDa_5IP0mtd6n8X7wPyJvWKdkh-yAFn2MCSM81ScplDvSQfHs8Vamgucmu-RnGEIJp0ptGcuSmLt6cullfgzQj1f_QkZo_8MibC2neDGR6T6Rp4"
    },
    {
      id: 3,
      name: "Stylish Handbag",
      price: 59.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmZAdnnYcGw7kfWTPt5mxH2Hr2rE58uKlgbD02NZPUWRGHQyYvVIb5ivXZwQo3ClhAfjj5eUWPYZ7LIMI-QFM51CwI0LUee7IPJWAijd89bldkIEfxRwkZcTV5tP-3Qbol5AI4wMQForzyHTeEEda09eC1O3jQXjCXPDilTFOlNHDylAuHhNvRhC3Fc1mRaL-dQ5B52ePEiC5ZnkrkR5uH79_Fkcf8rLOLbB5Ts6omDcCSYhacPG2XlZhZHcYYCWL23l8UmFBn09I"
    },
    {
      id: 4,
      name: "Comfortable Sneakers",
      price: 49.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3hY3IXWfm8ozwGGjoE0qzR0VhubrrFXtbm-zTa84DLpyn79SjYy-uE3BZeMELbnTaExH9bWv3lXg3XaSKKZW3VkUyx1Az8_0oXBdmlsh0ZUo57FsM5YXM6un8QJ1jS_wEZpcaRWdOKhmDk3a6UrEmFnMRa7PVN3ei6hvkTM3B5ukT5KNWJo1eRhEGJMWYKK6w2nIwK44fbD63cVTW4Mot4Z3eVId3Py80vZvx0MB3yC_gEbOfUkhCkqx069GdxLymsSeIoYMRNB8"
    },
    {
      id: 5,
      name: "Classic Watch",
      price: 99.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmIbCetFk3LwPhjsSmnP0eUKIW4EUVaubOCZdi10k4aUdoY71Miz5gFxdK6ujUrYr1vCQp97n52l2kE09p6kXKby0Vt-4aauqvtwTCKY82YS4fc3TO9hl8V4zLg6jTiU8tDDOrJ0i8tgLy_ib1iCs43SS3VuQz4-9aKv6335cSj6yMZetUmM6i-e39kBdHHZfx_VpSKyj9Dd8zDn_rBLb0AbmheUJof1vHCL-YhqT3TD_zfIn1bRVX0aZBJiqqZtkVb5uDDH3Imxw"
    },
    {
      id: 6,
      name: "Trendy Sunglasses",
      price: 39.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUSD1ta8dfHgP2Sg4tmfjT9zzp0VRA_6lxbEMNtsOJ5DBcnMVU-kv9R_uaKQTwXGU8mqDpXPTFADnC7vb453mmkXogCJ_ks18sCbLH_wAbDDbYlwzKpEH4ni_vyR1tQKa0vc9SNIvkhj8pF0QRJcpnWSR4ntbQW0u0AaaZCTbapEJ5B5_Iwno9SKMHfAn_ZGQuayIyfSgAXBEafP-7TTgRJzk8cnidZiYr-j3LpC-6m7ExWWhh00l6w8qbUVvwVMeflhEUIAZwqx0"
    },
    {
      id: 7,
      name: "Cozy Knit Sweater",
      price: 69.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuiQiP3HAAiN83jsVC1DMg2hPwXLFScfuw4Z27KQKcj-PNwXAc9-ng98TZqrMVlrp60VMO49Ru3In-x62OZNPbcfZAhpyd8VRd_24yI5-lLxfbbH3G_dx2E7J4rNByW7u_jTsjqQVxnZIWe_cXw0Znw-bmFE97UbqLCMq2ZxlAn6QO3Yl0OKqMHcPvpblgPIMl4J_KvixzMndO1VfG4SxoUgbhDaR__hgIpPHTT5bnOumpCEYioZUTQI1fbuwaImIkF0Xv03PFcUE"
    },
    {
      id: 8,
      name: "Versatile Jeans",
      price: 54.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7mbPkZ96o2BuJYXV6wrlCGM7v9bVd0LzVtUchyL4MaTa-Ma-d3YQ6zvUqKDs0cRglQ1EtYaq8ozDDIZKj7hsPNw3YVvbjFHwI8W_RAopPlRTfT9ZYFEN5OWbGg6JXKbi2YvoJ9yMuwujuLEKsHhjYZdJFikSeSjpR2V9xaRmWh7VcHwJB974BhmS58Y0VfI85P3Rz54FmlYzfIKft9PM2DD1QPfy_t80oIgpB1HuLq7XdhoLUVwjRPX1H3BtLEq1gdLMMOUjnIN8"
    },
    {
      id: 9,
      name: "Chic Ankle Boots",
      price: 89.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVS_IW1FZlIosIytRWbFUGJyat6xO9yGpm0JekY_fdttqWwvNc6Ne4frtfoJj_qHujV0qYgq6RdFK2ZTWN25W8-uKEbwMRRTYF1ZkuNLUumQdjoTkaksGV_4_IPwumpwJfEI-o7avQRLegb0KQ0NhcsdT0wZm5ob4q9RpjLjhu3VaiGwcQWY2LAF0PN6q7ZANcJQBIrQzfayrwPlJqFyQrJyM_E8lHDhrbpSKCkhueSp_dbU4uaJ8e75xTPSCkocJmh1kzOqQQ32k"
    },
    {
      id: 10,
      name: "Statement Necklace",
      price: 44.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGGACS8YKxvjGJjLyGxETs9QizFRbTTzo8qlOj1dz25rAivrdmmd5W9XAFrhiHyyOImgQqbZg8qY5HSEwKx5F4wy9lRsanFhBhki_fEL2h_LKfmqZWLsdf41bbIt_amGwUsGj5n4wuTlhWK1Rox_5GbJnCQsFLEQwXTYbt2kJvpA6I3yEacl-QbqTfi3pyqb_Z_9gHY5BSO8BR331LKROhzoLJCzJ8Ht2_Jc7XVCLRfJ-TcE7vstHlvpwxVFM8YUls6GShOylYA1I"
    },
    {
      id: 11,
      name: "Flowy Maxi Skirt",
      price: 64.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZb7vk_cQY6Pt4CRc6er-Pkl7uKq-wo8zAor1AlkApq1Mtjhyy3VzoLVDneW6lndgD8k0JsyliEgMictiK98ZqNnxGHC12BKNUxiufvvpgls8_0hSmL8MBLm4l60kgcfQxuS7icsheAkdmupLefj3z1nfqHuEiXIZDs12K-HTS4IQ0OUMvbjIvnMK3Oon4EcbNlSjM66ySq6rL1At8Bw_0VOHc8F6Ryp-citLq9E4lnHYXX-Zp22Sm5OHb3jkPWqTnZ9YK7_fNHPo"
    },
    {
      id: 12,
      name: "Leather Crossbody Bag",
      price: 74.99,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPTLLI--TmvT41yXEdUlLtmebtMZwX-6AJK1O6MyB507I49tKysnhMO0FCh-IQfRnDce1u7WUBiGTpLUd8rzfYAxtEF7bMvQGVyQcagoIGNNOZw-8aQtNqxHyTzzuGqC_aw1ggUki-6f78MIoUoSDmP4-LBLG-lEoK9j5ldQXhyJ5yJMtiyViD-XI-18_T1chS9a4tw5zgKRASwxZ70IZHbe_toGONILILmR1PfSzfgHVhCkkLUXlh6cCqBJTPACMuBx1KMz2G9pE"
    }
  ];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
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

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">Sophia Carter's Wishlist</p>
            </div>
            
            {/* Wishlist Items Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {wishlistItems.map(item => (
                <div key={item.id} className="flex flex-col gap-3 pb-3 group">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl hover:shadow-lg transition-shadow"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div>
                    <p className="text-[#111518] text-base font-medium leading-normal group-hover:text-[#42b2ea]">{item.name}</p>
                    <p className="text-[#637c88] text-sm font-normal leading-normal">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-center p-4">
              <Link to="#" className="flex size-10 items-center justify-center hover:bg-[#f0f3f4] rounded-full">
                <div className="text-[#111518]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </Link>
              
              <Link to="#" className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111518] rounded-full bg-[#f0f3f4] hover:bg-[#e0e5e8]">1</Link>
              <Link to="#" className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111518] rounded-full hover:bg-[#f0f3f4]">2</Link>
              <Link to="#" className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111518] rounded-full hover:bg-[#f0f3f4]">3</Link>
              
              <Link to="#" className="flex size-10 items-center justify-center hover:bg-[#f0f3f4] rounded-full">
                <div className="text-[#111518]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;