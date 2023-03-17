import Layout from "@/components/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
