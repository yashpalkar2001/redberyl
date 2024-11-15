import { Link } from "react-router-dom";
import { PageRoutes } from "../router/routes";

const Header = () => {
  const headerMenu = [
    {
      title: "Dashboard",
      icon: <i className="pi pi-objects-column "></i>,
      path: PageRoutes.Dashboard,
    },
    {
      title: "Orders",
      icon: <i className="pi pi-shopping-bag"></i>,
      path: PageRoutes.Orders,
    },
    {
      title: "Companies",
      icon: <i className="pi pi-building"></i>,
      path: PageRoutes.Company,
    },
    {
      title: "Users",
      icon: <i className="pi pi-user"></i>,
      path: PageRoutes.Users,
    },
    {
      title: "Bilings",
      icon: <i className="pi pi-chart-bar"></i>,
      path: PageRoutes.Biling,
    },
    {
      title: "Support",
      icon: <i className="pi pi-money-bill"></i>,
      path: PageRoutes.Support,
    },
    {
      title: "Setting",
      icon: <i className="pi pi-cog"></i>,
      path: PageRoutes.Setting,
    },
  ];

  return (
    <>
      <header>
        <ul className="w-fit h-full bg-white">
          {headerMenu.map((item, index) => (
            <li
              className={`text-center p-3 py-4 cursor-pointer ${
                location.pathname == item.path && "text-blue-500 bg-blue-100"
              }`}
              key={index}
            >
              <Link to={item.path}>
                {item.icon}
                <h3 className="text-sm font-semibold">{item.title}</h3>{" "}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
