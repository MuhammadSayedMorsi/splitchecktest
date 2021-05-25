import { useEffect, useState } from "react";
import { Link } from "react-scroll";

// import MenuItems from "./MenuItem.data";

export default function Links() {
  const menuItems = [
    "Short",
    "Images",
    "Product type",
    "Pricing",
    "Inventory",
    "Availability",
    "Organization",
    "Terms and conditions",
    "Additional permissions",
    "Long description",
    "Customization",
    "SC search engine preview",
  ];
  const [selectLink, setSelectLink] = useState("Short");

  const [MenuItem, setMenuItem] = useState(false);

  const handleClick = (menuItem) => {
    setSelectLink(menuItem);
    console.log(menuItem);
  };

  const fixedMenuLinks = () => {
    if (window.scrollY >= 100 && window.scrollY < 2900) {
      setMenuItem(true);
    } else {
      setMenuItem(false);
    }
    // console.log(window.scrollY);
  };

  // window.addEventListener("scroll", fixedMenuLinks);
  useEffect(function mount() {
    window.addEventListener("scroll", fixedMenuLinks);
  });

  return (
    <div
      className={
        MenuItem ? "transition duration-500 ease-in-out menufixed" : ""
      }
    >
      <style jsx>
        {`
          div {
            position: absolute;
            top: 0;
            width: 150px;
            transition: all 0.4s ease-in-out;
          }
        `}
      </style>
      <div className="flex flex-col group mt-10 transition duration-500 ease-in-out">
        {menuItems.map((menuItem, index) => (
          <Link
            onClick={() => handleClick(menuItem)}
            className="mb-4 text-sm text-default mt-1 cursor-pointer"
            to={menuItem}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            key={index}
          >
            <span className={selectLink === menuItem ? "sel" : ""}>
              {menuItem}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
