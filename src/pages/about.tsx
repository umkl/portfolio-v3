import About from "@components/home-sections/About/about";
import aboutStyling from "@styles/about.module.scss";

const about = () => {
  return (
    <div className={aboutStyling.aboutParent}>
      <div className={aboutStyling.spacer}></div>
      <About></About>
    </div>
  );
};
export default about;
