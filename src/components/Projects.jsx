import React from "react";
import ChatImg from "../assets/projects/Chat.jpg";
import GeminiImg from "../assets/projects/Gemini.jpg";
import CryptoImg from "../assets/projects/Crypto.jpg";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <section className="text-gray-400 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <a href="http://gemini-bot-pi.vercel.app/" target="_blank">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={GeminiImg}
                    alt="blog"
                  />
                </a>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    AI BOT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Gemini Chat Bot
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Gemini Chatbot | A versatile AI assistant to simplify your
                    tasks, inspire ideas, and provide tech and productivity
                    support!
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      target="_blank"
                      href="http://gemini-bot-pi.vercel.app/"
                      className="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      React | Gemini API | Context API
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={ChatImg}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    CHAT APP
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Real Time Chat Application
                  </h1>
                  <p className="leading-relaxed mb-3">
                    LiveConnect | Real-Time Chat App for Instant Communication.
                    Chat with friends, family, and colleagues in real-time!
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      target="_blank"
                      className="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      React | Cloudinary | Firebase | Context API
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <a href="https://cryptotrack-neon.vercel.app/" target="_blank">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={CryptoImg}
                    alt="blog"
                  />
                </a>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    DAHBOARD
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Crypto Price Tracking
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Track real-time cryptocurrency prices with this sleek React
                    app powered by the CoinGecko API!
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="https://cryptotrack-neon.vercel.app/"
                      target="_blank"
                      className="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      React | CoinGecko API | Context API | TradingView |
                      WebSockets
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <a href="https://github.com/404annas" target="_blank">
            <button className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 active:scale-95 transition">
              More Projects
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
