import Filters from "@/components/Filters";
import Layout from "@/Layout/Layout";
import React from "react";

const LivesPage = () => {
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Filters/>
      </div>
    </Layout>
  );
};

export default LivesPage;
