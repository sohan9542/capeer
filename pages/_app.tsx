import "@/styles/globals.css";

import { useEffect } from 'react';
import type { AppProps } from "next/app";
import { initializeGoogleTagManager } from "@/googleTagManage";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeGoogleTagManager('G-7Q84HKG01C'); // or initializeGA();
  }, []);
  return <Component {...pageProps} />;
}
