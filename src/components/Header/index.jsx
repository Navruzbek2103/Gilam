import React from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import SiteLogo from "./../../assets/images/site-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbPhone } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";

const index = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__wrapper">
          <div className="header__nav">
            <Link to="/" className="header__nav-link">
              <img
                src={SiteLogo}
                alt="site logo"
                className="header__nav-link-img"
              />
            </Link>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink to="" className="header__nav-item-link">
                  <RxHamburgerMenu
                    className="header__nav-item-link-burger"
                    size={`1.3em`}
                  />
                  Каталог продуктов
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="" className="header__nav-item-link">
                  Услуги
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="" className="header__nav-item-link">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>
          <address className="header__address">
            <ul className="header__address-list">
              <li className="header__address-item">
                <a
                  href="tel:+998900000000"
                  className="header__address-item-link"
                >
                  <TbPhone className="header__address-item-link-icon" />
                  <div className="header__address-item-link-box">
                    <span className="header__address-item-link-box-title">
                      Приём звонков 24/7
                    </span>
                    <span className="header__address-item-link-box-text">
                      +998 90 000 00 00
                    </span>
                  </div>
                </a>
              </li>
              <li className="header__address-item">
                <a
                  href="https://yandex.uz/maps/10335/tashkent/house/YkAYdAdjQU0EQFprfX90eH1rbQ==/?ll=69.205650%2C41.356652&z=16.15"
                  className="header__address-item-link"
                  target="_blank"
                >
                  <HiOutlineLocationMarker className="header__address-item-link-icon" />
                  <div className="header__address-item-link-box">
                    <span className="header__address-item-link-box-title">
                      Приходите в гости
                    </span>
                    <span className="header__address-item-link-box-text">
                      р.Нурафшон, ул.Фаргона 12Б
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </header>
  );
};

export default index;
