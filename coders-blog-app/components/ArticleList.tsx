import { IArticle } from "@/types";
import React from "react";
import BlogCard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImage";

interface IPropTypes {
  articles: IArticle[];
}

const ArticleList = ({ articles }: IPropTypes) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles.map((article, indx) => (
        <div key={article.id}>
          {indx === 1 ? (
            <BlogCardWithImage article={article} />
          ) : (
            <BlogCard article={article} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
