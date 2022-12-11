import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "../components/Layouts/Header";
import React from "react";
import {categoryData} from "../models/Category";
import NextNProgress from 'nextjs-progressbar';
// import {Work_Sans} from '@next/font/google'
import {Secular_One} from '@next/font/google'

const inter = Secular_One({
    subsets: ['latin'],
    weight: '400'
})

export default function App({Component, pageProps}: AppProps) {
    return <>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <NextNProgress color="#111827"/>
        <Header categoryData={categoryData}/>
        <Component {...pageProps} />
    </>
}
