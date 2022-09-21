import TopNav from "@components/modules/Topnav/topnav";
import Bottomnav from "@components/modules/Bottomnav/bottomnav";
import useTranslation from "next-translate/useTranslation";
import Logo from "../../../../assets/Logo/Logo.svg";
import f from "@styles/fonts.module.scss";
import c from "@styles/components.module.scss";
import headerStyle from "@styles/header.module.scss";
import setLanguage from "next-translate/setLanguage";

const Header = (): JSX.Element => {
  const { t, lang } = useTranslation("common");

  return (
    <div className={headerStyle.Parent}>
      <div className={headerStyle.Positioner}>
        <Logo className={headerStyle.Logo} />
        <TopNav />
        <p
          className={headerStyle.languageSelector}
          onClick={async () => await setLanguage(lang=="de"?"en":"de")}
        >
          {lang}
        </p>
      </div>
    </div>
  );
};

export default Header;
