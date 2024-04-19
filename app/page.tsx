import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react";
import { Home } from "./components/home";
import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

function App() {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2381781395729368"
          crossOrigin="anonymous"></script>
          
      </Head>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}

export default App;
