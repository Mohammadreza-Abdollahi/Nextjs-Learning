"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {title: "Services" , path: "/services"},
  {title: "Cars" , path: "/cars"},
]
const Header = () => {
  const pathName = usePathname();
  return (
      <header className="top-area">
        <div className="header-area">
          <nav
            className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy navbar-bg"
            data-minus-value-desktop="70"
            data-minus-value-mobile="55"
            data-speed="1000"
          >
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="/">
                  carvilla<span></span>
                </a>
              </div>
              <div
                className="collapse navbar-collapse menu-ui-design"
                id="navbar-menu"
              >
                <ul
                  className="nav navbar-nav navbar-right"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li className="scroll">
                    <Link href="/" style={{color: pathName === "/" && "blue"}}>Home</Link>
                  </li>
                  {
                    links.map((item , index)=>(
                      <li className="scroll" key={index}>
                        <Link href={item.path} style={{color: pathName.startsWith(item.path) && "blue"}}>{item.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix"></div>
      </header>
  );
};

export default Header;
