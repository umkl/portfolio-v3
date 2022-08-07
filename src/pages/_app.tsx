import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/global.scss";
import { useRouter, NextRouter } from "next/router";
import Layout from "../components/layouts/home/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
