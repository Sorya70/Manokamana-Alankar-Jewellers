// pages/return-policy.js
import React from "react";
import Wrapper from "@/layout/wrapper"; // common layout
import SEO from "@/components/seo";     // SEO meta
import Footer from "@/layout/footers/footer";
import HeaderTwo from "@/layout/headers/header-2";

const ReturnPolicyPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Return & Refund Policy" />
      <HeaderTwo style_2={true} />

      <section className="tp-return-policy pt-120 pb-80">
        <div className="container">
          <h2 className="mb-20">Return & Refund Policy</h2>
          <p>
            At <b>Manokamana Alankar Jewellers</b>, we strive to ensure that our customers are fully satisfied with their purchases.
            However, if you are not entirely happy with your order, our return and refund policy below explains your options.
          </p>

          <h4>Returns</h4>
          <ul>
            <li>You may request a return within <b>7 days</b> of receiving your product.</li>
            <li>To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging.</li>
            <li>Certain products such as personalized or custom-made items are not eligible for return.</li>
          </ul>

          <h4>Refunds</h4>
          <ul>
            <li>Once your return is received and inspected, we will notify you of the status of your refund.</li>
            <li>If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7–10 business days.</li>
            <li>Shipping costs are non-refundable.</li>
          </ul>

          <h4>Exchanges</h4>
          <p>
            We only replace items if they are defective or damaged. If you need to exchange an item for the same product, please contact us first.
          </p>

          <h4>Shipping of Returns</h4>
          <p>
            You will be responsible for paying your own shipping costs for returning your item. Shipping costs are non-refundable. 
            If you are shipping an item over ₹5,000, we recommend using a trackable shipping service or purchasing shipping insurance.
          </p>

          <h4>Contact Us</h4>
          <p>
            If you have any questions regarding our Return & Refund Policy, please contact us:
            <br />
            <b>Email:</b> <a href="mailto:manokamanaalankar@gmail.com">manokamanaalankar@gmail.com</a>
            <br />
            <b>Phone:</b> +91 9973103394
            <br />
            <b>Address:</b> Dardha Bazaar Baikatpur Haat,Baikunthpur, Bihar 843132
          </p>
        </div>
      </section>

      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ReturnPolicyPage;
