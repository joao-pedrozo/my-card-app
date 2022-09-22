import CardList from "@/components/CardList";
import LoadingIndicator from "@/components/LoadingIndicator";
import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading, isSuccess } = trpc.useQuery(["search.cards-search"]);

  const isLoadingOrError = isLoading || !isSuccess;

  return (
    <>
      <Head>
        <title>Cards Pool App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <div
          className={`flex flex-col justify-center h-full  w-full  items-center relative`}
        >
          {isLoadingOrError ? (
            <LoadingIndicator />
          ) : (
            <>
              <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center py-8 sm:w-6/12 w-[19rem]">
                <div className="flex items-center h-10 sm:w-4/12 justify-center">
                  <h2 className="font-mono text-5xl font-bold">CardPool</h2>
                </div>

                <div className=" w-full h-10 relative py-4 sm:py-0 ">
                  <input
                    className=" rounded-3xl p-4 border-solid  bg-slate-600 w-full h-11 outline-none border-2 border-gray-300 font-bold placeholder:text-white placeholder:text-lg placeholder:font-bold"
                    placeholder="Search for cards..."
                    aria-label="Search for cards..."
                  />
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width="28px"
                    height="28px"
                    className="absolute top-6 sm:top-2 right-4 bottom-2"
                  >
                    <path
                      d="M11 2a9 9 0 1 0 3.88 17.123l5.777 5.777a3 3 0 0 0 4.243-4.243l-5.777-5.777A9 9 0 0 0 11 2zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm14.032 5.618a9.054 9.054 0 0 1-1.414 1.414l5.453 5.453a1 1 0 0 0 1.414-1.414z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <CardList data={data!.cards} />
            </>
          )}
        </div>
      </>
    </>
  );
};

export default Home;
