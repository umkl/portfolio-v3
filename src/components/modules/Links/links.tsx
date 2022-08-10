import linksStyle from "@styles/links.module.scss";
import GithubIcon from "../../../../assets/Icons/github.svg";
import LinkedinIcon from "../../../../assets/Icons/linkedin.svg";
import TwitterIcon from "../../../../assets/Icons/twitter.svg";
import DribbbleIcon from "../../../../assets/Icons/dribbble.svg";
import {
  BrandDribbble,
  BrandLinkedin,
  BrandTwitter,
  BrandGithub,
} from "tabler-icons-react";

const links = (): JSX.Element => {
  return (
    <>
      <aside id={linksStyle.SocialsBar} className={linksStyle.Linkbar}>
        <a href="https://dribbble.com/ungarmichael">
          <BrandDribbble className={linksStyle.icon} />
        </a>
        <a href="https://github.com/ungarmichael">
          <BrandGithub className={linksStyle.icon} />
        </a>
        <a href="https://twitter.com/ungarmichael_">
          <BrandTwitter className={linksStyle.icon} />
        </a>
        <a href="https://www.linkedin.com/in/michael-ungar-9624391b4/">
          <BrandLinkedin className={linksStyle.icon} />
        </a>
        <div id={linksStyle.line}></div>
      </aside>

      <aside id={linksStyle.EmailBar} className={linksStyle.Linkbar}>
        <a href="mailto:ungarmichael.mail@gmail.com">
          ungarmichael.mail@gmail.com
        </a>
        <div id={linksStyle.line}></div>
      </aside>
    </>
  );
};

export default links;
