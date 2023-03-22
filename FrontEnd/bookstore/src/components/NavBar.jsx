import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoleNavbar from "./RoleNavbar";
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import MenuIcon from '@rsuite/icons/Menu';

const { Fragment } = require("react");

function NavBar() {
    const state = useSelector((state) => state);
    console.log("LoggedIn ", state.loggedin);
    console.log("Cart ", state.cart);
    return (

        <Fragment>
            <div className="clearfix"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky mb-0 " style={{ top: 0, zIndex: "1000" }}>

                <a className="navbar-brand" href='/' >
                    <img src={'images/bookstore.jpg'} style={{ width: "36px", marginRight: "22px" }} className="float-left d-inline-block align-text-top" alt="" />
                    E-BookStore
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">

                            <a className="nav-link" href="/"><i className="fa fa-fw fa-home" style={{ margin: "5px" }}></i>Home</a>
                        </li>
                        <li className="nav-item active " >
                            <Dropdown title="Category" icon={<MenuIcon />} appearance="subtle">
                                <Dropdown.Menu title="Fiction">
                                    <Dropdown.Item><Link className="dropdown-item" to="/cat/fiction/English">English</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="dropdown-item" to="/cat/fiction/Hindi">Hindi</Link></Dropdown.Item>
                                </Dropdown.Menu>
                                <Dropdown.Menu title="Non-Fiction">
                                    <Dropdown.Item> <Link className="dropdown-item" to="/cat/Women/Upper Wear">English</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="dropdown-item" to="/cat/Women/Bottom Wear">Hindi</Link></Dropdown.Item>
                                </Dropdown.Menu>
                                <Dropdown.Menu title="Magazine">
                                    <Dropdown.Item> <Link className="dropdown-item" to="/cat/Kids/Upper Wear">English</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="dropdown-item" to="/cat/Kids/Bottom Wear">Hindi</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>

                    <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />
                </div>
            </nav>

        </Fragment>
    );
}

export default NavBar;