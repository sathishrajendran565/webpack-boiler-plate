import React from "react";

const aboutus = ({ categoryName, iconClassName }) => {
  return (
    <>
      <div className="tab-title-menu">
        <h1>{categoryName}</h1>
        <p>
          <i className={iconClassName} />
        </p>
      </div>
    </>
  );
};

export default aboutus;
