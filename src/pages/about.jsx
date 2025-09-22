// pages/about.js
import React from "react";
import Wrapper from "@/layout/Wrapper"; // if you use common layout
import SEO from "@/components/seo";     // if you have SEO meta
import JewelryAbout from "@/components/about/jewelry-about";
import Footer from "@/layout/footers/footer";
import HeaderTwo from "@/layout/headers/header-2";

const AboutPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About Us" />
       <HeaderTwo style_2={true} />
      <JewelryAbout />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default AboutPage;
