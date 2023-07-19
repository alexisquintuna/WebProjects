import "./facture.css";

const facture = () => {
  return (
    <div class="relative h-screen w-full">
      <div class="p-3 absolute w-full z-50">
        <nav class="rounded-md flex bg-lime-400 justify-between items-center p-1">
          <div class="flex items-center h-fit gap-6 font-medium">
            <div class="flex items-center bg-black text-white px-10 py-1 rounded-md gap-1">
              <div class="">
                <svg
                  class="fill-white w-2 h-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                </svg>
              </div>
              <p class="text-base">FACTURE</p>
            </div>
            <div class="text-xs gap-6 hidden md:flex">
              <a href="www.alexisquintuna.com" class="hover-link">
                Home page
              </a>
              <a href="www.alexisquintuna.com" class="hover-link">
                About us
              </a>
              <a href="www.alexisquintuna.com" class="hover-link">
                Portfolio
              </a>
              <a href="www.alexisquintuna.com" class="hover-link">
                Download
              </a>
            </div>
          </div>
          <div class="items-center gap-1 font-medium flex">
            <div class="hidden md:block text-xs px-4 py-2 rounded-md border border-black solutions-block">
              <p>Solutions</p>
            </div>
            <div class="hidden md:flex text-xs p-2 border border-black rounded-md gap-1 items-center getStarted-block">
              <p>Get Started</p>
              <div>
                <svg
                  class="getStarted-block"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </div>
            <div class="flex flex-col gap-1 md:hidden">
              <div class="h-1 w-6 bg-black"></div>
              <div class="h-1 w-6 bg-black"></div>
              <div class="h-1 w-6 bg-black"></div>
            </div>
          </div>
        </nav>
      </div>
      <div class="absolute w-full h-full flex flex-col md:flex-row ">
        <div class="flex flex-col sm:flex-row w-full md:w-1/2 relative">
          <div class="hover:cursor-pointer sm:w-1/2 h-full card relative flex items-center justify-center">
            <div class="cardBackground1 w-full h-full absolute top-0 left-0"></div>
            <h5 class="card-number">1</h5>
            <div class="absolute bottom-2 w-full px-4 flex flex-col h-32 justify-between text-xs">
              <p class="rounded-xl border border-black w-fit px-1 bottom-text-card">
                LABORATORY
              </p>
              <div class="flex items-end justify-between">
                <div class="">
                  <p class="bottom-text-card">Discovery Industry</p>
                  <p class="bottom-text-card">Solutions</p>
                </div>
                <div class="rounded-full h-fit w-fit p-1 arrow-bg">
                  <svg
                    class="fill-white arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="hover:cursor-pointer sm:w-1/2 h-full card relative flex items-center justify-center">
            <div class="cardBackground2 w-full h-full absolute top-0 left-0"></div>
            <h5 class="card-number">2</h5>
            <div class="absolute bottom-2 w-full px-4 flex flex-col h-32 justify-between text-xs">
              <p class="rounded-xl border border-black w-fit px-1 bottom-text-card">
                ENGINEERING
              </p>
              <div class="flex items-end justify-between">
                <div class="">
                  <p class="bottom-text-card">Chemical</p>
                  <p class="bottom-text-card">Synthetic Fibers</p>
                  <p class="bottom-text-card">Metal</p>
                </div>
                <div class="rounded-full h-fit w-fit p-1 arrow-bg">
                  <svg
                    class="fill-white arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row w-full md:w-1/2 relative">
          <div class="hover:cursor-pointer sm:w-1/2 h-full card relative flex items-center justify-center">
            <div class="cardBackground3 w-full h-full absolute top-0 left-0"></div>
            <h5 class="card-number">3</h5>
            <div class="absolute bottom-2 w-full px-4 flex flex-col h-32 justify-between text-xs">
              <p class="rounded-xl border border-black w-fit px-1 bottom-text-card">
                LAB PRODUCTION
              </p>
              <div class="flex items-end justify-between">
                <div class="">
                  <p class="bottom-text-card">Racks</p>
                  <p class="bottom-text-card">Exhibition Systems</p>
                </div>
                <div class="rounded-full h-fit w-fit p-1 arrow-bg">
                  <svg
                    class="fill-white arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="hover:cursor-pointer sm:w-1/2 h-full card relative flex items-center justify-center">
            <div class="cardBackground4 w-full h-full absolute top-0 left-0"></div>
            <h5 class="card-number">4</h5>
            <div class="absolute bottom-2 w-full px-4 flex flex-col h-32 justify-between text-xs">
              <p class="rounded-xl border border-black w-fit px-1 bottom-text-card">
                PROJECTS 3D
              </p>
              <div class="flex items-end justify-between">
                <div class="">
                  <p class="bottom-text-card">Analysis</p>
                  <p class="bottom-text-card">Prodcut Sketch</p>
                </div>
                <div class="rounded-full h-fit w-fit p-1 arrow-bg">
                  <svg
                    class="fill-white arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default facture;
