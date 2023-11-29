import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Neyo's portfolio</title>
      </Head>

      {/* Header Section */}
      <Header/>
    </div>
  );
};

export default Home;
