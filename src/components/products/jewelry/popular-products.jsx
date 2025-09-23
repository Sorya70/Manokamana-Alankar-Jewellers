import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import ProductSliderItem from './product-slider-item';
import { productsStatic } from '@/data/products';

// slider settings
const slider_setting = {
  slidesPerView: 5,
  spaceBetween: 25,
  pagination: { el: ".tp-category-slider-dot-4", clickable: true },
  scrollbar: { el: '.tp-category-swiper-scrollbar', draggable: true, dragClass: 'tp-swiper-scrollbar-drag', snapOnRelease: true },
  breakpoints: {
    1400: { slidesPerView: 5 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  }
}

const PopularProducts = () => {
  const product_items = productsStatic.slice(0, 4);

  return (
    <section className="tp-category-area pt-115 pb-105 tp-category-plr-85" style={{ backgroundColor: `#EFF1F5` }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-title-wrapper-4 mb-60 text-center">
              <span className="tp-section-title-pre-4">Shop by Category</span>
              <h3 className="tp-section-title-4">Popular on the Shofy store.</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-category-slider-4">
              <Swiper {...slider_setting} modules={[Scrollbar, Pagination]} className="tp-category-slider-active-4 swiper-container mb-70">
                {product_items.map(item => (
                  <SwiperSlide key={item._id}>
                    <ProductSliderItem product={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="tp-category-swiper-scrollbar tp-swiper-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
