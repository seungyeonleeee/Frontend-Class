// "use client"; // 클라이언트 컴포넌트로 만들 때
// 기본적으로 서버 컴포넌트

import styles from "./page.module.css";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";

// 추천도서
const RecoBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      next: {
        revalidate: 3,
      },
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const recoBooks: BookData[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

// 외부데이터를 관리하는 목적의 컴포넌트
const AllBooks = async () => {
  // Data
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const allBooks: BookData[] = await response.json();
  // console.log(allBooks);

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Home = async () => {
  // console.log("Home Component 실행"); // 2번 실행

  // const APIKEY = "12345";

  // useEffect(() => {}, []);
  // error => 사전 렌더링 단계에서 모든 데이터가 종결돼서 내려오기 때문에
  // Next.js에서는 클라이언트 컴포넌트를 권장하지 않음

  // 클라이언트 컴포넌트가 서버 컴포넌트를 자식으로 가지고 오면 똑같이 클라이언트 컴포넌트화 됨

  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
};
export default Home;
