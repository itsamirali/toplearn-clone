import React from "react";
import styles from "./Hero.module.css";
import cx from "classnames";
import Header from "./Header/Header";

const Hero = () => {
  return (
    <div className={cx(styles.mainContainerStyles, "container-fluid")}>
      <Header />
      <div
        style={{ width: "600px" }}
        className="d-flex align-items-center justify-content-center flex-column mx-auto h-100"
      >
        <h2 className={cx(styles.mainHeroTitle, "m-0", "text-light", "mb-3")}>
          خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن
        </h2>
        <span className={cx(styles.mainHeroSubitle, "m-0", "text-light")}>
          با کمترینــــ هزینه خودت حرفه ایــــ یاد بگیـر
        </span>
        <div className="d-flex align-items-center justify-content-center w-100 position-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#00b3e9"
            className={cx(styles.searchIconStyles, "bi bi-search")}
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            className={cx(styles.mainSerarchInputStyles, "mt-5", "w-100")}
            placeholder="چی میخوای یاد بگیری؟"
          />
        </div>
        <div className="px-3 d-flex align-items-center justify-content-between w-100 mt-5">
          <div
            className={cx(
              "d-flex",
              "align-items-center",
              "justify-content-center",
              "flex-column",
              styles.infoContainerStyles
            )}
          >
            <img
              src="https://toplearn.com/Site/images/stat-time.svg"
              alt="info1"
            />
            <span>341,698</span>
            <span>دقیقه آموزش</span>
          </div>
          <div
            className={cx(
              "d-flex",
              "align-items-center",
              "justify-content-center",
              "flex-column",
              styles.infoContainerStyles
            )}
          >
            <img
              src="https://toplearn.com/Site/images/stat-time.svg"
              alt="info1"
            />
            <span>129</span>
            <span>مدرس مجرب</span>
          </div>
          <div
            className={cx(
              "d-flex",
              "align-items-center",
              "justify-content-center",
              "flex-column",
              styles.infoContainerStyles
            )}
          >
            <img
              src="https://toplearn.com/Site/images/stat-teacher.svg"
              alt="info1"
            />
            <span>367,293</span>
            <span>نفر دانشجو</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
