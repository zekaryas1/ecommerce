import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "../components/Layouts/Header";
import React from "react";
import {categoryData} from "../models/Category";
import NextNProgress from 'nextjs-progressbar';

export default function App({Component, pageProps}: AppProps) {
    return <>
        <NextNProgress color="#111827" />
        <Header categoryData={categoryData}/>
        <Component {...pageProps} />
    </>
}
