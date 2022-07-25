import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "./components/layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing Prismic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=testingcodehere"
        ></script>
      </Head>
      <Layout>Hello Im layout</Layout>
    </div>
  );
}
