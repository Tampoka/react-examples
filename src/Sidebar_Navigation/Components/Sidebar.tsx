import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {Path} from "../routes";
import s from "./Sidebar.module.css"


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <nav className={sidebar ? s.sidebar+s.active : s.sidebar}>
            <button className={s.hamburger} type="button" onClick={showSidebar}>
                <div></div>
            </button>
            <ul onClick={showSidebar}>
                <li><NavLink to={Path.home}>Home</NavLink></li>
                <li><NavLink to={Path.services}>Services</NavLink></li>
                <li><NavLink to={Path.contacts}>Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Sidebar;