import { IArticle } from "@/types";
import React from "react";
import BlogCard from "./BlogCard";

interface IPropTypes {
  articles: IArticle;
}

const ArticleList = ({ articles }: IPropTypes) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
