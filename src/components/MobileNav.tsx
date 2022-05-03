import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "../styles/mobilenav.module.css";

function MobileNav({ openNav, openFeatures }: any) {
  const {
    container,
    menu,
    navItems,
    loginBtn,
    navItem,
    item,
    registerBtn,
    open,
    dropdownItem,
    dropdown,

    close,
    overlay,
  } = styles;

  return (
    <nav className={`${container}`}>
      {openNav && <div className={overlay} />}
      <div className={`${menu} ${openNav ? open : close} `}>
        <button className={loginBtn}>Login</button>
        <button className={registerBtn}>Register</button>
      </div>
    </nav>
  );
}

export default MobileNav;
