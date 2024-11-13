import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
  };

  return (
    <>
      <header>
        <Link href={"/"}>Index</Link>
        &nbsp;
        <Link href={"/search"}>Search</Link>
        &nbsp;
        <Link href={"/book/1"}>Book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
// Component: 자식 요소로 들어오는 페이지
// pageProps: 자식 요소가 받는 Props
// 루트페이지 역할

//이승연 너 왜 나 맥주 도둑 만들어?!
