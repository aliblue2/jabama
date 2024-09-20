import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
    router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, [router]);
  return (
    <Layout>
      {loading && <Loading />}
      <Component {...pageProps} />
    </Layout>
  );
}
