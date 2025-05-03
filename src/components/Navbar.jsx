import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Navbar = ()=>{
    const pathName = useLocation().pathname; //This is used to highlight the current page link
    const navigate = useNavigate();
      //handle the header opening and closing menu for the tablet/mobile device
  const [headerToggle, setHeaderToggle] = useState(false);
    return (
        <header  className="h-headerHeight z-50 text-textColor bg-headerColor shadow-sm  flex items-center sticky top-0">
            <nav className="sm:px-10 px-4 flex w-full h-full items-center justify-between">
                <Link to="/">
                    {" "}
                    <h3 className=" font-dancingScript text-logoText">Secure Notes</h3>
                </Link>
                <ul
                          className={`lg:static  absolute left-0  top-16 w-full lg:w-fit lg:px-0 sm:px-10 px-4  lg:bg-transparent bg-headerColor   ${
                            headerToggle
                              ? "min-h-fit max-h-navbarHeight lg:py-0 py-4 shadow-md shadow-slate-700 lg:shadow-none"
                              : "h-0 overflow-hidden "
                          }  lg:h-auto transition-all duration-100 font-montserrat text-textColor flex lg:flex-row flex-col lg:gap-8 gap-2`}>
                    <Link to="/contact">
                        <li
                        className={`${
                            pathName === "/contact" ? "font-semibold " : ""
                        } py-2 cursor-pointer hover:text-slate-300`}
                        >
                        Contact
                        </li>
                    </Link>
                    <Link to="/about">
                        <li
                        className={`py-2 cursor-pointer hover:text-slate-300 ${
                            pathName === "/about" ? "font-semibold " : ""
                        }`}
                        >
                        About
                        </li>
                    </Link>
                </ul>
                <span
                    onClick={() => setHeaderToggle(!headerToggle)}
                    className="lg:hidden block cursor-pointer text-textColor  shadow-md hover:text-slate-400"
                    >
                    {headerToggle ? (
                        <RxCross2 className=" text-2xl" />
                    ) : (
                        <IoMenu className=" text-2xl" />
                    )}
                </span>
            </nav>
        </header>
    );
}

export default Navbar;