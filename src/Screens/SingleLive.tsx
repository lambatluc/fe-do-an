import useFetchData from "@/components/hooks/useFetchData";
import Layout from "@/Layout/Layout";
import React from "react";
import { useParams } from "react-router-dom";

const SingleLive = () => {
  const { data } = useFetchData();
  const { id } = useParams();
  const live = data?.find((livestream) => livestream.streamerName === id);
  return (
    <Layout>
      <h1>hi</h1>
    </Layout>
  );
};

export default SingleLive;
