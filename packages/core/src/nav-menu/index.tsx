export type Menu = {
  path: string;
  icon: React.ReactNode;
  title: string;
};
export type INavMenuProps = {
  menus: Menu[];
  logo: React.ReactNode;
  onClick: (menu: Menu) => void;
};

export const NavMenu = (props: INavMenuProps) => {
  const { logo, menus, onClick } = props;
  return (
    <div className="flex h-screen">
      <div className="bg-[#131313] w-20 flex flex-col items-center py-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold mb-6">{logo}</div>

        {/* Navigation links */}
        <nav className="flex flex-col flex-grow">
          {menus.map((menu) => {
            return (
              <a
                key={menu.path}
                onClick={() => onClick(menu)}
                className="text-gray-300 hover:text-white mb-2 flex flex-col items-center"
              >
                {menu.icon}
                <span className="text-xs">
                {menu.title}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
