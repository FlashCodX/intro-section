import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "../styles/navbar.module.css";
const logo = require("../assets/logo.svg").default;

const audiophile = require("../assets/client-audiophile.svg").default;
const databiz = require("../assets/client-databiz.svg").default;
const maker = require("../assets/client-maker.svg").default;
const meet = require("../assets/client-meet.svg").default;
const arrowDown = require("../assets/icon-arrow-down.svg").default;
const arrowUp = require("../assets/icon-arrow-up.svg").default;

const calendar = require("../assets/icon-calendar.svg").default;
const planning = require("../assets/icon-planning.svg").default;
const reminders = require("../assets/icon-reminders.svg").default;
const todo = require("../assets/icon-todo.svg").default;

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
  return (
    <nav className={container}>
      <img src={logo} alt="logo" />
      <div className={navItems}>
        <div className={navItem}>
          <div className={item}>
            <div>Features</div>
            <MdKeyboardArrowDown />
          </div>
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
        </div>

        <div className={navItem}>
          <div className={item}>
            <div>Company</div>
            <MdKeyboardArrowDown />
          </div>
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
        </div>
        <a href="/">Careers</a>
        <a href="/">About</a>
      </div>
      <div className={authentication}>
        <button className={loginBtn}>Login</button>
        <button className={registerBtn}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
