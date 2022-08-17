import React, { useState } from "react";
import cx from "classnames";
import styles from "./SubMenu.module.css";

const SubMenu = () => {
  const [isHoverFirstMenu, setIsHoverFirstMenu] = useState(false);

  let firstSubMenu: string[] = [
    "زامارین ( Xamarin )",
    "Kotlin",
    "Ionic",
    "Android",
    "Cordova",
    "PWA",
    "Dart",
    "Flutter",
  ];
  return (
    <div className={cx(styles.mainContainer, "container-fluid")}>
      <div className="container h-100 d-flex align-items-center justify-content-between">
        <ul
          className={cx(
            styles.subMenuUlStyles,
            "d-flex",
            "align-items-center",
            "justify-content-start h-100"
          )}
          style={{ gap: "15px" }}
        >
          <li
            onMouseOver={() => setIsHoverFirstMenu(true)}
            onMouseOut={() => setIsHoverFirstMenu(false)}
            className="position-relative"
          >
            <span>
              برنامه نویسی و طراحی وب
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="#000"
                className="bi bi-chevron-down me-1 mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            {isHoverFirstMenu && (
              <ul
                onMouseOver={() => setIsHoverFirstMenu(true)}
                onMouseOut={() => setIsHoverFirstMenu(false)}
                className={cx("d-flex", "flex-column", "align-items-start", "justify-content-start", styles.subMenuStyles)}
              >
                {firstSubMenu.map((item, indx) => (
                  <li key={indx}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <span>آموزش برنامه نویسی به کودکان</span>
          </li>
          <li>
            <span>راهنمای ورود به دنیای برنامه نویسی</span>
          </li>
          <li>
            <span>دوره های مخصوص ناشنوایان</span>
          </li>
        </ul>
        <div className="d-flex align-items-center justify-content-center">
          <img
            style={{ width: "40px", height: "40px" }}
            src="https://toplearn.com/img/goldVip.png"
            alt="toplearn"
          />
          <span style={{ fontSize: "14px" }}>مخصوص اعضای ویژه</span>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
