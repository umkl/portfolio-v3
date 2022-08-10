import TopNav from "@components/modules/Topnav/topnav";
import Bottomnav from "@components/modules/Bottomnav/bottomnav";
import Logo from "../../../../assets/Logo/logo1.svg";
import f from "@styles/fonts.module.scss";
import c from "@styles/components.module.scss";
import headerStyle from "@styles/header.module.scss";

const Header = (): JSX.Element => {
  return (
    <div className={headerStyle.Parent}>
      <div className={headerStyle.Positioner}>
        <Logo className={headerStyle.Logo} />
        <TopNav />
        <p className={headerStyle.languageSelector}>EN</p>
      </div>
    </div>
  );
};

export default Header;
