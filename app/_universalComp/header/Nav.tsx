import { NavLink } from "./";

export interface LinkSettings {
  id: number;
  path: string;
  name: string;
}

const Nav = () => {
  const links: LinkSettings[] = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/projects",
      name: "Projects",
    },
    {
      id: 3,
      path: "/credentials",
      name: "Credentials",
    },
    {
      id: 4,
      path: "/contact",
      name: "Contact me",
    },
  ];

  return (
    <nav className="order-2 mb-4 flex select-none flex-col justify-around pl-4 md:-order-none md:flex-row md:gap-4 md:pl-0">
      {links.map((linkInfo) => (
        <NavLink key={linkInfo.id} link={linkInfo} />
      ))}
    </nav>
  );
};

export default Nav;
