"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import cartData from "../../data/cartData";
import { navbarData } from "../../public/data/navbarData";
import tag from "/public/images/icon/btn/tag.png";
import logo from "/public/images/logo-kutoot.png";
import auth from '@/utils/auth';


const languageDropdownData = [
  {
    value: "En",
  },
  {
    value: "Bn",
  },
  {
    value: "Hp",
  },
  {
    value: "Frn",
  },
];

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState("");
  const [windowHeight, setWindowHeight] = useState(0);
  let token = auth()?.access_token;
  const [show, setShow] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [langDropdown, setLanguageDropdown] = useState(
    languageDropdownData[0].value
  );

  const setLanguageDropdownValue = (value) => {
    setLanguageDropdown(value);
  };

  const handleOpen = (e) => {
    if (open !== e.target.text) {
      setOpen(e.target.text);
    } else {
      setOpen("");
    }
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };
  const login = () => {
    router.push('/login');
  };

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  const pathName = usePathname();

  return (
    <header
      id="gotoTop"
      className={`header ${
        windowHeight > 50 && "menu-fixed animated fadeInDown"
      }`}
    >
      <div className="header__top">
        <div className="container">
          <div className="row align-items-center gap-2 gap-md-0">
            <div className="col-sm-6">
              <div className="left d-flex gap-4 align-items-center">
                <a
                  href="tel:65655655"
                  className="d-flex align-items-center gap-1"
                >
                  <i className="las la-phone-volume" style={{ fontSize: '20px' }}></i>
                  +91 9999999999
                </a>
                <a
                  href="tel:65655655"
                  className="d-flex align-items-center gap-1"
                >
                  <i className="las la-envelope" style={{ fontSize: '20px' }}></i>info@kutoot.com
                </a>
                <div className="language">
                  {/* <i className="las la-globe-europe"></i> */}
                  <div className=" relative">
                    {/* <div
                      className="text-white language-dropdown-selected"
                      onClick={() =>
                        setLanguageDropdownOpen(!languageDropdownOpen)
                      }
                    >
                      {langDropdown}
                    </div> */}
                    {/* <ul
                      className={`dropdown-container ${
                        languageDropdownOpen ? "dropdown-container-open" : ""
                      }`}
                    >
                      {languageDropdownData.map(({ value }) => (
                        <li
                          key={`${value}`}
                          onClick={() => {
                            setLanguageDropdownValue(value);
                            setLanguageDropdownOpen(!languageDropdownOpen);
                          }}
                        >
                          {value}
                        </li>
                      ))}
                    </ul> */}
                  </div>
                  {/* <i className="las la-angle-down"></i> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="right">
                <div className="product__cart">
                  {/* <span className="total__amount">{"My Balance"} 0.00</span> */}
                  {/*<Link href="/cart" className="amount__btn">
                    <i className="las la-shopping-basket"></i>
                    <span className="cart__num">{cartData.length}</span>
                  </Link>*/}
                </div>
                { token ?
                  // <a
                  //   // href="#0"
                  //   className="user__btn d-flex align-items-center justify-content-center"
                  //   // data-bs-toggle="modal"
                  //   // data-bs-target="#loginModal"
                  // >
                  //   <i className="las la-user"></i>
                  // </a> :
                  <button type="submit" className="cmn-btn btn--sm" onClick={()=>logOut()}>Logout</button>:
                  <button type="submit" className="cmn-btn btn--sm" onClick={()=>login()}>Login</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-xl p-0 align-items-center">
            <Link href="/" className="site-logo site-title">
              <Image src={logo} alt="logo" width={200} />
              <span className="logo-icon">
                <i className="flaticon-fire"></i>
              </span>
            </Link>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              onClick={() => setShow(!show)}
              //data-bs-toggle="collapse"
              // data-bs-target="#navbarContent"
              // aria-controls="navbarContent"
              //aria-expanded="false"
              //aria-label="Toggle navigation"
            >
              <span className="menu-toggle"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${show && "show"}`}
              // id="navbarContent"
            >
              <ul className="navbar-nav main-menu ms-auto">
                {navbarData.map(({ id, menuTitle, path, menuItems }) => {
                  let isActive = menuItems?.some(
                    (path) => pathName == path.menuItemPath
                  );

                  return menuItems ? (
                    <li
                      key={`${id}`}
                      className={`menu_has_children ${
                        open === `${menuTitle}` ? "open" : ""
                      }`}
                    >
                      <div className="d-flex align-items-center">
                        <Link
                          href="/#"
                          onClick={(e) => handleOpen(e)}
                          className={` ${isActive ? "menu-active" : ""}`}
                        >
                          {menuTitle}
                        </Link>
                        <i className="las la-angle-down"></i>
                      </div>
                      <ul className="sub-menu">
                        {menuItems.map(({ id, title, menuItemPath }) => (
                          <li key={`${id}`}>
                            <Link
                              href={menuItemPath}
                              onClick={() => setShow(false)}
                              className={`${
                                pathName === menuItemPath && "sub-menu-active"
                              }`}
                            >
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={`${id}`}>
                      <Link
                        href={`${menuTitle === 'Shop' ? process.env.NEXT_PUBLIC_SHOP_URL + `?token=${token}` : path}`}
                        onClick={() => setShow(false)}
                        {...(menuTitle === 'Shop' ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={`${pathName === path ? "menu-active" : ""}`}
                      >
                        {menuTitle}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="nav-right">
                <Link href="/contest" className="cmn-btn style--three btn--sm">
                  <Image src={tag} alt="icon" className="me-1" /> Buy Coins
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
