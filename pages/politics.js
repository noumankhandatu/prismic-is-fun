import React from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration";
const Politics = ({ articles, trending }) => {
  return (
    <div>
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
    </div>
  );
};

export default Politics;

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
