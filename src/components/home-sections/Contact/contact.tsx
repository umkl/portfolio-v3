import Head from "next/head";
import c from "./../../../styles/components.module.scss";
import contactStyle from "@styles/contact.module.scss";
import Emoji from "@components/elements/Emoji";
import Link from "next/link";
import { Element } from "react-scroll";
import { ArrowNarrowRight, Mail } from "tabler-icons-react";
import useTranslation from "next-translate/useTranslation";

const Contact = () => {
  const { t } = useTranslation("common");
  return (
    <Element name="002contact">
      <section className={contactStyle.parent} id="002contact">
        <h2 className={contactStyle.heading}>
          <span className={contactStyle.code}>04.</span>
          <span>{t("contact")}</span>
        </h2>
        <div id={contactStyle.contentField}>
          <Emoji symbol={"0x1F44B"} className={contactStyle.wavinghand} />
          <h1 id={contactStyle.request}>{t("letsgetintouch")}</h1>
          <p id={contactStyle.briefer}>
            {t("contacttext")}
          </p>
          <div id={contactStyle.buttonRow}>
            <a href="mailto:ungarmichael.mail@gmail.com">
              <button id={contactStyle.mail}>
                {" "}
                <Mail id={contactStyle.icon} /> {t("sendmessage")}
              </button>
            </a>
            <Link href="/about">
              <button id={contactStyle.more}>
              {t("moreaboutme")} <ArrowNarrowRight id={contactStyle.icon} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
