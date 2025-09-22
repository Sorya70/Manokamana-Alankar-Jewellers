import React from 'react';

const ContactMap = () => {
  return (
    <>
      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper">
                <div className="tp-map-hotspot">
                  <span className="tp-hotspot tp-pulse-border">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="6" fill="#821F40" />
                    </svg>
                  </span>
                </div>
                <div className="tp-map-iframe">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4218.301187542268!2d85.50855852008564!3d26.058817951906317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed0dc46ae2243b%3A0xab5ca5841cd522d8!2sManokamana%20Alankar%20Jewellers!5e0!3m2!1sen!2sin!4v1758476939558!5m2!1sen!2sin"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;