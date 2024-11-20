// "use client"; // 클라이언트 컴포넌트로 만들 때
// 기본적으로 서버 컴포넌트

import ClientComponent from "../../components/client-component";
import ServerComponent from "../../components/server-component";
import styles from "./page.module.css";

export default function Home() {
  // console.log("Home Component 실행"); // 2번 실행

  // const APIKEY = "12345";

  // useEffect(() => {}, []);
  // error => 사전 렌더링 단계에서 모든 데이터가 종결돼서 내려오기 때문에
  // Next.js에서는 클라이언트 컴포넌트를 권장하지 않음

  // 클라이언트 컴포넌트가 서버 컴포넌트를 자식으로 가지고 오면 똑같이 클라이언트 컴포넌트화 됨

  return (
    <div className={styles.page}>
      Index Page
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
