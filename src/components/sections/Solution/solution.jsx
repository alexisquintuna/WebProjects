import "./solution.css";

const solution = () => {
  function cardAnimationIn(id) {
    console.log(id.target.classList.contains("card"));
    if (id.target.classList.contains("card")) {
      id.target.classList.add("bg-zinc-100");
      id.target.getElementsByTagName("h5")[0].classList.add("hover-card-title");
      id.target
        .getElementsByTagName("div")[0]
        .firstElementChild.classList.remove("bg-violet-100");
      id.target
        .getElementsByTagName("div")[0]
        .firstElementChild.classList.remove("text-violet-700");
      id.target
        .getElementsByTagName("div")[0]
        .firstElementChild.classList.add("bg-black");
      id.target
        .getElementsByTagName("div")[0]
        .firstElementChild.classList.add("text-white");
      id.target.getElementsByTagName("button")[0].classList.add("bg-black");
      id.target
        .getElementsByTagName("button")[0]
        .lastElementChild.classList.remove("bg-black");
      id.target
        .getElementsByTagName("button")[0]
        .lastElementChild.classList.add("bg-white");
      id.target
        .getElementsByTagName("button")[0]
        .lastElementChild.firstElementChild.classList.remove("fill-white");
      id.target
        .getElementsByTagName("button")[0]
        .lastElementChild.firstElementChild.classList.add("fill-black");
      id.target
        .getElementsByTagName("button")[0]
        .firstElementChild.classList.add("text-white");
    } else {
      console.log("nope");
    }
  }

  function cardAnimationOut(id) {
    if (id.target.classList.contains("card")) {
      id.target
        .getElementsByTagName("h5")[0]
        .classList.remove("hover-card-title");
      id.target.classList.remove("bg-zinc-100");
      id.target
        .getElementsByTagName("div")[0]
        .firstElementChild.classList.add("bg-violet-100");
      id.target
        .getElementsByTagName("div")[0]
        .firstElementChild.classList.add("text-violet-700");
      id.target
        .getElementsByTagName("div")[0]
        .firstElementChild.classList.remove("bg-black");
      id.target
        .getElementsByTagName("div")[0]
        .firstElementChild.classList.remove("text-white");
      id.target.getElementsByTagName("button")[0].classList.remove("bg-black");
      id.target
        .getElementsByTagName("button")[0]
        .lastElementChild.classList.add("bg-black");
      id.target
        .getElementsByTagName("button")[0]
        .lastElementChild.classList.remove("bg-white");
      id.target
        .getElementsByTagName("button")[0]
        .lastElementChild.firstElementChild.classList.add("fill-white");
      id.target
        .getElementsByTagName("button")[0]
        .lastElementChild.firstElementChild.classList.remove("fill-black");
      id.target
        .getElementsByTagName("button")[0]
        .firstElementChild.classList.remove("text-white");
    } else {
        console.log("nipe")
    }
  }

  return (
    <>
      <nav className="justify-between flex  w-full p-3">
        <div className="left-side flex gap-2">
          <div className="flex items-center">
            <svg
              className="h-4 fill-green-500"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="h-4 fill-green-500"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
          <p className="logo text-3xl font-bold tracking-tighter scale-y-75 ">
            SOLUTION
          </p>
        </div>
        <div className="right-side flex items-center gap-6 font-medium text-sm overflow-hidden">
          <div className="flex items-center gap-6 font-medium text-sm navbarContainer">
            <div className="gap-6 hidden md:flex">
              <a
                className="nav-hover relative"
                href="www.google.com"
                target="blank"
              >
                About technology
              </a>
              <a
                className="nav-hover relative"
                href="www.google.com"
                target="blank"
              >
                Pricing
              </a>
              <a
                className="nav-hover relative"
                href="www.google.com"
                target="blank"
              >
                Contact
              </a>
            </div>
            <a
              href="www.google.com"
              target="blank"
              className="hidden sm:flex items-center gap-1 bg-slate-200 px-3 py-1 rounded-3xl"
            >
              <p>Download Files</p>
              <p className="small-number flex justify-center items-center">2</p>
            </a>
          </div>
          <div className="grid justify-items-end gap-1 cursor-pointer navmenu">
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
        </div>
      </nav>
      <div className="w-full p-3 flex flex-col md:flex-row h-fit gap-2">
        <div className="conference-card hover-card transitions w-full md:w-1/2 rounded-3xl flex flex-col justify-between p-6 gap-24">
          <h3 className="bg-zinc-200 w-fit px-4  rounded-3xl text-sm font-medium md:text-xs">
            STREAM APPLICATION
          </h3>
          <div className="bottom-conferenceCard gap-6 flex flex-col">
            <img
              className="h-8 w-8 rounded-full"
              src="https://www.studiocabrelli.com/wp-content/uploads/2020/05/portrait-photographer-paris@studiocabrelli_0004.jpg"
              alt="headshot"
            />
            <div className="flex items-center gap-2">
              <h5 className="text-4xl text-white relative card-title-hover">
                Business Conference
              </h5>
              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </div>
            <p className="font-light text-sm text-gray-200">
              Application and solution for companies to conduct training and
              remote classNamees with{" "}
              <a href="www.google.com" target="blank">
                unlimited video
              </a>{" "}
              conferencing.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex gap-2 flex-col-reverse sm:flex-row">
          <div className="purple-card bg-violet-600 rounded-3xl p-6 flex flex-col gap-8 sm:gap-32">
            <h3 className="card-headline w-fit px-4 rounded-3xl text-sm text-slate-100 md:text-xs">
              TUTORIAL INTRODUCE
            </h3>
            <div className="items-center flex justify-center w-full">
              <div className="border border-slate-100 rounded-full h-24 w-24 flex items-center justify-center">
                <div className="animation-circle h-20 w-20 flex items-center justify-center rounded-full">
                  <svg
                    className="fill-slate-100"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-slate-100 text-3xl font-light">
              Solutions and guide for meetings
            </p>
          </div>
          <div className="flex flex-col gap-2 h-auto">
            <div className="hover-card bg-green-500 rounded-3xl p-6 flex flex-col gap-10 sm:gap-0 sm:justify-between sm:h-1/2">
              <h3 className="card-headline w-fit px-4 rounded-3xl text-sm text-slate-100 md:text-xs">
                MEETING SYSTEM
              </h3>
              <div className="flex flex-col gap-4">
                <h5 className="text-slate-100 text-xl card-title-hover w-fit relative ">
                  Streaming experience
                </h5>
                <p className="text-gray-100 text-sm">
                  Configuration and management of the video{" "}
                  <a href="www.google.com" target="blank">
                    streaming panel.
                  </a>
                </p>
              </div>
            </div>
            <div className="hover-card black-card bg-black text-white rounded-3xl p-6 flex flex-col gap-10 sm:h-1/2 sm:gap-0 sm:justify-between">
              <div className="flex items-center gap-2">
                <h3 className="relative text-4xl card-title-hover">10M+</h3>
                <div className="h-6 w-6 arrow-up bg-slate-100 rounded-full flex items-center justify-center">
                  <svg
                    className="h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                  >
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                  </svg>
                </div>
              </div>
              <p className="text-slate-100 text-sm font-extralight">
                Active{" "}
                <a href="www.google.com" target="blank">
                  register users
                </a>{" "}
                in the system and platform community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full p-3">
        <div className="w-full sm:w-1/2">
          <div className="w-full">
            <p>
              Get Started with{" "}
              <span className="font-semibold underline">Downloads</span>{" "}
              <span className="bg-violet-100 text-violet-700 font-semibold text-sm px-3 py-0 rounded-xl">
                2+
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/2 hidden sm:flex">
          <div className="w-1/3 text-xs hidden md:inline-block">Size</div>
          <div className="w-1/3 text-xs hidden md:inline-block">Downloads</div>
          <div className="w-full md:w-1/3 sm:inline-block hidden text-sm text-right">
            Sorted by <span className="font-semibold underline">Popular</span>
          </div>
        </div>
      </div>
      <div className="flex p-3">
        <div
          onMouseEnter={(id) => cardAnimationIn(id)}
          onMouseLeave={(id) => cardAnimationOut(id)}
          className="z-50 card w-full rounded-xl border border-slate-200 flex flex-col md:flex-row items-center p-3"
        >
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-start sm:items-center px-3 pt-3 md:p-3 gap-4">
            <div className="transitions bg-violet-100 text-violet-700 flex items-center justify-center text-center text-3xl rounded-full h-16 w-16 p-3">
              <p>1.</p>
            </div>
            <div className="gap-2 flex flex-col">
              <div className="flex items-center gap-2">
                <h5 className="card-title relative font-semibold text-2xl md:text-3xl">
                  Dashboard
                </h5>
                <p className="bg-orange-600 text-sm text-white px-3 rounded-full">
                  Mac
                </p>
                <p className="bg-violet-600 text-sm text-white px-3 rounded-full md:inline-block hidden">
                  Best popular
                </p>
              </div>
              <p className="text-sm">
                The main software to create your{" "}
                <a
                  className="font-bold underline"
                  href="www.google.com"
                  target="blank"
                >
                  streams video and conference
                </a>{" "}
                with the standard management plugins you head.
              </p>
            </div>
          </div>
          <div className="w-full px-3 sm:px-0 sm:w-5/6 md:w-1/2 ml-0 sm:ml-14 md:ml-0 flex items-center h-full flex-wrap py-3 md:py-0">
            <div className="w-full sm:w-1/2 md:w-1/3 h-fit md:h-4/6 flex items-end md:items-start gap-2 justify-between sm:justify-normal">
              <p className="inline-block md:hidden text-sm text-zinc-600">
                Size
              </p>
              <p className="text-xl md:text-2xl font-semibold">220.4MB</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 h-fit md:h-4/6 flex items-end md:items-start justify-between sm:justify-end md:justify-start gap-2">
              <p className="inline-block md:hidden text-sm text-zinc-600">
                Downloads
              </p>
              <p className="text-xl md:text-2xl font-semibold">1 000 000+</p>
            </div>
            <div className="w-full md:w-1/3 h-fit md:h-4/6 flex justify-center pt-3 md:pt-0">
              <button className="transitions flex justify-center items-center gap-3 border border-black rounded-full w-full md:w-4/6 h-fit px-2">
                <p className="text-base">Download Now</p>
                <div className="h-5 w-5 bg-black flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white w-3 h-3"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-3">
        <div
          onMouseEnter={(id) => cardAnimationIn(id)}
          onMouseLeave={(id) => cardAnimationOut(id)}
          className="z-50 card w-full rounded-xl border border-slate-200 flex flex-col md:flex-row items-center p-3"
        >
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-start sm:items-center px-3 pt-3 md:p-3 gap-4">
            <div className="transitions bg-violet-100 text-violet-700 flex items-center justify-center text-center text-3xl rounded-full h-16 w-16 p-3">
              <p>2.</p>
            </div>
            <div className="gap-2 flex flex-col">
              <div className="flex items-center gap-2 flex-wrap">
                <h5 className="card-title relative font-semibold text-2xl md:text-3xl">
                  Management Panel
                </h5>
                <p className="bg-green-600 text-sm text-white px-3 rounded-full">
                  Microsoft
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-3 sm:px-0 sm:w-5/6 md:w-1/2 ml-0 sm:ml-14 md:ml-0 flex items-center h-full flex-wrap py-3 md:py-0">
            <div className="w-full sm:w-1/2 md:w-1/3 h-fit md:h-4/6 flex items-end md:items-start gap-2 justify-between sm:justify-normal">
              <p className="inline-block md:hidden text-sm text-zinc-600">
                Size
              </p>
              <p className="text-xl md:text-2xl font-semibold">2.42 TB</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 h-fit md:h-4/6 flex items-end md:items-start justify-between sm:justify-end md:justify-start gap-2">
              <p className="inline-block md:hidden text-sm text-zinc-600">
                Downloads
              </p>
              <p className="text-xl md:text-2xl font-semibold">500 000+</p>
            </div>
            <div className="w-full md:w-1/3 h-fit md:h-4/6 flex justify-center pt-3 md:pt-0">
              <button className="transitions flex justify-center items-center gap-3 border border-black rounded-full w-full md:w-4/6 h-fit px-2">
                <p className="text-base">Download Now</p>
                <div className="h-5 w-5 bg-black flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white w-3 h-3"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default solution;
