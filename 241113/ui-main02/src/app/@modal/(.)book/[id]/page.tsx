/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import BookPage from "@/app/book/[id]/page"; // 인터셉트 전 원본페이지
import Modal from "@/components/modal";

const Page = (props: any) => {
  return (
    <Modal>
      <BookPage {...props} />
    </Modal>
  );
};

export default Page;
