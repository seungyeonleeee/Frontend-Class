// Error는 무조건 상호작용이 있어야 발생 => client 컴포넌트일 수 밖에 없음
"use client";

import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(error.message);
  }, [error]);

  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // 현재 페이지에 대한 필요한 서버 정보만 다시 불러와주는 역할
            reset(); // 클라이언트 컴포넌트에서 발생한 문제를 해결하기 위해서 retry
            // reset은 클라이언트 컴포넌트에서만 문제를 찾음
          });
          // startTransition => promiseAll 같은 역할
          // 비동기로 진행되는 router.refresh, reset를 순서를 주기 위해
        }}
      >
        에러해결
      </button>
    </div>
  );
};

export default Error;
