import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Layouts/Header";
import React from "react";
import NextNProgress from "nextjs-progressbar";
import { Secular_One } from "@next/font/google";
import { CATEGORY_DATA } from "../models/data/Category.Data";

const inter = Secular_One({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <NextNProgress color="#111827" />
      <Header categoryData={CATEGORY_DATA} />
      <Component {...pageProps} />
    </>
  );
}
