import React from "react";
import { useTranslation } from "react-i18next";

const contactus = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div id={t("Contact Us")} className="footer-main">
        <div className="footer-news pad-top-100 pad-bottom-70">
          <h2
            className="ft-title color-white text-center"
            style={{
              fontFamily: '"Poppins", sans-serif',
              textAlign: "center",
              letterSpacing: "-2px",
              fontWeight: "bold",
            }}
          >
            {t("ContactUs")}
          </h2>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                style={{ paddingBottom: "10px" }}
              >
                <div className="map-responsive" style={{ height: "600px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2041.8896603780545!2d17.9457217!3d59.2178594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f70e40c56d701%3A0xef1c9eb722952158!2sBj%C3%B6rnkullav%C3%A4gen%202%2C%20141%2051%20Huddinge!5e0!3m2!1sen!2sse!4v1607064436523!5m2!1sen!2sse"
                    width={600}
                    height={800}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 footer-in-main">
                <div>
                  <form
                    className="form-horizontal"
                    style={{
                      color: "black",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    <div className="form-group">
                      <label className="col-md-3 control-label" htmlFor="name">
                        {t("ContactUs_address")}
                      </label>
                      <div className="col-md-9" style={{ paddingTop: "7px" }}>
                        <span
                          className="contactus"
                          style={{ fontSize: "14px", color: "black" }}
                        >
                          Flemingsberg station, Björnkullavägen 2, 141 51
                          Stockholm
                        </span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-3 control-label" htmlFor="name">
                        {t("ContactUs_phone")}
                      </label>
                      <div className="col-md-9" style={{ paddingTop: "7px" }}>
                        <span
                          className="contactus"
                          style={{ fontSize: "14px" }}
                        >
                          +46 80005 89080
                        </span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-3 control-label" htmlFor="name">
                        {t("ContactUs_email")}
                      </label>
                      <div className="col-md-9" style={{ paddingTop: "7px" }}>
                        <span
                          style={{ fontSize: "14px" }}
                          className="contactus"
                        >
                          <span href="#">info@foodist.nu</span>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 control-label" htmlFor="name">
                        {t("ContactUs_opening_hours")}
                      </label>
                      <div className="col-md-9" style={{ paddingTop: "7px" }}>
                        <ul style={{ color: "black" }} className="contactus">
                          <li>
                            <p style={{ margin: "0 0 0px", fontSize: "14px" }}>
                              {t("ContactUs_opening_hours_Monday")} {" - "}
                              {t("ContactUs_opening_hours_Friday")}
                            </p>
                            {"  "}
                            <span style={{ color: "black", fontSize: "14px" }}>
                              07:00 AM - 19:00 PM
                            </span>
                          </li>
                          <li>
                            <p style={{ margin: "0 0 0px", fontSize: "14px" }}>
                              {t("ContactUs_opening_hours_Saturday")} {" - "}
                              {t("ContactUs_opening_hours_Sunday")}
                            </p>
                            {"  "}
                            <span style={{ color: "black", fontSize: "14px" }}>
                              09:00 AM - 16:00 PM
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-3 control-label" htmlFor="name">
                        {t("ContactUs_name")}
                      </label>
                      <div className="col-md-9">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder={t("ContactUs_placeholder_name")}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-3 control-label" htmlFor="email">
                        {t("ContactUs_your_email")}
                      </label>
                      <div className="col-md-9">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder={t("ContactUs_placeholder_email")}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        className="col-md-3 control-label"
                        htmlFor="message"
                      >
                        {t("ContactUs_your_message")}
                      </label>
                      <div className="col-md-9">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder={t("ContactUs_placeholder_message")}
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-md-12 text-right">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          style={{ backgroundColor: "black", color: "white" }}
                        >
                          {t("ContactUs_placeholder_submit")}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="copyright" className="copyright-main">
          <h6 className="copy-title">
            {" "}
            Copyright © 2020 Foodist All rights reserved{" "}
          </h6>
        </div>
      </div>
    </>
  );
};

export default contactus;
