// react
import { useEffect, useRef } from "react";
// particles
import Particles from "react-tsparticles";
// react icons
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { getTimeRemaining } from "../src/helpers";

function Home() {
  const launchDate = new Date(2022, 1, 25);
  const initialDate = getTimeRemaining(launchDate);

  const daysRef = useRef();
  const hoursRef = useRef();
  const minutesRef = useRef();
  const secondsRef = useRef();

  useEffect(() => {
    const timeinterval = setInterval(() => {
      const { total, days, hours, minutes, seconds } =
        getTimeRemaining(launchDate);

      daysRef.current.innerText = days;
      hoursRef.current.innerText = hours;
      minutesRef.current.innerText = minutes;
      secondsRef.current.innerText = seconds;

      if (total <= 0) {
        clearInterval(timeinterval);
      }

      return () => clearInterval(timeinterval);
    }, 1000);
  });

  return (
    <main className="outline-none" tabIndex={-1}>
      <div lang="en" className="font-sans">
        <section
          className="min-h-screen relative overflow-hidden flex justify-between items-center flex-col"
          style={{
            background: "rgb(3, 16, 59)",
            "-webkit-box-pack": "justify",
            "-webkit-box-align": "center",
          }}
        >
          {/* Crypthority Logo */}
          <div className="pt-10 text-center z-50">
            <a href="#">
              <h4 className="text-slate-200 font-semibold text-xl md:text-2xl">
                Crypthority
              </h4>
            </a>
          </div>
          {/* Particles */}
          <div className="absolute w-full">
            {/* Particles */}
            <Particles
              id="tsparticles"
              params={{
                fpsLimit: 60,
                background: {
                  color: "#0b032d",
                },
                backgroundMode: {
                  enable: true,
                },
                particles: {
                  color: {
                    value: ["#f67e7d", "#843b62", "#621940"],
                  },
                  links: {
                    color: "#ffb997",
                    enable: true,
                  },
                  move: {
                    enable: true,
                    speed: 2,
                  },
                  size: {
                    value: 5,
                    random: {
                      enable: true,
                      minimumValue: 1,
                    },
                    animation: {
                      enable: true,
                      speed: 2.5,
                      minimumValue: 1,
                    },
                  },
                  opacity: {
                    value: 0.8,
                    random: {
                      enable: true,
                      minimumValue: 0.4,
                    },
                  },
                },
              }}
            />
          </div>
          {/* Glow Area */}
          <section
            className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-[50%] opacity-[0.16] -left-[100px] -top-[100px]"
            style={{
              background:
                "radial-gradient(circle closest-side, rgb(109, 140, 243), rgb(3, 16, 59))",
            }}
          />
          {/* Coming soon timer with desription */}
          <div className="max-w-7xl mx-auto w-[85%] md:max-w-full md:w-[600px] lg:w-[80%]">
            <div
              className="flex flex-col justify-center items-center relative z-[99] py-12 md:py-16"
              style={{
                "-webkit-box-pack": "center",
                "-webkit-box-align": "center",
              }}
            >
              <span
                className="border-solid border rounded-3xl shadow py-2 md:py-3 px-4 mb-3 text-[10px] md:text-sm text-slate-100 text-center"
                style={{
                  borderColor: "rgb(22, 27, 88)",
                  background: "rgb(22, 27, 88)",
                }}
              >
                <span>Our website is under construction</span>
              </span>
              <h2 className="text-2xl md:text-4xl  lg:text-5xl leading-[1.25] text-slate-100 text-center max-w-550px font-light tracking-[-0.25px] mb-5">
                <span>We are coming soon</span>
              </h2>
              <p
                className="text-base md:leading-[1.8] text-center max-w-[420]"
                style={{ color: "rgba(142, 199, 255, 0.6)" }}
              >
                <span>
                  Follow us via social media to get updated when we are live
                </span>
                <br />
                <span>
                  Or enter you email below so we alert you when we are live
                </span>
              </p>
              {/* timer area */}
              <div className="realtive mt-5 mb-[70px]">
                <div className="flex justify-between items-center w-full md:w-[500px]">
                  {/* days left */}
                  <div
                    className="block relative w-[60px] h-[60px] md:w-[80px] md:h-[70px] lg:w-[140px] lg:h-[100px] rounded-[3px] z-[100]"
                    style={{
                      background: "rgb(16, 28, 69)",
                      perspectiveOrigin: "50% 50%",
                      perspective: "300px",
                    }}
                  >
                    {/* days */}
                    <div
                      className="relative flex justify-center items-center rounded-t-[3px] w-full h-full overflow-hidden"
                      style={{ "-webkit-box-align": "center" }}
                    >
                      <span
                        ref={daysRef}
                        className="text-[30px] md:text-[36px] lg:text-[55px] font-light -tracking-tight leading-[0.8] text-white"
                      >
                        {initialDate.days}
                      </span>
                    </div>
                    {/* label */}
                    <div
                      className="text-[10px] md:text-sm text-center font-medium tracking-[2px] mt-3 uppercase"
                      style={{ color: "rgba(142, 199, 255, 0.5)" }}
                    >
                      <label>
                        <span>days</span>
                      </label>
                    </div>
                  </div>
                  {/* seperator */}
                  <span
                    className="flex justify-center items-center mx-1 md:mx-3 lg:mx-4 text-[40px] text-white"
                    style={{ "-webkit-box-pack": "center" }}
                  >
                    :
                  </span>
                  {/* hours left */}
                  <div
                    className="block relative w-[60px] h-[60px] md:w-[80px] md:h-[70px] lg:w-[140px] lg:h-[100px] rounded-[3px] z-[100]"
                    style={{
                      background: "rgb(16, 28, 69)",
                      perspectiveOrigin: "50% 50%",
                      perspective: "300px",
                    }}
                  >
                    {/* hours */}
                    <div
                      className="relative flex justify-center items-center rounded-t-[3px] w-full h-full overflow-hidden"
                      style={{ "-webkit-box-align": "center" }}
                    >
                      <span
                        ref={hoursRef}
                        className="text-[30px] md:text-[36px] lg:text-[55px] font-light -tracking-tight leading-[0.8] text-white"
                      >
                        {initialDate.hours}
                      </span>
                    </div>
                    {/* label */}
                    <div
                      className="text-[10px] md:text-sm text-center font-medium tracking-[2px] mt-3 uppercase"
                      style={{ color: "rgba(142, 199, 255, 0.5)" }}
                    >
                      <label>
                        <span>hours</span>
                      </label>
                    </div>
                  </div>
                  {/* seperator */}
                  <span
                    className="flex justify-center items-center mx-1 md:mx-3 lg:mx-4 text-[40px] text-white"
                    style={{ "-webkit-box-pack": "center" }}
                  >
                    :
                  </span>
                  {/* minutes left */}
                  <div
                    className="block relative w-[60px] h-[60px] md:w-[80px] md:h-[70px] lg:w-[140px] lg:h-[100px] rounded-[3px] z-[100]"
                    style={{
                      background: "rgb(16, 28, 69)",
                      perspectiveOrigin: "50% 50%",
                      perspective: "300px",
                    }}
                  >
                    {/* minutes */}
                    <div
                      className="relative flex justify-center items-center rounded-t-[3px] w-full h-full overflow-hidden"
                      style={{ "-webkit-box-align": "center" }}
                    >
                      <span
                        ref={minutesRef}
                        className="text-[30px] md:text-[36px] lg:text-[55px] font-light -tracking-tight leading-[0.8] text-white"
                      >
                        {initialDate.minutes}
                      </span>
                    </div>
                    {/* label */}
                    <div
                      className="text-[10px] md:text-sm text-center font-medium tracking-[2px] mt-3 uppercase"
                      style={{ color: "rgba(142, 199, 255, 0.5)" }}
                    >
                      <label>
                        <span>minutes</span>
                      </label>
                    </div>
                  </div>
                  {/* seperator */}
                  <span
                    className="flex justify-center items-center mx-1 md:mx-3 lg:mx-4 text-[40px] text-white"
                    style={{ "-webkit-box-pack": "center" }}
                  >
                    :
                  </span>
                  {/* seconds left */}
                  <div
                    className="block relative w-[60px] h-[60px] md:w-[80px] md:h-[70px] lg:w-[140px] lg:h-[100px] rounded-[3px] z-[100]"
                    style={{
                      background: "rgb(16, 28, 69)",
                      perspectiveOrigin: "50% 50%",
                      perspective: "300px",
                    }}
                  >
                    {/* seconds */}
                    <div
                      className="relative flex justify-center items-center rounded-t-[3px] w-full h-full overflow-hidden"
                      style={{ "-webkit-box-align": "center" }}
                    >
                      <span
                        ref={secondsRef}
                        className="text-[30px] md:text-[36px] lg:text-[55px] font-light -tracking-tight leading-[0.8] text-white"
                      >
                        {initialDate.seconds}
                      </span>
                    </div>
                    {/* label */}
                    <div
                      className="text-[10px] md:text-sm text-center font-medium tracking-[2px] mt-3 uppercase"
                      style={{ color: "rgba(142, 199, 255, 0.5)" }}
                    >
                      <label>
                        <span>seconds</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* notify me area */}
              <form className="relative w-full md:w-auto flex flex-col md:flex-row mt-8 z-[2] mb-0">
                <div className="relative w-full md:w-[316px] mx-5">
                  <div className="block w-full">
                    <div className="relative w-full bg-transparent">
                      <div className="relative w-full overflow-hidden">
                        <input
                          type="email"
                          className="appearance-none block bg-transparent border-b text-sm md:text-base outline-0 p-0 mt-0 w-full h-12 overflow-visible"
                          placeholder="Enter email address"
                          style={{
                            color: "rgb(142, 199, 255)",
                            borderBottomColor: "rgba(255, 255, 255, 0.2)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer inline-flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-sky-400 min-h-[32px] min-w-[32px] md:min-h-[48px] md:min-w-[48px] rounded-md text-base font-medium px-5 py-2 md:px-9 md:py-3 uppercase">
                  <span>
                    <span>Alert Me</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
          {/* Footer And Social Links */}
          <div className="relative pb-10">
            {/* social links */}
            <div className="relative flex flex-wrap justify-center items-center">
              {/* link */}
              <div className="flex justify-center items-center bg-[#eff5f9]/10 rounded-full w-9 h-9 md:w-12 md:h-12 mx-3 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#eff5f9]/25">
                <a
                  href="https://youtube.com/channel/UC5jj5OKlN2pObnCSgk42rVw"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white text-base transition-all ease-in-out duration-500"
                >
                  <FaYoutube className="fill-current inline-block w-5 h-5 md:w-6 md:h-6 stroke-current" />
                </a>
              </div>
              {/* link */}
              <div className="flex justify-center items-center bg-[#eff5f9]/10 rounded-full w-9 h-9 md:w-12 md:h-12 mx-3 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#eff5f9]/25">
                <a
                  href="https://twitter.com/Cryp_thority/status/1452781144425082889?t=oqgBjoS5LW9ab4ZI3roSFQ&s=19"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white text-base transition-all ease-in-out duration-500"
                >
                  <FaTwitter className="fill-current inline-block w-5 h-5 md:w-6 md:h-6 stroke-current" />
                </a>
              </div>
              {/* link */}
              <div className="flex justify-center items-center bg-[#eff5f9]/10 rounded-full w-9 h-9 md:w-12 md:h-12 mx-3 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#eff5f9]/25">
                <a
                  href="https://vm.tiktok.com/ZM8fXQJCY/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white text-base transition-all ease-in-out duration-500"
                >
                  <FaTiktok className="fill-current inline-block w-5 h-5 md:w-6 md:h-6 stroke-current" />
                </a>
              </div>
              {/* link */}
              <div className="flex justify-center items-center bg-[#eff5f9]/10 rounded-full w-9 h-9 md:w-12 md:h-12 mx-3 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#eff5f9]/25">
                <a
                  href="https://www.instagram.com/reel/CVeGg_2InrD/?utm_medium=copy_link"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white text-base transition-all ease-in-out duration-500"
                >
                  <FaInstagram className="fill-current inline-block w-5 h-5 md:w-6 md:h-6 stroke-current" />
                </a>
              </div>
            </div>
            {/* copyright */}
            <p
              className="mt-6 leading-[1.5] text-center mb-0"
              style={{ color: "rgba(142, 199, 255, 0.6)" }}
            >
              <span>
                Copyright {new Date().getFullYear()} by <b>Crypthority</b>. All
                rights reserved
              </span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
