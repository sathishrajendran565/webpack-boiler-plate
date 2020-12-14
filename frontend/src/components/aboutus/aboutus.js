import React from "react";
import mainImg from "../../assets/images/about-main.jpg";
import insetImg from "../../assets/images/about-inset.jpg";
import { useTranslation } from "react-i18next";

const aboutus = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div id={t("About")} className="about-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                className="wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <h2 className="block-title">{t("AboutUs")} </h2>
                <p>{t("About-p1")}</p>
                <p>{t("About-p2")}</p>
                <p>{t("About-p3")}</p>
                <p>{t("About-p4")}</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                className="wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="about-images">
                  <img
                    className="about-main"
                    src={mainImg}
                    alt="About Main Image"
                  />
                  <img
                    className="about-inset"
                    src={insetImg}
                    alt="About Inset Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutus;
