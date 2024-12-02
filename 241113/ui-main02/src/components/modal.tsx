/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import { createPortal } from "react-dom"; // 자식 요소 정의
import style from "./modal.module.css";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      ref={dialogRef}
      className={style.modal}
    >
      {children}
    </dialog>,
    // dialog : 부모 요소를 기준으로 덮어 씌워지는 태그
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
