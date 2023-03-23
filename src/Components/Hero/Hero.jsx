import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.container}>
      {/* left side  */}
      <div className={css.h_sides}>
        <span>Skin Protection Cream</span>
        <div className={css.text1}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced
          </span>
        </div>
      </div>

      {/* middle side hero image */}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Sign-up Offer</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* reght side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5M</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customer}>
          <span>1 Lakh</span>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
