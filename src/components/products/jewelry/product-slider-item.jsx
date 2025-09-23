import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// internal
import { AddCart, Cart, QuickView, Wishlist } from "@/svg";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";
import { notifyError } from "@/utils/toast";

const ProductSliderItem = ({ product }) => {
  const { _id, title, price, img, status } = product || {};
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);
  const isAddedToWishlist = wishlist.some((prd) => prd._id === _id);
  const dispatch = useDispatch();

  // handle add product
  const handleAddProduct = (prd) => {
    if (prd.status === 'out-of-stock') {
      notifyError(`This product out-of-stock`)
    }
    else {
      dispatch(add_cart_product(prd));
    }
  };
  // handle wishlist product
  const handleWishlistProduct = (prd) => {
    dispatch(add_to_wishlist(prd));
  };
  return (
    <div className="tp-category-item-4 p-relative z-index-1 fix text-center">
      <div
        className="tp-category-thumb-4 include-bg"
        style={{
          backgroundImage: `url(${img})`,
          backgroundColor: "#FFFFFF",
          backgroundPosition: "0px -80px",
        }}
      ></div>
      {/* <div className="tp-category-content-4">
        <div className="tp-category-price-wrapper-4 mt-0 sm:mt-4">
          <h3 className="tp-category-title-4">
            <span>{title}</span>
          </h3>
        </div>
      </div> */}

    </div>
  );
};

export default ProductSliderItem;
