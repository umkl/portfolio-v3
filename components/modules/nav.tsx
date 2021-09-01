import { animated as a, useSpring } from "react-spring";
import navStyles from "./nav.module.scss";
import utilStyles from "./../../styles/utils.module.scss";
import { useContext } from "react";
import { NavActiveContext } from "./../layouts/layout";
import SuperEllipse from "react-superellipse";
import Button from "./../elements/button";
import { useRouter } from "next/router";
import Link from "next/link";
import { Link as Link2, animateScroll as scroll } from "react-scroll";
import useWindowSize, { Size } from "../../hooks/useWindowSize";

const Nav = ({ dark }: { dark: boolean }) => {
  const router = useRouter();
  const size: Size = useWindowSize();
  const { NavActive: NavActive, setNavActive: setNavActive } = useContext(
    NavActiveContext
  );
  const navSpring = useSpring({
    opacity: NavActive ? 1 : 0,
    marginTop: NavActive ? "0px" : "-500px",
  });

  return (
    <a.div className={navStyles.navblock} style={navSpring}>
      <SuperEllipse
        r1={0.00006}
        r2={0.132}
        style={{
          position: "absolute",
          filter: "blur(0px)",
          width: "90%",
          height: "90%",
          backgroundColor: "white",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={navStyles.navElements}>
          <Link href="/">
            <a>
              <div
                onClick={() => setNavActive(false)}
                className={navStyles.navElement}
                style={{
                  textDecoration: router.pathname == "/" ? "underline" : "none",
                }}
              >
                Home
              </div>
            </a>
          </Link>
          <Link href="/Events">
            <a>
              <div
                onClick={() => setNavActive(false)}
                className={navStyles.navElement}
                style={{
                  textDecoration:
                    router.pathname == "/Events" ? "underline" : "none",
                }}
              >
                Events
              </div>
            </a>
          </Link>
          <Link href="/About">
            <a>
              <div
                onClick={() => setNavActive(false)}
                className={navStyles.navElement}
                style={{
                  textDecoration:
                    router.pathname == "/About" ? "underline" : "none",
                }}
              >
                About
              </div>
            </a>
          </Link>
          <Link2
            onClick={() => {
              setNavActive(false);
            }}
            to="footer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className={navStyles.navElement}>
              <Button
                margin={5}
                dark={dark}
                fontsize={
                  size.width < parseInt(utilStyles.large_phone, 10)
                    ? "20px"
                    : "35px"
                }
                width={
                  size.width < parseInt(utilStyles.large_phone, 10) ? 150 : 280
                }
                height={
                  size.width < parseInt(utilStyles.large_phone, 10) ? 50 : 80
                }
              >
                Contact
              </Button>
            </div>
          </Link2>
        </div>
      </SuperEllipse>
      <div className={navStyles.shadow}></div>
    </a.div>
  );
};

export default Nav;
