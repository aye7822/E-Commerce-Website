import React from "react";
import { useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import "./homepage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const data = useSelector((state) => state.data.data);
  console.log("home", data);

  const homeImages = [
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/16/5dbfe05b-cf14-4bae-b6af-1ce144bfa18c1652718466927-Bestselling-Styles_Desk.jpg",
    },
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/c8e64e6b-4e58-45bb-9999-1f323aa7dc601652014311422-Sportswear_Desk.jpg",
    },
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/ba5790ef-6bfe-427c-8b13-739320e1cba11652015668956-Kurtas---Sets_Desk.jpg",
    },
    {
      url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/b83abadd-48d9-4df9-93fa-6a0d090d5ee31652015784857-Trendy-Heels_Desk.jpg",
    },
  ];

  return (
    <>
      <div>
        <div className="homepageimages">
          <SimpleImageSlider
            width={"100%"}
            height={504}
            images={homeImages}
            autoPlay={true}
          />
        </div>

        <div>
          <h4 className="cat-title">CATEGORIES TO BAG</h4>
        </div>

        <div className="cat-bag-div">
          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg"
              alt="Sports Shoes"
            />
          </Link>
          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg"
              alt="Trousers"
            />
          </Link>

          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg"
              alt="Casual Shoes"
            />
          </Link>

          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"
              alt="Shirts"
            />
          </Link>
          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"
              alt="T-Shirts"
            />
          </Link>
          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg"
              alt="Jeans"
            />
          </Link>
        </div>

        <div>
          <h4 className="cat-title">DEALS ON LATEST ARRIVALS</h4>
        </div>

        <div className="latest-div">
          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/02068605-5f9f-404a-8b1d-87eaaba283e71646914652766-SS22-PricingCoupon-600Off--1-.gif"
              alt="600 Off"
            />
          </Link>

          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/6160db76-ee07-49bc-8337-1fc74dd94c2a1646914679466-SS22-PricingCoupon-500Off--1-.gif"
              alt="500 Off"
            />
          </Link>

          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/2a0effa7-c662-45c8-8084-96cdea0710c21646911018691-unisex-1499.gif"
              alt="Unisex 1499"
            />
          </Link>

          <Link to="">
            <img
              src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/a1690ca9-bcec-469d-b15b-991b3dad64bc1646910870888-SS22-StripBanners-UnisexUnder999.gif"
              alt="Unisex Under 999"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
