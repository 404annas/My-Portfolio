import React, { useState } from "react";
import { CONTACT } from "../assets/constants";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3_FORM_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setShowResult(true);

    setTimeout(() => {
      setShowResult(false);
    }, 5000);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="text-nuetral-400 body-font relative">
        <div className="ontainer px-5 pt-20 pb-2 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-white text-center">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to reach out! I’m always open to discussing new
              opportunities, ideas, or collaborations.
              <br />
              Let’s connect and create something amazing together!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-sm outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-purple-600 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded text-lg active:scale-95 transition"
                >
                  Send
                </button>
                {showResult && (
                  <span className="absolute right-0 text-sm text-green-400">
                    {result}
                  </span>
                )}
              </div>
              <div className="p-2 w-full pt-4 mt-4 border-t border-gray-800 text-center">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=annasking601@gmail.com&su=Hello%20Annas&body=I%20wanted%20to%20reach%20out!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 cursor-pointer"
                >
                  annasking601@gmail.com
                </a>
                <p className="leading-normal my-4">{CONTACT.phoneNo}</p>
                <span className="inline-flex">
                  <a
                    href="https://www.linkedin.com/in/muhammad-annas-khan-a17b6a266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 cursor-pointer"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 3.553c-.391-.391-.902-.553-1.411-.553h-16c-.51 0-1.022.163-1.411.553-.391.391-.553.902-.553 1.411v16c0 .51.163 1.022.553 1.411.391.391.902.553 1.411.553h16c.51 0 1.022-.163 1.411-.553.391-.391.553-.902.553-1.411v-16c0-.51-.163-1.022-.553-1.411zM9 16.25h-3v-7.5h3v7.5zm-1.5-8.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm10.5 8.5h-3v-4.5c0-1.249-.697-1.75-1.625-1.75-1.168 0-1.875.826-1.875 1.75v4.5h-3v-7.5h3v1.038c.701-.963 1.874-1.038 2.595-1.038 2.293 0 3.325 1.542 3.325 4.462v3.5z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/404annas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-neutral-400 cursor-pointer"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c-5.522 0-10 4.478-10 10 0 4.418 2.867 8.167 6.84 9.494.5.091.682-.216.682-.48v-1.872c-2.678.582-3.24-1.288-3.24-1.288-.442-1.12-1.078-1.419-1.078-1.419-.883-.601.067-.588.067-.588 1.062.075 1.626 1.07 1.626 1.07.944 1.614 2.477 1.147 3.078.88.094-.684.369-1.147.671-1.412-2.336-.266-4.795-1.168-4.795-5.194 0-1.146.428-2.083 1.13-2.814-.113-.276-.489-1.391.106-2.894 0 0 .878-.28 2.889 1.073.839-.234 1.745-.351 2.635-.356 1.04.005 1.996.123 2.868.358 2.016-1.358 2.891-1.073 2.891-1.073.595 1.503.219 2.618.106 2.894.702.731 1.13 1.668 1.13 2.814 0 4.031-2.458 4.923-4.8 5.188.381.319.72.947.72 1.903v2.86c0 .263.183.572.684.48 3.973-1.326 6.84-5.076 6.84-9.494 0-5.522-4.478-10-10-10z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/annaskhan.04/"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-4 text-neutral-400 cursor-pointer"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=annasking601@gmail.com&su=Hello%20Annas&body=I%20wanted%20to%20reach%20out!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-neutral-400 cursor-pointer"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
