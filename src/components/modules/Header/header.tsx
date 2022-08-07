import TopNav from "@components/modules/Topnav/topnav";
import Bottomnav from "@components/modules/Bottomnav/bottomnav";
import Logo from "../../../../assets/Logo/logo1.svg";
import f from "@styles/fonts.module.scss";
import c from "@styles/components.module.scss";
import l from "./header.module.scss";

const Header = (): JSX.Element => {
  return (
    <>
      <div className={`${l["Parent"]}`}>
        <div className={l.Positioner}>
          <Logo className={`${l["Logo"]}`} />
          <TopNav />
        </div>
      </div>
    </>
  );
};

export default Header;
