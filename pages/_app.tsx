import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "../components/Layouts/Header";
import React from "react";
import {categoryData} from "../models/Category";

export default function App({Component, pageProps}: AppProps) {
    return <>
        <Header categoryData={categoryData}/>
        <Component {...pageProps} />
    </>
}
