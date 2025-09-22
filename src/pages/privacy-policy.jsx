// pages/privacy-policy.js
import React from "react";
import Wrapper from "@/layout/wrapper"; // common layout
import SEO from "@/components/seo";     // SEO meta
import Footer from "@/layout/footers/footer";
import HeaderTwo from "@/layout/headers/header-2";

const PrivacyPolicyPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Privacy Policy" />
      <HeaderTwo style_2={true} />

      <section className="tp-privacy-policy pt-120 pb-80">
        <div className="container">
          <h2 className="mb-20">Privacy Policy</h2>
          <p>
            This privacy policy sets out how <b>Manokamana Alankar Jewellers</b> uses and protects any information that you give
            Manokamana Alankar Jewellers when you visit their website and/or agree to purchase from them.
          </p>

          <p>
            Manokamana Alankar Jewellers is committed to ensuring that your privacy is protected. Should we ask you to provide certain
            information by which you can be identified when using this website, you can be assured that it will only be used in
            accordance with this privacy statement.
          </p>

          <p>
            Manokamana Alankar Jewellers may change this policy from time to time by updating this page. You should check this page from
            time to time to ensure that you adhere to these changes.
          </p>

          <h4>We may collect the following information:</h4>
          <ul>
            <li>Name &amp; Contact information including email address</li>
            <li>Demographic information such as postcode, preferences and interests, if required</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>

          <h4>What we do with the information we gather</h4>
          <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
          <ul>
            <li>Internal record keeping.</li>
            <li>We may use the information to improve our products and services.</li>
            <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.</li>
            <li>We may use the information to customise the website according to your interests.</li>
          </ul>

          <h4>How we use cookies</h4>
          <p>
            A cookie is a small file which asks permission to be placed on your computer&apos;s hard drive. Once you agree, the file is
            added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web
            applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and
            dislikes by gathering and remembering information about your preferences.
          </p>
          <p>
            We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and
            improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes
            and then the data is removed from the system.
          </p>
          <p>
            Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which
            you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose
            to share with us.
          </p>
          <p>
            You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
          </p>

          <h4>Controlling your personal information</h4>
          <p>
            You may choose to restrict the collection or use of your personal information in the following ways:
          </p>
          <ul>
            <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.</li>
            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <a href="mailto:goldsmithdeepakkumar@gmail.com">goldsmithdeepakkumar@gmail.com</a>.</li>
          </ul>

          <p>
            We will not sell, distribute or lease your personal information to third parties unless we have your permission or are
            required by law to do so. We may use your personal information to send you promotional information about third parties
            which we think you may find interesting if you tell us that you wish this to happen.
          </p>

          <p>
            If you believe that any information we are holding on you is incorrect or incomplete, please write to:
            <br />
            <b>Dardha Bazaar Baikatpur Haat, Baikunthpur, Bihar 843132</b>
            <br />
            or contact us at <b>+91 9973103394</b> or <a href="mailto:goldsmithdeepakkumar@gmail.com">goldsmithdeepakkumar@gmail.com</a>.
            We will promptly correct any information found to be incorrect.
          </p>

          <h4>Contact Us</h4>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <b>Email:</b> <a href="mailto:goldsmithdeepakkumar@gmail.com">goldsmithdeepakkumar@gmail.com</a>
            <br />
            <b>Phone:</b> +91 9973103394
          </p>
        </div>
      </section>

      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default PrivacyPolicyPage;
