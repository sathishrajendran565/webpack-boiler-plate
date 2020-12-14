import React, { useState, useEffect } from "react";
import swedenImg from "../../assets/images/sweden.png";
import usImg from "../../assets/images/unitedstates.png";
import logoImg from "../../assets/images/logo.png";
import Menu from "../menu/menu";
import Aboutus from "../aboutus/aboutus";
import Contactus from "../contactus/contactus";
import { init } from "ityped";

import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const home = () => {
  const { t, i18n } = useTranslation("common");

  const [scroll, setScroll] = useState(false);

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const [headerMenuItems, setHeaderMenuItems] = useState({
    activeItem: 0,
    items: ["Home", "Menu", "About", "Contact Us"],
  });

  const initTypingAnimation = () => {
    const myElement = document.querySelector("#some-id");

    init(myElement, {
      showCursor: true,
      strings: [" and healthy" + "._"],
    });
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const changeActiveClass = (index) => {
    setHeaderMenuItems({
      items: ["Home", "Menu", "About", "Contact Us"],
      activeItem: index,
    });
    setToggleMobileMenu(!toggleMobileMenu);
  };

  const clickHandler = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollTop > 50 ? setScroll(true) : setScroll(false);
    });
    initTypingAnimation();
  }, []);

  return (
    <>
      <div id={t("Home")} className="main-menu">
        <nav
          className="navbar navbar-default navbar-fixed-top"
          style={{ backgroundColor: "#F9B7B7" }}
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded={toggleMobileMenu}
                aria-controls="navbar"
                onClick={clickHandler}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div
              id="navbar"
              className={
                !toggleMobileMenu
                  ? "navbar-collapse collapse"
                  : "navbar-collapse collapse in"
              }
              style={{ backgroundColor: "#F9B7B7" }}
            >
              <ul
                className="nav navbar-nav"
                style={{ fontSize: "17px", margin: "0 14px" }}
              >
                {headerMenuItems.items.map((item, index) => (
                  <li
                    key={index}
                    className={
                      headerMenuItems.activeItem === index ? "active" : ""
                    }
                  >
                    <Link
                      to={t(item)}
                      spy={true}
                      smooth={true}
                      onClick={() => {
                        changeActiveClass(index);
                      }}
                    >
                      {t(item)}
                    </Link>
                    {/* <a href={"#" + item}>{t(item)}</a> */}
                  </li>
                ))}
              </ul>
              <ul className="socials-box">
                <li>
                  <a
                    href="https://sv-se.facebook.com/foodist.nu"
                    target="_blank"
                  >
                    <div className="social-circle-border">
                      <i className="fa  fa-facebook" />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/foodist.nu/"
                    target="_blank"
                  >
                    <div className="social-circle-border">
                      <i className="fa fa-instagram" />
                    </div>
                  </a>
                </li>
                <li style={{ paddingRight: "15px", paddingLeft: "10px" }}>
                  <a href="#">
                    <div className="social-circle-border">
                      <img
                        src={swedenImg}
                        alt=""
                        style={{ width: "25px", paddingBottom: "54px" }}
                        onClick={() => changeLanguage("se")}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="social-circle-border">
                      <img
                        src={usImg}
                        alt=""
                        style={{ width: "25px", paddingBottom: "54px" }}
                        onClick={() => changeLanguage("en")}
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/*/.nav-collapse */}
          </div>
        </nav>
      </div>
      <div id="banner" className="banner full-screen-mode parallax">
        <div className="container pr">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="banner-static">
              <div className="banner-text">
                <div className="banner-cell">
                  <div style={{ paddingTop: "150px" }}>
                    <a href="#">
                      <img src={logoImg} alt="" style={{ height: "300px" }} />
                    </a>
                  </div>
                  <h1
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      letterSpacing: "-2px",
                      paddingBottom: "150px",
                    }}
                  >
                    <span>{"Fresh"}</span>
                    <br />
                    <span style={{ fontWeight: "bold" }} id="some-id" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Menu />
      <Aboutus />
      <Contactus />
    </>
  );
};

export default home;
