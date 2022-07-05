import TopNav from "../Topnav/topnav";
import Bottomnav from "../Bottomnav/bottomnav";
import Logo from "./../../../assets/Logo/logo1.svg";
import f from "./../../styles/fonts.module.scss";
import l from "./header.module.scss";
import c from "./../../styles/components.module.scss";

const Header = (): JSX.Element => {
  return (
    <>
      <div className={`${l["Parent"]}`}>
        <div className={l["Positioner"]}>
          <Logo className={`${l["Logo"]}`} />
          <TopNav />
        </div>
      </div>
    </>
  );
};

export default Header;
