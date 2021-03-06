import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "../styles/navbar.module.css";

const calendar = require("../assets/icon-calendar.svg").default;
const planning = require("../assets/icon-planning.svg").default;
const reminders = require("../assets/icon-reminders.svg").default;
const todo = require("../assets/icon-todo.svg").default;
const logo = require("../assets/logo.svg").default;

function Navbar() {
  const {
    container,
    navItems,
    dropdownItem,
    item,
    dropdown,
    authentication,
    navItem,
    loginBtn,
    itemOffset,
    registerBtn,
  } = styles;

  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  return (
    <div className={container}>
      <img src={logo} alt="logo" />
      <div className={navItems}>
        <div className={navItem} onClick={() => setOpenFeatures(!openFeatures)}>
          <button className={item} onBlur={() => setOpenFeatures(false)}>
            Features
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
            Company
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
        <a href="/intro-section/">Careers</a>
        <a href="/intro-section/">About</a>
      </div>
      <div className={authentication}>
        <button className={loginBtn}>Login</button>
        <button className={registerBtn}>Register</button>
      </div>
    </div>
  );
}

export default Navbar;
