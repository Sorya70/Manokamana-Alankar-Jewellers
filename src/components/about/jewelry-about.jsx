import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import about_img from '@assets/img/about/about-1.jpg';
import about_thumb from '@assets/img/about/about-2.jpg';
import { ArrowRightLong } from '@/svg';

const JewelryAbout = () => {
  return (
    <>
      <section className="tp-about-area pt-125 pb-180">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-about-thumb-wrapper p-relative mr-35">
                <div className="tp-about-thumb m-img">
                  <Image src={about_img} alt="about_img" />
                </div>
                <div className="tp-about-thumb-2">
                  <Image src={about_thumb} alt="about_thumb" width={300}/>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="tp-about-wrapper pl-80 pt-75 pr-60">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">About Us</span>
                  <h3 style={{ color: 'var(--tp-theme-brown)' }} className="tp-section-title-4 fz-50">
                    Manokamana Alankar Jewellers
                  </h3>
                </div>
                <div className="tp-about-content pl-120">
                  <p>
                    Founded in 2014, <strong>Manokamana Alankar Jewellers</strong> 
                    carries a rich heritage of tradition, trust, and innovation in the world of fine jewellery. 
                    For more than a decade, we have been dedicated to creating ornaments that blend timeless 
                    elegance with modern artistry.
                  </p>
                  <p>
                    We take immense pride in being recognized as a trusted name in 
                    <strong> hallmark gold and silver jewellery</strong>. Each piece is certified 
                    for purity and authenticity, ensuring our customers receive only the finest quality. 
                    From sourcing the best materials to handcrafting each detail, our artisans bring 
                    unmatched precision and beauty to every creation.
                  </p>
                  <p>
                    At Manokamana Alankar Jewellers, we believe jewellery is not just adornment, 
                    but a symbol of love, heritage, and celebration. From elegant daily wear to 
                    luxurious bridal collections, every jewel is designed to combine comfort, style, 
                    and timeless charm.
                  </p>

                  <div className="tp-about-btn">
                    <Link href="/contact" className="tp-btn">
                      Contact Us{" "}
                      <ArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JewelryAbout;
