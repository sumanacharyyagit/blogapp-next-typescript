import { TDirection } from "@/types";
import React from "react";
import qs from "qs";
import { useRouter } from "next/router";

interface IPropTypes {
  page: number;
  pageCount: number;
  redirectUrl?: string;
}

const Pagination = ({ page, pageCount, redirectUrl = "/" }: IPropTypes) => {
  const router = useRouter();

  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };
  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };
  const handelPaginate = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }
    if (direction === -1 && isPrevDisabled()) {
      return;
    }

    const queryString = qs.stringify({
      ...router.query,
      page: page + direction,
    });

    router.push(`${redirectUrl}?${queryString}`);
  };

  return (
    <div className="flex justify-center mt-24 gap-5">
      <button
        onClick={() => handelPaginate(-1)}
        className={`bg-primary py-2 px-4 text-white w-24 rounded ${
          isPrevDisabled() ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handelPaginate(1)}
        className={`bg-primary py-2 px-4 text-white w-24 rounded ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
