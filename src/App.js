import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Styles/global.scss'; 



import sipIcon from './Assets/sip.png';
import callIcon from './Assets/call_icon.png';
import vectorIcon from './Assets/Vector.png';
import ctaImage from './Assets/cta-image.png';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const tabs = [
  'Customer management',
  'Financial planning',
  'Customer engagement',
  'Communication tools',
];

const featureCards = [
  { icon: sipIcon, title: 'User Management' },
  { icon: sipIcon, title: 'Sub-user management' },
  { icon: sipIcon, title: 'Goal planning' },
  { icon: sipIcon, title: 'Investment options' },
  { icon: sipIcon, title: 'Portfolio tracking' },
  { icon: sipIcon, title: 'Smart analytics' },
  { icon: sipIcon, title: 'Tax management' },
  { icon: sipIcon, title: 'Reports' },
  { icon: sipIcon, title: 'Support' },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* HERO SECTION */}
      <header className="e-hero-section">
        <Navbar />
        <div className="e-hero-content">
          <div className="container text-center">
            <div className="e-hero-text mx-auto">
              <h1>Experience next generation of mutual fund management</h1>
              <p className="e-hero-desc">
                Effortlessly navigate the world of mutual fund investments
                <br className="d-none d-md-block" />
                with our innovative platform with cutting-edge tools and
                <br className="d-none d-md-block" />
                insights for smarter, more strategic investments.
              </p>

              <button className="e-book-btn">
                Book a call modal
                <img src={callIcon} className="e-call-icon" alt="call" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section className="e-features-section">
        <div className="container">
          <div className="e-features-header text-center">
            <h2>
              Explore our comprehensive
              <br />
              platform features
            </h2>

            <p>
              Effortlessly navigate the world of mutual fund investments with our
              innovative platform with cutting-edge tools and insights for
              smarter, more strategic investments.
            </p>

            <button className="e-expert-btn">
              Talk to an expert
              <img src={vectorIcon} className="e-call-icon-white" alt="arrow" />
            </button>
          </div>

          {/* TABS */}
          <div className="e-features-tabs-wrapper">
            <ul className="e-features-tabs">
              {tabs.map((tab, index) => (
                <React.Fragment key={tab}>
                  <li
                    className={activeTab === index ? 'e-active' : ''}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </li>

                  {index < tabs.length - 1 && (
                    <li className="e-divider"></li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* FEATURE CARDS */}
          <div className="e-feature-cards">
            {featureCards.map((card) => (
              <div className="e-feature-card" key={card.title}>
                <div className="e-icon">
                  <img src={card.icon} alt={card.title} />
                </div>

                <h5>{card.title}</h5>

                <p>
                  We design APIs keeping both, the customer and the end user in
                  mind. This customer first approach. This customer first approach.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="e-cta-section">
        <div className="container">
          <div className="e-cta-card">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <h2 className="e-cta-title">
                  Connect the wealth creation and your customers with power of
                  API's and White labelled platform.
                </h2>

                <p className="e-cta-subtitle">
                  Transforming finance one connection at a time
                </p>

                <button className="e-cta-btn">
                  Schedule a call
                  <img src={callIcon} className="e-call-icon" alt="call" />
                </button>
              </div>
            </div>

            <img
              src={ctaImage}
              className="e-cta-graphic"
              alt="decorative graphic"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;