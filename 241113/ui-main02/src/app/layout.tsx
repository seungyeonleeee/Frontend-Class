import React, { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @David</footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
