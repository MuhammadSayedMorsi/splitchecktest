import LeftQuestionMark from "../components/LeftQuestionMark";
import Nav from "../components/Nav";
import RightQuestionMark from "../components/RightQuestionMark";
export default function Home() {
  return (
    <div>
      <Nav />
      <main className="">
        <div className="bg-lightblue">
          <section className="container flex flex-col justify-center text-left items-center m-auto py-8 tablet:py-100 px-0 mobile:px-4 content relative">
            <div className="text-left tablet:text-center">
              <div className="w-180 h-285 absolute right-70 top-70 hidden desktop:block">
                <RightQuestionMark />
              </div>
              <h1 className="text-2xl tablet:text-5xl text-default font-bold">
                SplitChek help center
              </h1>
              <p className="text-md text-blue-300 font-normal pt-4 tablet:pt-10">
                All the answers for your questions
              </p>
              <div className="w-180 h-285 absolute left-70 top-100 hidden desktop:block">
                <LeftQuestionMark />
              </div>
            </div>
            <form className="pt-10 w-full flex justify-center">
              <div className="relative w-full tablet:w-auto">
                <input
                  type="text"
                  placeholder="Search for something"
                  className="w-full tablet:w-530 h-40 flex justify-between rounded-lg cursor-pointer text-black-400 placeholder-black-400 pl-4 pr-4 outline-none  border border-transparent focus:border-blue-500 transition ease-in-out duration-500"
                />
                <span className="absolute right-3 top-2 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#335491"
                    className="h-6 w-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </div>
            </form>
          </section>
        </div>

        <section className="flex justify-center items-center flex-col m-auto container tablet:px-40">
          <h2 className="pt-16 text-3xl tablet:text-4xl text-default font-bold">
            Get started
          </h2>
          <div className="flex justify-between mobile:flex-col tablet:flex-row pt-20 w-full">
            <div className="flex items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div>
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplementss
                </h3>

                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div className="mobile:pt-12 tablet:pt-0">
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplements
                </h3>
                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-16 mobile:flex-col tablet:flex-row w-full">
            <div className="flex justify-between items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div>
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplements
                </h3>
                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div className="mobile:pt-12 tablet:pt-0">
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplements
                </h3>
                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sell on SplitChek */}
        <section className="flex justify-center items-center flex-col m-auto container tablet:px-40 pt-8">
          <h2 className="pt-16 text-3xl tablet:text-4xl text-default font-bold">
            Sell on SplitChek
          </h2>
          <div className="flex justify-between mobile:flex-col tablet:flex-row pt-20 w-full">
            <div className="flex items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div>
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplementss
                </h3>

                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div className="mobile:pt-12 tablet:pt-0">
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplements
                </h3>
                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-16 mobile:flex-col tablet:flex-row w-full">
            <div className="flex justify-between items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div>
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplements
                </h3>
                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>


          </div>
        </section>

        {/* Hashtags */}

        <section className="flex justify-center items-center flex-col m-auto container tablet:px-40 pt-8">
          <h2 className="pt-16 text-3xl tablet:text-4xl text-default font-bold">
            Hashtags
          </h2>
          <div className="flex justify-between mobile:flex-col tablet:flex-row pt-20 w-full">
            <div className="flex items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div>
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplementss
                </h3>

                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div className="mobile:pt-12 tablet:pt-0">
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplements
                </h3>
                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-16 mobile:flex-col tablet:flex-row w-full">
            <div className="flex justify-between items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div>
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplements
                </h3>
                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <figure className="tablet:pr-64">
                <div className="w-14 h-14 bg-gray-100 rounded-full" />
              </figure>
              <div className="mobile:pt-12 tablet:pt-0">
                <h3 className="text-2xl font-bold text-black-600 pb-8">
                  Supplements
                </h3>
                <p className="text-base text-gray-300 laptop:w-3/6">
                  Your store sells supplements. You automatically qualify to
                  sell your products on SplitChek. Similar to a cleaning
                  service, selling individual items should be your last option.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center flex-col text-center m-auto px-4 pt-12 pb-12">
          <h5 className="pt-16 text-2xl tablet:text-4xl text-default font-bold">
            Have questions left?
          </h5>
          <p className="text-lg tablet:text-xl text-black-400 w-full pt-6 laptop:w-1/5">
            You don't have to sell anything online. You can list your business
            so that shoppers can see your business when they
          </p>
          <button className="w-full tablet:w-285 h-48 bg-default rounded-md text-white font-bold mt-12 mb-12  border border-transparent focus:border-blue-500">
            Contact Support
          </button>
          <style jsx>
            {`
              button {
                position: relative;
              }
              button:before {
                content: "";
                border: 1px solid black;
                opacity: 0;
                content: "";
                position: absolute;
                border-radius: 6px;
                top: -3px;
                right: -3px;
                bottom: -3px;
                left: -3px;
                transition: all 0.4s ease-in-out;
              }
              button:hover {
                background-color: #274276;
              }
              button:hover:before {
                opacity: 1;
              }
            `}
          </style>
        </section>
      </main>
    </div>
  );
}
