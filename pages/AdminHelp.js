import Link from "next/link";
import MenuItem from "../components/MenuItems";
import NavBar from "../components/Nav";
export default function AdminHelp() {
  const playVid = () => {
    const videoBox = document.querySelector(".videoBox");
    if (videoBox.paused) {
      videoBox.play();
    } else {
      videoBox.pause();
    }
  };
  return (
    <>
      {/* <Nav /> */}
      <NavBar />
      <div className="flex flex-col">
        <div className="flex justify-center items-center bg-lightblue w-full h-140">
          <div className="relative w-full tablet:w-auto ml-4 mr-4 tablet:ml-0 tablet:mr-0">
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
        </div>

        <div className="flex w-full laptop:w-1/7 m-auto px-4 laptop:px-0">
          <div className="hidden laptop:block pl-4">
            <MenuItem />
          </div>
          <div className="flex flex-col">
            <div className="flex m-auto">
              <div className="flex flex-col w-full laptop:w-1/5 laptop:ml-220 pt-12">
                <h1 className="text-3xl tablet:text-5xl font-bold text-black-300">
                  Get Started
                </h1>
                <p className="text-base text-black-400 pt-6">
                  Effective on April 15, 2020
                </p>

                <div className="pt-8" id="Short">
                  <p className="text-base text-black-400">
                    At SplitChek, we believe in being clear and open about how
                    we collect and use data related to you. This Cookie Policy
                    applies to any SplitChek product or service that links to
                    this policy or incorporates it by reference. We use cookies
                    and similar technologies to collect and use data as part of
                    our Products as defined in our{" "}
                    <Link href="privacy">
                      <a className="borrder border-transparen text-default border-b border-default pb-psmall">
                        Privacy Policy
                      </a>
                    </Link>{" "}
                    and which includes our sites, communications, mobile
                    applications and off-site Products, such as our ad services.
                    In the spirit of transparency, this policy provides detailed
                    information about how and when we use these technologies. By
                    continuing to visit or use the SplitChek Products, you are
                    agreeing to the use of cookies and similar technologies for
                    the purposes described in this policy.
                  </p>
                </div>

                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-black-600 pb-2">
                    1. What is a cookie?
                  </h3>
                  <p className="text-base text-black-400">
                    A cookie is a small piece of data that a website asks your
                    browser to store on your computer or mobile device. The
                    cookie allows the website to "remember" your actions or
                    preferences over time. Most Internet browsers support
                    cookies; however, users can set their browsers to decline
                    certain types of cookies or specific cookies. Further, users
                    can delete cookies at any time.
                  </p>
                </div>

                <div className="pt-8" id="">
                  <h3 className="text-2xl font-bold text-black-600 pb-2">
                    2. Why do we use cookies?
                  </h3>
                  <p className="text-base text-black-400">
                    We use cookies to learn how you interact with our content
                    and to improve your experience when visiting our website(s).
                    For example, some cookies remember your language or
                    preferences so that you do not have to repeatedly make these
                    choices when you visit one of our websites. We also use
                    cookies to help us with geolocation tracking in order to
                    present you with the closest stores and content and click
                    and collect locations. Additionally, cookies allow us to
                    serve you specific content, such products you are interested
                    in, customise your shopping experience. We may employ the
                    learnings of your behaviour on our SplitChek to serve you
                    with targeted advertisements on third-party products in an
                    effort to “re-market” our products and services to you.
                  </p>
                  <div className="flex justify-center items-start text-left mt-6 pt-8 pb-8 pl-6 pr-6 rounded-md	bg-lightblue mr-3 tablet:mr-0">
                    <span className="pr-4">
                      <svg
                        width="26"
                        height="34"
                        viewBox="0 0 26 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M25.1317 22.2957L21.1661 25.8563C20.9645 26.0356 20.8654 26.3034 20.9017 26.5707L21.5823 31.8526C21.6223 32.1625 21.4829 32.4683 21.2227 32.6414C20.9624 32.8145 20.6265 32.8249 20.3561 32.6682L15.7492 30.0244C15.5163 29.8847 15.2285 29.872 14.9842 29.9907L10.1748 32.2744C9.89145 32.4063 9.55791 32.3672 9.31278 32.1732C9.06766 31.9793 8.95286 31.6637 9.01608 31.3576L10.1411 26.1488C10.1965 25.8839 10.1187 25.6087 9.93296 25.4119L6.27671 21.5419C6.05917 21.3162 5.99025 20.9858 6.0994 20.6919C6.20855 20.3981 6.47645 20.1928 6.78858 20.1638L12.0873 19.6013C12.3553 19.5727 12.5925 19.4152 12.723 19.1794L15.2711 14.5051C15.4207 14.2296 15.714 14.0633 16.0273 14.0764C16.3405 14.0896 16.6189 14.2799 16.7448 14.5669L18.9048 19.4326C19.011 19.6807 19.2353 19.8584 19.5011 19.9051L24.738 20.8894C25.0393 20.9513 25.2807 21.1763 25.3637 21.4725C25.4466 21.7687 25.3571 22.0864 25.1317 22.2957V22.2957Z"
                          stroke="#0B0212"
                          stroke-width="0.5625"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.92756 4.83564L8.02631 6.52314C7.92931 6.60923 7.88092 6.73757 7.89693 6.86627L8.22881 9.40314C8.24745 9.55209 8.17979 9.69867 8.05435 9.78111C7.9289 9.86354 7.7675 9.86748 7.63819 9.79127L5.42756 8.51439C5.31158 8.45239 5.17229 8.45239 5.05631 8.51439L2.75006 9.61689C2.61383 9.68627 2.44975 9.67052 2.32921 9.57649C2.20866 9.48247 2.15344 9.32717 2.18756 9.17814L2.72193 6.67502C2.74896 6.54741 2.71105 6.41471 2.62068 6.32064L0.865685 4.46439C0.761607 4.35529 0.728978 4.19633 0.781659 4.05504C0.834341 3.91376 0.963081 3.81497 1.11318 3.80064L3.65568 3.53627C3.78447 3.51996 3.89858 3.44527 3.96506 3.33377L5.18568 1.08377C5.2567 0.950325 5.39784 0.869317 5.54889 0.875311C5.69994 0.881305 5.83422 0.973242 5.89443 1.11189L6.92943 3.44627C6.9837 3.56608 7.09277 3.65208 7.22193 3.67689L9.73069 4.14939C9.88193 4.17323 10.0056 4.28258 10.0479 4.42976C10.0901 4.57694 10.0432 4.73525 9.92756 4.83564Z"
                          stroke="#0B0212"
                          stroke-width="0.5625"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-lg text-black-400" id="Pricing">
                      {" "}
                      We want you to feel at home on splitchek. that's why if
                      you join <strong>today,</strong> you will receive{" "}
                      <strong>$250</strong> free credit to use on the platform!
                    </p>
                  </div>
                </div>

                <div className="pt-8" id="Product type">
                  <h3 className="text-2xl font-bold text-black-600 pb-2">
                    3. What types of cookies do we use?
                  </h3>
                  <p className="text-base text-black-400">
                    We use cookies to learn how you interact with our content
                    and to improve your experience when visiting our website(s).
                    For example, some cookies remember your language or
                    preferences so that you do not have to repeatedly make these
                    choices when you visit one of our websites. We also use
                    cookies to help us with geolocation tracking in order to
                    present you with the closest stores and content and click
                    and collect locations. Additionally, cookies allow us to
                    serve you specific content, such products you are interested
                    in, customise your shopping experience. We may employ the
                    learnings of your behaviour on our SplitChek to serve you
                    with targeted advertisements on third-party products in an
                    effort to “re-market” our products and services to you.
                  </p>
                  <div className="pl-6 pt-4">
                    <h5 className="text-lg font-bold text-black-600">
                      3.1 Session Cookies
                    </h5>
                    <p className="text-base text-black-400">
                      Session cookies are temporary cookies that are used to
                      remember you during the course of your visit to the
                      SplitChek Products, and they expire when you close the the
                      Service for example When using our website, you may have
                      temporal cookies that will be deleted when you close your
                      web browser.
                    </p>
                  </div>

                  <div className="pl-6 pt-4">
                    <h5 className="text-lg font-bold text-black-600">
                      3.2 Persistent Cookies
                    </h5>
                    <p className="text-base text-black-400">
                      Persistent cookies are used to remember your preferences
                      within the website and remain on your desktop or mobile
                      device even after you close your browser or restart your
                      computer. We use these cookies to analyse user behaviour
                      to establish visit patterns so that we can improve our
                      website functionality for you and others who visit our
                      website(s). These cookies also allow us to serve you with
                      targeted advertising and measure the effectiveness of our
                      site functionality and advertising.
                    </p>
                  </div>
                </div>
                {/* Video */}
                <div className="pt-8" id="Long description">
                  <h3 className="text-2xl font-bold text-black-600 pb-Z">
                    4. Pixels
                  </h3>
                  <p className="text-base text-black-400">
                    A pixel is a tiny image that may be found within web pages
                    and emails, requiring a call (which provides device and
                    visit information) to our servers in order for the pixel to
                    be rendered in those web pages and emails. We use pixels to
                    learn more about your interactions with email content or web
                    content, such as whether you interacted with ads or posts.
                    Pixels can also enable us and third parties to place cookies
                    on your browser.
                  </p>

                  <div className="mt-6 relative">
                    <button
                      className="text-white bg-default border-full absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4  z-30 w-20 h-20"
                      onClick={playVid}
                    >
                      P L A Y
                    </button>
                    <video
                      pause
                      loop=""
                      autoplay="false"
                      className="videoBox"
                      width="100%"
                      height="100%"
                      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                      type="video/mp4"
                    ></video>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-black-600 pb-2">
                    5. Pixels
                  </h3>
                  <p className="text-base text-black-400">
                    A pixel is a tiny image that may be found within web pages
                    and emails, requiring a call (which provides device and
                    visit information) to our servers in order for the pixel to
                    be rendered in those web pages and emails. We use pixels to
                    learn more about your interactions with email content or web
                    content, such as whether you interacted with ads or posts.
                    Pixels can also enable us and third parties to place cookies
                    on your browser.
                  </p>
                  <div className="pt-6 pb-4">
                    <span>
                      <img
                        className="w-full h-full"
                        src="/started-scrin-1.png"
                        alt="create preference"
                      />
                    </span>
                  </div>
                  <div className="flex">
                    <span className="mr-6">
                      <img src="/started-scrin-2.png" alt="started-scrin" />
                    </span>
                    <span>
                      <img src="/started-scrin-3.png" alt="started-scrin" />
                    </span>
                  </div>
                </div>

                <div className="pt-24 pb-10 flex flex-col justify-center text-center">
                  <div className="pb-8">
                    <h6 className="text-2xl	text-black-300">
                      Was this article helpful to you?
                    </h6>
                    <div className="flex justify-center mt-10 mb-10">
                      <button className="text-base text-red-200 font-bold w-full tablet:w-140 h-48 rounded-md border-2 border-red-200 mr-6 bg-white hover:bg-red-200 hover:text-white transition duration-500 ease-out">
                        Not helpful
                      </button>
                      <button className="button text-base w-full tablet:w-140 h-48 bg-default rounded-md text-white font-bold">
                        Helpful
                      </button>
                      <style jsx>
                        {`
                          .button {
                            position: relative;
                          }
                          .button:before {
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
                          .button:hover {
                            background-color: #274276;
                          }
                          .button:hover:before {
                            opacity: 1;
                          }
                        `}
                      </style>
                    </div>
                  </div>

                  <div
                    className="flex justify-center flex-col items-center m-auto"
                    id="contact"
                  >
                    <h3 className="text-3xl tablet:text-4xl text-default text-left font-normal mb-10">
                      Have questions left?
                    </h3>
                    <p className="text-2xl text-black-400 w-full tablet:w-1/5 px-6 tablet:px-0">
                      You don't have to sell anything online. You can list your
                      business so that shoppers can see your business when they
                    </p>
                    <button className="w-full tablet:w-285 h-48 bg-default rounded-md text-white font-bold mt-12 mb-12">
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
                  </div>
                </div>
                {/*  */}
              </div>
              {/*  */}

              {/*  */}
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
