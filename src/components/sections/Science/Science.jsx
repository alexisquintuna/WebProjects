// import { useState } from "react";
import { useRef } from "react";
import "./science.css";

const Science = () => {
  const blackBtn = useRef(null);
  const secondMoon = useRef(null);
  let socialIcon;
  let instagram;
  let facebook;
  let twitter;
  let youtube;
  setTimeout(() => {
    instagram = document.getElementById("instagram");
    facebook = document.getElementById("facebook");
    twitter = document.getElementById("twitter");
    youtube = document.getElementById("youtube");
    socialIcon = document.querySelectorAll(".social__icon")
  }, 100);

  function circleBigger() {
    blackBtn.current.classList.add("blackCardHover");
    secondMoon.current.classList.add("second-moon_hover");
    secondMoon.current.classList.remove("second-moon_shape");
  }

  function circleSmaller() {
    blackBtn.current.classList.remove("blackCardHover");
    secondMoon.current.classList.remove("second-moon_hover");
    secondMoon.current.classList.add("second-moon_shape");
  }

  const socialEffect = (element) => {
    if (element.classList.contains("active__icon")) {
      element.classList.remove("active__icon");
      element.firstChild.classList.remove("active");
    } else {
      socialIcon.forEach((otherEl) => {
        if (otherEl !== element) {
          otherEl.classList.remove("active__icon");
          otherEl.firstChild.classList.remove("active");
        }
      });
      element.classList.add("active__icon");
      element.firstChild.classList.add("active");
    }
  };

  return (
    <div className="relative top-0 left-0">
      <div className="px-2 pt-2">
        <nav className="w-full border-2 border-black rounded-3xl overflow-hidden">
          <div className="flex w-full">
            <div className="w-1/2 md:w-1/2 sm:w-full flex relative">
              <a
                href="www.alexisiquintuna.com"
                target="blank"
                className="w-full boxes main-home h-auto py-2 relative"
              >
                <div>
                  <p className="pl-4 font-semibold">Home page</p>
                  <p className="text-right pr-4 font-semibold">01</p>
                </div>
              </a>
              <a
                href="www.alexisiquintuna.com"
                target="blank"
                className="w-full boxes nav-hover h-auto py-2 hidden sm:block relative "
              >
                <p className="pl-4 font-semibold">About science</p>
                <p className="text-right pr-2">02</p>
              </a>
              <a
                href="www.alexisiquintuna.com"
                target="blank"
                className="w-full boxes nav-hover h-auto py-2 hidden sm:block relative"
              >
                <p className="pl-4 font-semibold">Pricing list</p>
                <p className="text-right pr-2">03</p>
              </a>
              <a
                href="www.alexisiquintuna.com"
                target="blank"
                className="w-full nav-hover h-auto py-2 hidden md:hidden sm:block relative"
              >
                <p className="pl-4 font-semibold">Portfolio</p>
                <p className="text-right pr-2">04</p>
              </a>
            </div>
            <div className="w-1/2 hidden md:block px-4">
              <div className="flex items-center h-full justify-between">
                <div className="flex w-1/4 justify-between">
                  <div
                    id="instagram"
                    onClick={() => socialEffect(instagram)}
                    className="social__icon active__icon p-3 rounded-full flex items-center"
                  >
                    <svg
                      className="active"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                  <div
                    id="facebook"
                    onClick={() => socialEffect(facebook)}
                    className="social__icon p-3 flex items-center rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </div>
                  <div
                    id="twitter"
                    onClick={() => socialEffect(twitter)}
                    className="social__icon p-3 flex items-center rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </div>
                  <div
                    id="youtube"
                    onClick={() => socialEffect(youtube)}
                    className="social__icon p-3 flex items-center rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="flex bg-black items-center gap-5 px-4 py-1 rounded-full">
                    <p className="text-white text-xs font-medium">
                      Portfolio Science
                    </p>
                    <p className="text-xs bg-white px-2 py-1 rounded-full">3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 block sm:hidden py-2">
              <p className="font-semibold pl-4">Menu</p>
              <p className="font-semibold text-right pr-4">02</p>
            </div>
          </div>
          <div className="nav-bottom px-2 py-4">
            <h1 className="text-right font-semibold text-4xl">
              Discover technology science.
            </h1>
          </div>
        </nav>
      </div>
      <div className="px-2 flex flex-col-reverse sm:flex-row">
        <div className="w-full black-card ">
          <div
            onMouseEnter={circleBigger}
            onMouseLeave={circleSmaller}
            className="bg-black p-4 rounded-t-3xl"
          >
            <h3 className="text-white text-2xl pt-2 pb-6">
              Experiement with lighting.
            </h3>
            <div className="lines">
              <div className="line-1 mb-2"></div>
              <div className="line-2 mb-4"></div>
              <div className="line-3"></div>
            </div>
            <div className="circles relative w-full h-64 md:h-80">
              <div className="center h-32 w-32 md:h-44 md:w-44 "></div>
              <div
                ref={secondMoon}
                className="second-moon second-moon_shape h-32 w-32 md:h-44 md:w-44 bg-black"
              ></div>
            </div>
            <div className="text-white flex justify-between">
              <p className="text-md">James Smith</p>
              <button
                ref={blackBtn}
                className="black-card_btn border border-white rounded-3xl px-8 text-sm"
              >
                READ MORE
              </button>
            </div>
          </div>
          <div className="bg-neutral-400 p-4 rounded-b-3xl text-white">
            <p>
              New author visual -- for product rendering.{" "}
              <a href="blank">Concept product</a> with website design created
              with STUDIO Visual Editor. The latest trends and scientific
              solutions. Scientific <a href="www.nasa.com">discovery</a> and
              visiting places to expand knowledge while speading. Photography
              and interesting visual effects.
            </p>
            <p>Website concept -- Scale NO. 3.001 / ©2023.</p>
          </div>
        </div>
        <div className="image w-full h-64 md:h-auto lg:h-auto bg-red-400 sm:h-auto rounded-3xl flex items-center"></div>
      </div>
      <div className="px-2 pt-10 w-full footer_class">
        <div className="flex border-black border-2 rounded-3xl p-2">
          <div className="hidden md:block w-1/3">
            <p>© Alexis Quintuna 2023</p>
          </div>
          <div className="hidden md:block w-1/3 text-center">
            <p>
              created with passion<span className="beating-heart">♥️</span>
            </p>
          </div>
          <div className="socials w-full md:w-1/3 flex justify-center md:justify-end gap-2">
            <a
              className="portfolio"
              href="https://www.alexisquintuna.com"
              target="blank"
            >
              Portfolio
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/alexis-quintuna/"
              target="blank"
            >
              LinkedIn
            </a>
            <a
              className="codepen"
              href="https://codepen.io/alexisquintuna"
              target="blank"
            >
              CodePen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
