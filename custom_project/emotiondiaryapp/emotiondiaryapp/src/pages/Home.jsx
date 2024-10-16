import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return <div>Home</div>;
};

export default Home;
