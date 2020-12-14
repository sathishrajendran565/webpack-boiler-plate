import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import ReactWOW from "react-wow";
import { useTranslation } from "react-i18next";
import placeholderImg from "../../assets/images/about-inset1.jpg";
import sandwitchImg from "../../assets/images/Grilled Sandwiches.png";
import healthyBowlsImg from "../../assets/images/Healthy Bowls.png";
import levianBreadBunsImg from "../../assets/images/Levain Bread Buns.png";
import saladsImg from "../../assets/images/Salads.png";
import soupsImg from "../../assets/images/Soups.png";

const menu = () => {
  const { t } = useTranslation("common");
  const [menuItems, setMenuItems] = useState({
    activeItem: 0,
    items: [
      { name: "MainOrders", icon: "flaticon-dinner" },
      { name: "HealthyBowls", icon: "flaticon-dinner" },
      { name: "Soups", icon: "flaticon-desert" },
      { name: "LevainBreadBuns", icon: "flaticon-canape" },
      { name: "GrilledSandwiches", icon: "flaticon-canape" },
      { name: "Salads", icon: "flaticon-canape" },
      { name: "Coffee & Drinks", icon: "flaticon-coffee" },
    ],
  });
  useEffect(() => {}, []);

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const InitSlider = () => {
    var element = document.getElementsByClassName("slick-current")[0];
    element.classList.add("is-active");
  };

  const handleMenuHeaderClick = (index) => {
    setMenuItems({
      activeItem: index,
      items: [
        { name: "MainOrders", icon: "flaticon-dinner" },
        { name: "HealthyBowls", icon: "flaticon-dinner" },
        { name: "Soups", icon: "flaticon-desert" },
        { name: "LevainBreadBuns", icon: "flaticon-canape" },
        { name: "GrilledSandwiches", icon: "flaticon-canape" },
        { name: "Salads", icon: "flaticon-canape" },
        { name: "Coffee & Drinks", icon: "flaticon-coffee" },
      ],
    });
  };

  return (
    <>
      <div id={t("Menu")}>
        <div className="menu-main pad-top-100 pad-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ReactWOW className="wow fadeIn" duration={"1s"} delay={"0.1s"}>
                  <h2 className="block-title text-center">{t("Our_Menu")}</h2>
                  {/* <p class="title-caption text-center">Here is a list of our menu </p> */}
                </ReactWOW>
                <div className="tab-menu">
                  <Slider
                    onInit={InitSlider}
                    asNavFor={nav1}
                    ref={slider2}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    infinite={false}
                    cssEase={"cubic-bezier(0.77, 0, 0.18, 1)"}
                    responsive={[
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4,
                        },
                      },
                      {
                        breakpoint: 769,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4,
                        },
                      },
                      {
                        breakpoint: 420,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                        },
                      },
                    ]}
                    className="slider-nav"
                  >
                    {menuItems.items.map((item, index) => {
                      return (
                        <div
                          className={
                            menuItems.activeItem == index
                              ? "tab-title-menu is-active"
                              : "tab-title-menu "
                          }
                          onClick={() => {
                            handleMenuHeaderClick(index);
                          }}
                          style={{ textTransform: "uppercase" }}
                        >
                          <h1
                            style={{
                              paddingTop: "30px",
                              borderBottom: "1px solid #000",
                              overflowWrap: "break-word",
                              // whiteSpace: "nowrap",
                              wordWrap: "break-word",
                              hyphens: "auto",
                              display: "inline-block",
                            }}
                          >
                            {t(item.name)}
                          </h1>
                          <p>
                            {
                              <i className={item.icon} />
                              // <img
                              //   src={item.icon}
                              //   className="headerMenu"
                              // />
                            }
                          </p>
                        </div>
                      );
                    })}
                  </Slider>
                  <Slider
                    asNavFor={nav2}
                    ref={slider1}
                    arrows={false}
                    adaptiveHeight={true}
                    focusOnSelect={false}
                    className="slider slider-single"
                  >
                    <div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("MainOrders_Item1")}</h3>
                            <p>{t("MainOrders_Item1_NutrientInfo")}</p>
                          </div>
                          <span className="offer-price">
                            {t("MainOrders_Item1_Price")}
                          </span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("MainOrders_Item2")}</h3>
                            <p>{t("MainOrders_Item2_NutrientInfo")}</p>
                          </div>
                          <span className="offer-price">
                            {t("MainOrders_Item2_Price")}
                          </span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("MainOrders_Item3")}</h3>
                            <p>{t("MainOrders_Item3_NutrientInfo")}</p>
                          </div>
                          <span className="offer-price">
                            {t("MainOrders_Item3_Price")}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("MainOrders_Item4")}</h3>
                            <p>{t("MainOrders_Item4_NutrientInfo")}</p>
                          </div>
                          <span className="offer-price">
                            {t("MainOrders_Item4_Price")}
                          </span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("MainOrders_Item5")}</h3>
                            <p>{t("MainOrders_Item5_NutrientInfo")}</p>
                          </div>
                          <span className="offer-price">
                            {t("MainOrders_Item5_Price")}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("MainOrders_Item6")}</h3>
                            <p>{t("MainOrders_Item6_NutrientInfo")}</p>
                          </div>
                          <span className="offer-price">
                            {t("MainOrders_Item6_Price")}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("MainOrders_Item7")}</h3>
                            <p>{t("MainOrders_Item7_NutrientInfo")}</p>
                          </div>
                          <span className="offer-price">
                            {t("MainOrders_Item7_Price")}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div>
                          <div>
                            <img
                              src={placeholderImg}
                              style={{
                                height: "210px",
                                width: "330px",
                                paddingBottom: "25px",
                                paddingLeft: "20px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("HealthyBowls_Item1")}</h3>
                            <p>{t("HealthyBowls_Item1_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("HealthyBowls_Item2")}</h3>
                            <p>{t("HealthyBowls_Item2_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("HealthyBowls_Item3")}</h3>
                            <p>{t("HealthyBowls_Item3_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Soups_Item1")}</h3>
                            <p>{t("Soups_Item1_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Soups_Item2")}</h3>
                            <p>{t("Soups_Item2_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Soups_Item3")}</h3>
                            <p>{t("Soups_Item3_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("LevainBreadBuns_Item1")}</h3>
                            <p>{t("LevainBreadBuns_Item1_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("LevainBreadBuns_Item2")}</h3>
                            <p>{t("LevainBreadBuns_Item2_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("LevainBreadBuns_Item3")}</h3>
                            <p>{t("LevainBreadBuns_Item3_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("GrilledSandwiches_Item1")}</h3>
                            <p>{t("GrilledSandwiches_Item1_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("GrilledSandwiches_Item2")}</h3>
                            <p>{t("GrilledSandwiches_Item2_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("GrilledSandwiches_Item3")}</h3>
                            <p>{t("GrilledSandwiches_Item3_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Salads_Item1")}</h3>
                            <p>{t("Salads_Item1_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Salads_Item2")}</h3>
                            <p>{t("Salads_Item2_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Salads_Item3")}</h3>
                            <p>{t("Salads_Item3_Ingrediants")}</p>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item1")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item2")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item3")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item4")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item5")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item6")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item7")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item8")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item9")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item10")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item11")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item12")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item13")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item14")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="offer-item">
                          <div>
                            <h3>{t("Coffee_And_Drinks_Item15")}</h3>
                          </div>
                          <span className="offer-price">Kr100</span>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default menu;
