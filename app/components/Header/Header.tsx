import React from "react";
import NavInput from "./NavInput";
import NavItem from "./NavItem";
import { IoHome, IoInformationCircle } from "react-icons/io5";

function Header() {
  return (
    <header className="navbar bg-base-100 px-5">
      <nav className="flex-1">
        <ul className="flex gap-3 text-xl">
          <NavItem title="home" Icon={IoHome} address="/" />
          <NavItem
            title="about us"
            Icon={IoInformationCircle}
            address="/about"
          />
        </ul>
      </nav>
      {/* <div className="flex-none gap-2"> */}
      {/* <div className="form-control"> */}
      <NavInput />
      {/* </div> */}
      {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      {/* </div> */}
    </header>
  );
}

export default Header;
