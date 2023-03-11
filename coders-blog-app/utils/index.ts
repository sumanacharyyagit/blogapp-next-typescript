import { IArticle } from "@/types";
import { serialize } from "next-mdx-remote/serialize";

export const formatDate = (adteStr: string): string => {
  const date = new Date(adteStr).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
};

export const makeCategory = (slug: string): string => {
  if (typeof slug === "string") {
    return slug.split("-").join(" ");
  }
  return "";
};

export const capitalizedFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const debounce = (cb: (val: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout;

  const debounced = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, timeout);
  };
  return debounced;
};

export const serializeMarkdown = async (item: IArticle) => {
  const body = await serialize(item.attributes.Body as string);
  return {
    ...item,
    attributes: {
      ...item.attributes,
      body,
    },
  };
};
