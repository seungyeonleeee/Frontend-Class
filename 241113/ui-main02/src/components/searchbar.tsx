"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./searchbar.module.css";

const Searchbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  // 파라미터에 있는 q값
  const q = searchParams.get("q");

  // search는 input태그에 입력한 값

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || q === search) return;
    // 파라미터 값이랑 input값이 같으면 그냥 종결

    router.push(`/search?q=${search}`);
  };

  return (
    <Suspense>
      <div>
        <form onSubmit={onSubmit} className={style.container}>
          <input value={search} type="text" onChange={onChangeSearch} />
          <input type="submit" value="검색" />
        </form>
      </div>
    </Suspense>
  );
};

export default Searchbar;
