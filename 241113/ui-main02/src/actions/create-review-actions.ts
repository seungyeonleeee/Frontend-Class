"use server"; // server action의 기능을 갖게 됨

import delay from "@/util/delay";
import { error } from "console";
import { revalidatePath } from "next/cache"; // 알아서 재검증 (새로고침 안해도 새로운 리뷰가 바로 나오게 snapshot기능)

export const createReviewAction = async (_: any, formData: FormData) => {
  // console.log("server action");
  // console.log(formData);

  const bookId = formData.get("bookId")?.toString();

  const content: FormDataEntryValue | null | undefined = formData
    .get("content")
    ?.toString();
  const author: FormDataEntryValue | null | undefined = formData
    .get("author")
    ?.toString();
  // console.log(content, author, bookId);

  if (!content || !author || !bookId) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요!",
    };
  }

  try {
    await delay(2000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );
    // console.log(response.status);
    // schema에 저장

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // // revalidatePath의 옵션들
    // // 1. 특정 주소 해당 및 관련 컴포넌트 페이지들의 재검증
    // revalidatePath(`book/${bookId}`);
    // // 2. 특정 경로의 모든 페이지를 재검증
    // revalidatePath(`book/[id]`, "page");
    // // 3. 특정 레이아웃을 갖는 모든 페이지 재검증
    // revalidatePath(`/(with-searchbar)`, "layout");
    // // 4. 현재 작업 중인 모든 페이지 재검증
    // revalidatePath(`/`, "layout");
    // // 5. 태그 기준, 데이터 캐시 재검증 => 추천
    revalidatePath(`review-${bookId}`);
    // tags: [`review-${bookId}`] 얘만 재검증 해라

    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다. : ${err}`,
    };
  }
};
