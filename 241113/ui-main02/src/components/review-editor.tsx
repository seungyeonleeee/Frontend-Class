"use client";

import React, { useActionState, useEffect } from "react";
import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review-actions";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  // 로딩 중 연타를 막기 위해
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );
  // isPending : status값을 boolean값으로 받아옴

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form action={formAction} className={style.form_container}>
        {/* 숨겨지는 input 태그 (bookId를 서버로 보내기 위해) */}
        <input type="text" name="bookId" value={bookId} hidden readOnly />
        {/* 보이는 input */}
        <textarea
          disabled={isPending}
          name="content"
          placeholder="리뷰내용"
          required
        ></textarea>
        <div className={style.submit_container}>
          <input
            disabled={isPending}
            type="text"
            name="author"
            placeholder="작성자"
            required
          />
          <input
            disabled={isPending}
            type="submit"
            value={isPending ? "..." : "작성하기"}
          />
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
