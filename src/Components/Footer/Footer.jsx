import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
  InboxInIcon,
} from "@heroicons/react/solid";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>california</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon}></PhoneIcon>
              <a href="tel:000000000">00000000</a>
            </span>
            <span className={css.pngLine}>
             <InboxInIcon className={css.icon} ></InboxInIcon>
              <a href="amazon@gmail.com">a@gmail.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign-In</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <a href="/about">
                {" "}
                <p>About us</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright ©2023 by Amazon</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
