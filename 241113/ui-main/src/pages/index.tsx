import React, { ReactNode } from "react";
import style from "./index.module.css";
// Global css는 반드시 모듈화
import books from "@/mock/book.json";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";

const Home = () => {
  return (
    <main className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </main>
  );
};
// Home컴포넌트 페이지는 내가 지정한 layout을 쓰겠다
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
