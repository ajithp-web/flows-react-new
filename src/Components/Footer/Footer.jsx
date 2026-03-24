import React from 'react';

import logo from '../../Assets/logo.png';
import callBlack from '../../Assets/call-black.png';
import mailIcon from '../../Assets/mail.png';
import phoneIcon from '../../Assets/phone.png';

const Footer = () => {
  return (
    <footer className="e-finvesto-footer">
      <div className="e-section-inner">
        <div className="row">

          {/* LEFT COLUMN */}
          <div className="col-lg-5 e-footer-left">
            <img src={logo} className="e-footer-logo" alt="Finvesto" />

            <p className="e-footer-text">
              We design APIs keeping both, the customer and the end user in
              mind. This customer first approach
            </p>

            <button className="e-expert-btn-footer">
              Talk to an expert
              <img src={callBlack} className="e-call-icon" alt="call" />
            </button>

            <div className="e-contact-title mt-4">Contact Investo team</div>

            <div className="e-contact-row">
              <div className="e-contact-item">
                <img src={mailIcon} className="e-call-icon" alt="mail" />
                hello@investo.com
              </div>

              <div className="e-divider"></div>

              <div className="e-contact-item">
                <img src={phoneIcon} className="e-call-icon" alt="phone" />
                +91 97233 69753
              </div>
            </div>
          </div>

          {/* APIs */}
          <div className="col-lg-2 col-md-4 e-footer-links">
            <h6>APIs</h6>
            <ul>
              <li>Transactions</li>
              <li>Investor Reporting</li>
            </ul>
          </div>

          {/* USE CASES */}
          <div className="col-lg-2 col-md-4 e-footer-links">
            <h6>Use cases</h6>
            <ul>
              <li>Conversion</li>
              <li>Retention</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="col-lg-3 col-md-4 e-footer-links">
            <h6>Resources</h6>
            <ul>
              <li>Blog</li>
              <li>Privacy policy</li>
              <li>Terms and conditions</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;