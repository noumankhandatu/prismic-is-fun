import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "./components/layout";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { Client } from "../prismic-configuration";

export default function Business({ articles, trending }) {
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
      <Layout>
        <h1 className="text-2xl font-bold my-10 ml-24">
          See whats Happening around the world
          {trending.results.map((items) => {
            return (
              <div>
                <div> {RichText.render(items.data.uid)}</div>
                <div className="text-3xl bold text-blue-600 cursor-pointer">
                  {RichText.render(items.data.info)}
                </div>
                {/* <img width={"20%"} src={items.data.imageofArticle.url} alt="" /> */}
                <div className="text-[16px] bold text-red-600 cursor-pointer">
                  <RichText render={items.data.headline} />
                </div>
              </div>
            );
          })}
        </h1>
        <div className="flex">
          <div className="flex flex-col w-2/3 ml-24 mr-20">main article</div>
          <div className="flex flex-col w-1/3 mr-20">main trending</div>
        </div>
      </Layout>
    </div>
  );
}

// this function is called everytime a request/refresh is made

export async function getServerSideProps() {
  const articles = await Client().query(
    Prismic.Predicates.at("document.type", "article")
  );
  const trending = await Client().query(
    Prismic.Predicates.at("document.type", "trending")
  );
  console.log(articles, trending);
  return {
    props: {
      articles: articles,
      trending: trending,
    },
  };
}
