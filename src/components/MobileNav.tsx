import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "../styles/mobilenav.module.css";
const closeIcon = require("../assets/icon-close-menu.svg").default;
const menuIcon = require("../assets/icon-menu.svg").default;

const calendar = require("../assets/icon-calendar.svg").default;
const planning = require("../assets/icon-planning.svg").default;
const reminders = require("../assets/icon-reminders.svg").default;
const todo = require("../assets/icon-todo.svg").default;
function MobileNav() {
  const [open, setOpen] = useState(true);

  const {
    container,
    menu,
    navItems,
    loginBtn,
    navItem,
    item,
    registerBtn,
    openAnim,
    dropdownItem,
    dropdown,
    close,
    itemOffset,
    overlay,
  } = styles;

  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  return (
    <nav className={`${container}`}>
      {open && <div className={overlay} />}
      <img
        onClick={() => setOpen(!open)}
        src={open ? closeIcon : menuIcon}
        alt=""
      />
      <div className={`${menu} ${open ? openAnim : close} `}>
        <div className={navItems}>
          <div
            className={navItem}
            onClick={() => setOpenFeatures(!openFeatures)}
          >
            <button className={item} onBlur={() => setOpenFeatures(false)}>
              <p>Features</p>
              {openFeatures ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            {openFeatures && (
              <div className={`${dropdown} ${itemOffset}`}>
                <div className={dropdownItem}>
                  <img src={todo} alt="todo" />
                  <p>Todo List</p>
                </div>
                <div className={dropdownItem}>
                  <img src={calendar} alt="calendar" />
                  <p>Calendar</p>
                </div>
                <div className={dropdownItem}>
                  <img src={reminders} alt="reminders" />
                  <p>Reminders</p>
                </div>
                <div className={dropdownItem}>
                  <img src={planning} alt="planning" />
                  <p>Planing</p>
                </div>
              </div>
            )}
          </div>

          <div className={navItem} onClick={() => setOpenCompany(!openCompany)}>
            <button className={item} onBlur={() => setOpenCompany(false)}>
              <p>Company</p>
              {openCompany ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            {openCompany && (
              <div className={dropdown}>
                <div className={dropdownItem}>
                  <p>History</p>
                </div>
                <div className={dropdownItem}>
                  <p>Our Team</p>
                </div>
                <div className={dropdownItem}>
                  <p>Blog</p>
                </div>
              </div>
            )}
          </div>

          <a href="/">Careers</a>
          <a href="/">About</a>
        </div>
        <button className={loginBtn}>Login</button>
        <button className={registerBtn}>Register</button>
      </div>
    </nav>
  );
}

export default MobileNav;
