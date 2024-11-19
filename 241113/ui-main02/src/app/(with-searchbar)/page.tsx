// "use client";

import styles from "./page.module.css";

export default function Home() {
  // console.log("Home Component 실행");

  // const APIKEY = "12345";

  // useEffect(() => {}, []);
  // error => 사전 렌더링 단계에서 모든 데이터가 종결돼서 내려오기 때문에
  // Next.js에서는 클라이언트 컴포넌트를 권장하지 않음

  return <div className={styles.page}>Index Page</div>;
}
