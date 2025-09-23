import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// internal
import { AddCart, Cart, QuickView, Wishlist } from "@/svg";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";

// internal slider images (demo)
import slider_img_1 from "@assets/img/slider/4/slider-1.png";
import slider_img_2 from "@assets/img/slider/4/slider-2.png";
import slider_img_3 from "@assets/img/slider/4/slider-3.png";
import slider_img_4 from "@assets/img/slider/4/slider-4.png";

const ProductItem = ({ product }) => {
  const { _id, title, tags, status } = product || {};
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);
  const isAddedToWishlist = wishlist.some((prd) => prd._id === _id);
  const dispatch = useDispatch();

  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };

  const handleWishlistProduct = (prd) => {
    dispatch(add_to_wishlist(prd));
  };

  const productImages = [slider_img_1];

  return (
    <div className="tp-product-item-4 p-relative mb-40">
      <div className="tp-product-thumb-4 p-relative fix">
        <Swiper spaceBetween={10} slidesPerView={1} loop>
          {productImages.map((img, index) => (
            <SwiperSlide key={index}>
              {/* Removed Link to stop redirect */}
              <Image
                src={img}
                alt={`product image ${index + 1}`}
                width={284}
                height={352}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="tp-product-badge">
          {status === "out-of-stock" && <span className="product-hot">out-stock</span>}
        </div>
      </div>

      <div className="tp-product-content-4">
        <h3 className="tp-product-title-4">
          {/* Removed Link to stop redirect */}
          <span>{title}</span>
        </h3>
        <div className="tp-product-info-4">
          {/* <p>{tags[0]}</p> */}
        </div>

        <div className="tp-product-price-inner-4">
          <div className="tp-product-price-wrapper-4">
            {/* Example: <span className="tp-product-price-4">${price.toFixed(2)}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
