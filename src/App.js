import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Styles/global.scss";

import sipIcon from "./Assets/sip.png"; // fallback icon if needed
import callIcon from "./Assets/call_icon.png";
import vectorIcon from "./Assets/Vector.png";
import ctaImage from "./Assets/cta-image.png";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Button from "./Components/Button/Button";
import { getFeatureCards, getFeatureTabs } from "./Services";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [featureCards, setFeatureCards] = useState([]);
  const [feaureTabs, setFeaureTabs] = useState([]);

  // Fetch feature cards on component mount
  useEffect(() => {
    async function fetchFeatureCards() {
      const tabs = await getFeatureTabs();
      const cards = await getFeatureCards();
      console.log(cards, "cards", tabs);

      const formattedCards = cards.map((card) => ({
        icon: sipIcon,
        title: card?.title,
        description: card?.description || "No description provided",
      }));
      setFeatureCards(formattedCards);
      setFeaureTabs(tabs);
    }
    fetchFeatureCards();
  }, []);

  console.log(featureCards, "featureCards");

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

              <Button
                text="Book a call modal"
                icon={callIcon}
                className="e-book-btn"
              />
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section className = "e-features-section">
        <div className = "container">
          <div className = "e-features-header text-center">
            <h2>
              Explore our comprehensive
              <br />
              platform features
            </h2>

            <p>
              Effortlessly navigate the world of mutual fund investments with
              our innovative platform with cutting-edge tools and insights for
              smarter, more strategic investments.
            </p>
                  
            <Button
              text="Talk to an expert"
              icon={vectorIcon}
              className="e-expert-btn"
            />
          </div>

          {/* TABS */}
          <div className="e-features-tabs-wrapper">
            <ul className="e-features-tabs">
              {feaureTabs?.map((tab, index) => (
                <React.Fragment key={tab.id}>
                  <li
                    className={activeTab === index ? "e-active" : ""}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.tabname}{" "}
                  </li>
                  {index < feaureTabs.length - 1 && (
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

                <p>{card.description}</p>
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

                <Button
                  text="Schedule a call"
                  icon={callIcon}
                  className="e-cta-btn"
                />
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
