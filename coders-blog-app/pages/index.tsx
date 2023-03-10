import Head from "next/head";
import { Inter } from "next/font/google";
import { GetServerSideProps, NextPage } from "next";
import { fetchArticles, fetchCategories } from "@/http";
import axios, { AxiosResponse } from "axios";
import {
  IArticle,
  ICategory,
  ICollectionResponse,
  IPagination,
  IQueryOptions,
} from "@/types";
import Tabs from "@/components/Tabs";
import ArticleList from "@/components/ArticleList";
import qs from "qs";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
import { debounce } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: { items: IArticle[]; pagination: IPagination };
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  const router = useRouter();

  const { page, pageCount } = articles.pagination;

  const handleOnSearch = (val: string) => {
    router.push(`/?search=${val}`);
  };

  return (
    <>
      <Head>
        <title>{"Coder's Blog Homepage"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs
        categories={categories.items}
        handleOnSearch={debounce(handleOnSearch, 500)}
      />

      {/* Articles */}
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // Fetch() Categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  // Fetch() Articles

  const options: Partial<IQueryOptions> = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 1,
    },
  };

  if (query?.search) {
    options.filters = {
      Title: {
        $containsi: query.search,
      },
    };
  }

  const queryString = qs.stringify(options);

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};
