import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/global.scss";
// import Layout from "../components/layouts/layout";
import { useRouter, NextRouter } from "next/router";
import Layout from "./../components/layouts/layout";
export default function App({ Component, pageProps }: AppProps) {
  // const router: NextRouter = useRouter();
  // const legal: boolean = router.pathname.includes("Imprint") || router.pathname.includes("Privacy");

  return (
    // <Layout dark={legal}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </Layout>
  );
}
