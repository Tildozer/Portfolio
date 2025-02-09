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
      path: "/contact",
      name: "Contact me",
    },
  ];

  return (
    <nav className="order-2 mb-4 flex select-none flex-col justify-around sm:-order-none sm:flex-row sm:gap-4">
      {links.map((linkInfo) => (
        <NavLink key={linkInfo.id} link={linkInfo} />
      ))}
    </nav>
  );
};

export default Nav;
