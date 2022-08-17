import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="container d-flex align-items-center justify-content-between w-100 pt-4">
      <ul
        style={{ gap: "12px" }}
        className={cx(
          styles.ulStyles,
          "d-flex",
          "align-items-center",
          "justify-content-center",
          "m-0"
        )}
      >
        <li className="px-2">
          <img
            src="https://toplearn.com/Site/images/logo.svg?v=2&v=zjoiRpmC09IkkzqUJsClbhkaYu4GLxaP4j0XODEc3ec"
            alt="toplearn.com"
          />
        </li>
        <li className="px-2">
          <Link
            className="text-light w-100 h-100 d-flex align-items-center justify-content-center"
            title="دوره های آموزشی"
            to="/courses"
          >
            آخرین دوره ها
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="text-light w-100 h-100 d-flex align-items-center justify-content-center"
            to="/masters"
          >
            معرفی مدرسین
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="text-light w-100 h-100 d-flex align-items-center justify-content-center"
            title="مقالات"
            to="/blog"
          >
            بلاگ
          </Link>
        </li>

        <li className="px-2">
          <Link
            className="text-light w-100 h-100 d-flex align-items-center justify-content-center"
            to="https://toplearn.com/Page/work-with-toplearn"
          >
            همکاری با تاپلرن
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="text-light w-100 h-100 d-flex align-items-center justify-content-center"
            to="https://toplearn.com/page/terms"
          >
            قوانین سایت
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="text-light w-100 h-100 d-flex align-items-center justify-content-center"
            to="https://toplearn.com/Advisers"
          >
            مشاوره و رفع اشکال آنلاین
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="text-light w-100 h-100 d-flex align-items-center justify-content-center"
            to="https://toplearn.com/questions"
          >
            پرسش و پاسخ
          </Link>
        </li>

        <li className="px-2">
          <Link
            className="text-light w-100 h-100 d-flex align-items-center justify-content-center"
            to="/contact-us"
          >
            تماس با ما
          </Link>
        </li>
        <li className="px-2">
          <Link
            className="text-light w-100 h-100 d-flex align-items-center justify-content-center"
            to="/about-us"
          >
            درباره ما
          </Link>
        </li>
      </ul>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#fff"
          className="bi bi-person"
          viewBox="0 0 16 16"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>
        <span className={cx(styles.leftLinkStyles, "mx-1")}>ورود</span>
        <span className="text-light">/</span>
        <span className={cx(styles.leftLinkStyles, "mx-1")}>ثبت‌نام</span>
      </div>
    </div>
  );
};

export default Header;
