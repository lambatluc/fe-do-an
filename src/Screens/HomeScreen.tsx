import Banner from "@/components/Home/Banner";
import PopularStream from "@/components/Home/PopularStream";
import Promos from "@/components/Home/Promos";
import TopRated from "@/components/Home/TopRated";
import Layout from "@/Layout/Layout";
import React from "react";

const HomeScreen = (): JSX.Element => {
  return (
    <Layout>
      <div className="mx-auto min-h-screen mb-6">
        <Banner />
        <div className="w-11/12 m-auto">
          <PopularStream />
          <Promos />
          <TopRated />
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;
