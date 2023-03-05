import { IArticle } from "@/types";
import React from "react";

interface IPropTypes {
  article: IArticle;
}

const BlogCard = ({ article }: IPropTypes) => {
  return <div>{article.attributes.Title}</div>;
};

export default BlogCard;
