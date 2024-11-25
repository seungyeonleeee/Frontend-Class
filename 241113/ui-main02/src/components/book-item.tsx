import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";

import React from "react";

const BookItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} alt={title} />
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <br />
      <div className={style.author}>
        {author} | {publisher}
      </div>
    </Link>
  );
};

export default BookItem;
