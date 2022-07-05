import l from "./links.module.scss";
import GithubIcon from "./../../../assets/Icons/github.svg";
import LinkedinIcon from "./../../../assets/Icons/linkedin.svg";
import TwitterIcon from "./../../../assets/Icons/twitter.svg";
import DribbbleIcon from "./../../../assets/Icons/dribbble.svg";

const links = (): JSX.Element => {
  return (
    <>
      <aside className={`${l["Linkbar-1"]} ${l["Linkbar"]}`}>
        <a href="https://dribbble.com/ungarmichael">
          <div className={l["Icon-frame"]}>
            <DribbbleIcon className={l["Icon-1"]} />
          </div>
        </a>
        <a href="https://github.com/ungarmichael">
          <div className={l["Icon-frame"]}>
            <GithubIcon className={l["Icon-1"]} />
          </div>
        </a>
        <a href="https://twitter.com/ungarmichael_">
          <div className={l["Icon-frame"]}>
            <TwitterIcon className={l["Icon-1"]} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/michael-ungar-9624391b4/">
          <div className={l["Icon-frame"]}>
            <LinkedinIcon className={l["Icon-1"]} />
          </div>
        </a>

        <div className={l["Line-1"]}></div>
      </aside>
      <aside className={`${l["Linkbar-2"]} ${l["Linkbar"]}`}>
        <a href="mailto:ungarmichael.mail@gmail.com">
          ungarmichael.mail@gmail.com
        </a>
        <div className={l["Line-1"]}></div>
      </aside>
    </>
  );
};

export default links;
