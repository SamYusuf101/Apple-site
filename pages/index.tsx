import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative h-[200vh] bg-[#e8ecee]">
        <LandingPage />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-10">
          <h1
            className="tarcking-wide text-center text-4xl font-medium
        text-white md:text-5xl"
          >
            New Promos
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
