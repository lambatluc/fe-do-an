import Filters from "@/components/Filters";
import useFetchData from "@/components/hooks/useFetchData";
import LiveStream from "@/components/LiveStream";
import Layout from "@/Layout/Layout";
import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";

const LivesPage = () => {
  const maxPage = 5;
  const [page, setPage] = useState(maxPage);
  const { data } = useFetchData();
  const HandleLoadingMore = () => {
    setPage(page + maxPage);
  };
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{data?.length}</span>{" "}
          Items Found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {data &&
            data.slice(0,page)?.map((livestream, index) => (
              <LiveStream key={index} livestream={livestream} />
            ))}
        </div>
        <div className="w-full flex-colo md:my-20 my-10">
          <button
            onClick={HandleLoadingMore}
            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain"
          >
            Loading More <CgSpinner className="animate-spin" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default LivesPage;
