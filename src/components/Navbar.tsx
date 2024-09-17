
import SearchDialog from "./SearchDialog";
import ThemeDropdown from "./ThemeDropdown";
import AvatarDropdown from "./AvatarDropdown";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div className="flex justify-between h-auto items-center">
        <div className="flex w-1/2 justify-start ml-4 items-center">
            <Logo />
        </div>
        <div className="flex w-1/2 items-center gap-6 justify-end">
        <SearchDialog />
        <ThemeDropdown />
        <AvatarDropdown/>
        
        </div>
    </div>
  );
};

export default Navbar;