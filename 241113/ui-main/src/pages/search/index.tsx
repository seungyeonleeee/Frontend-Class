import React from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;
  console.log(q);
  // 데이터가 들어오기 전, 후 2번 찍힘

  return <h1>Search : {q}</h1>;
};

export default Search;
