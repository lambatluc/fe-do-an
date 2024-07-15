import Banner from "@/components/Home/Banner";
import PopularStream from "@/components/Home/PopularStream";
import Promos from "@/components/Home/Promos";
import TopRated from "@/components/Home/TopRated";
import Layout from "@/Layout/Layout";
import React from "react";

const HomeScreen = (): JSX.Element => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner/>
        <PopularStream/>
        <Promos/>
        <TopRated/>
      </div>
    </Layout>
  );
};

export default HomeScreen;
