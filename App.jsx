function App() {
  return (
    <div className="w-screen min-h-screen bg-[#1e1e1e] flex items-center justify-center pt-2 pb-6 px-8 lg:px-20 xl:px-32 overflow-x-hidden">

      <div className="w-full max-w-[1100px] h-[90vh] flex flex-col sm:flex-row gap-3">

        {/* ── LEFT SIDEBAR  32% ── */}
        <div className="flex items-center flex-col sm:w-[32%] w-full sm:h-full h-auto sm:overflow-hidden rounded-xl gap-2 bg-[#2b2b2b] pb-3 px-3 flex-shrink-0">
          <div className="w-[87%] flex flex-col justify-center items-center gap-2 border-b-2 border-[#3a3a3a]">
            <img src="/pic2.png" className="mt-5 w-22 h-22 rounded-full mb-2 object-cover" />
            <h1 className="font-bold text-[#e0e0e0] text-[clamp(20px,2vw,26px)] poppins">Shubham Bhagat</h1>
            <button className="w-[140px] h-[28px] bg-[#1e1e1e] rounded-lg mb-5">
              <p className="text-sm text-amber-300 poppins">Frontend Developer</p>
            </button>
          </div>

          <div className="bg-[#2b2b2b] w-[90%] flex flex-col gap-2 border-b-2 border-[#3a3a3a] py-3">
            <div className="flex flex-col">
              <p className="text-[clamp(12px,1vw,14px)] text-[#a0a0a0]">Email</p>
              <a href="mailto:shubh101bhagat@gmail.com" className="text-[clamp(13px,1.1vw,16px)] -mt-1 text-[#e0e0e0] break-all">shubh101bhagat@gmail.com</a>
            </div>
            <div className="flex flex-col">
              <p className="text-[clamp(12px,1vw,14px)] text-[#a0a0a0]">Phone</p>
              <a href="tel:7667781690" className="text-[clamp(13px,1vw,16px)] -mt-1 text-[#e0e0e0]">7667781690</a>
            </div>
            <div className="flex flex-col">
              <p className="text-[clamp(12px,1vw,14px)] text-[#a0a0a0]">Location</p>
              <p className="text-[clamp(13px,1vw,16px)] -mt-1 mb-2 text-[#e0e0e0]">Ranchi, Jharkhand</p>
            </div>
          </div>

          <div className="w-[90%] flex justify-center gap-3 mt-4">
            <a href="https://github.com/Shubhamxmax">
              <img src="https://simpleicons.org/icons/git.svg" className="h-6 w-6 rounded-full grayscale invert hover:grayscale-0 hover:invert-0 transition-[filter] duration-300 ease-in-out" />
            </a>
            <a href="">
              <img src="https://www.svgrepo.com/show/144030/linkedin-square-logo.svg" className="h-6 w-6 rounded-md grayscale invert hover:grayscale-0 hover:invert-0 transition-[filter] duration-300 ease-in-out" alt="" />
            </a>
          </div>
        </div>

        {/* ── RIGHT MAIN CONTENT  68% ── */}
        <div
          className="hide-scrollbar flex flex-col sm:w-[68%] w-full sm:h-full sm:overflow-y-auto rounded-xl bg-[#2b2b2b] pb-6 px-6 pt-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', gap: '0px' }}
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .nav-link { position: relative; padding-bottom: 2px; }
            .nav-link::after {
              content: '';
              position: absolute;
              bottom: 0; left: 0;
              width: 0%;
              height: 2px;
              background-color: #fcd34d;
              transition: width 0.3s ease;
            }
            .nav-link:hover::after { width: 100%; }
            .section-heading {
              display: flex;
              flex-direction: column;
              gap: 6px;
              margin-bottom: 12px;
            }
            .yellow-bar {
              display: block !important;
              width: 40px !important;
              height: 5px !important;
              background-color: #fcd34d !important;
              min-height: 5px !important;
              flex-shrink: 0 !important;
            }
          `}</style>

          {/* Navbar */}
          <div className="flex text-[13px] text-[#a0a0a0] justify-end w-full gap-5 mt-2 mb-4 border-b-2 border-[#3a3a3a] pb-3">
            <a href="#about" className="nav-link hover:text-amber-300 cursor-pointer transition-colors duration-200">About</a>
            <a href="#skill" className="nav-link hover:text-amber-300 cursor-pointer transition-colors duration-200">Skills</a>
            <a href="#education" className="nav-link hover:text-amber-300 cursor-pointer transition-colors duration-200">Education</a>
            <a className="nav-link hover:text-amber-300 cursor-pointer transition-colors duration-200">Portfolio</a>
          </div>

          {/* About Me */}
          <div className="section-heading">
            <p id="about" className="poppins text-[#e0e0e0] font-bold text-[clamp(22px,3vw,30px)]">About Me</p>
            <span className="yellow-bar"></span>
          </div>
          <div className="text-sm text-[#a0a0a0] w-full leading-6 mb-6">
            Lorem ipsum dolor sit amet cons adipisicing elit. Incidunt iure veritatis voluptatibus, ipsa obcaecati iste eligendi velit expedita dolo ill autem assumenda numquam nisi dolorum distinctio enim cumque at? Consequatur.
          </div>

          {/* Skills */}
          <div className="section-heading">
            <p id="skill" className="poppins text-[#e0e0e0] font-bold text-[clamp(22px,3vw,30px)]">Skills</p>
            <span className="yellow-bar"></span>
          </div>

          <div className="w-full flex flex-col gap-2 mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { src: "https://simpleicons.org/icons/html5.svg", label: "HTML" },
                { src: "https://simpleicons.org/icons/css.svg", label: "CSS" },
                { src: "https://simpleicons.org/icons/tailwindcss.svg", label: "Tailwind" },
                { src: "https://simpleicons.org/icons/javascript.svg", label: "JS" },
              ].map(({ src, label }) => (
                <div key={label} className="h-[110px] flex flex-col justify-center items-center bg-[#1e1e1e] rounded-md gap-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
                  <img src={src} className="w-[54px] h-[54px] mx-auto" style={{ filter: "brightness(0) saturate(100%) invert(87%) sepia(93%) saturate(3528%) hue-rotate(358deg) brightness(101%) contrast(103%)" }} />
                  <p className="text-[#a0a0a0] text-[13px]">{label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:w-[50%]">
              {[
                { src: "https://simpleicons.org/icons/git.svg", label: "Git" },
                { src: "https://simpleicons.org/icons/react.svg", label: "React" },
              ].map(({ src, label }) => (
                <div key={label} className="h-[110px] flex flex-col justify-center items-center bg-[#1e1e1e] rounded-md gap-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
                  <img src={src} className="w-[54px] h-[54px] mx-auto" style={{ filter: "brightness(0) saturate(100%) invert(87%) sepia(93%) saturate(3528%) hue-rotate(358deg) brightness(101%) contrast(103%)" }} />
                  <p className="text-[#a0a0a0] text-[13px]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="section-heading">
            <p id="education" className="poppins text-[#e0e0e0] font-bold text-[clamp(22px,3vw,30px)]">Education</p>
            <span className="yellow-bar"></span>
          </div>

          <section className="w-full mt-2 ml-2">
            <div className="w-[97%] flex flex-col relative">
              <p className="text-[clamp(12px,1vw,16px)] text-[#a0a0a0] leading-5 poppins">2023-2027</p>
              <h1 className="text-[#e0e0e0] font-bold">Bachelor of Technology in CSE</h1>
              <p className="text-[clamp(13px,1vw,16px)] text-[#a0a0a0] italic">JUET, Guna</p>
              <p className="mt-4 text-[clamp(14px,1.5vw,16px)] text-[#a0a0a0] w-full leading-5 mb-2 poppins">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, dignissimos!
              </p>
              <div className="z-10 absolute -left-4 top-1 h-[10px] w-[10px] border-3 border-amber-300 rounded-full"></div>

              <p className="mt-4 text-[clamp(13px,1vw,16px)] text-[#a0a0a0] leading-5 poppins">2014-2020</p>
              <h1 className="text-[#e0e0e0] font-bold">Higher Education</h1>
              <p className="text-[clamp(13px,1vw,16px)] text-[#a0a0a0] italic">Saint Thomas School, Jharkhand</p>
              <p className="mt-4 text-[clamp(14px,1.5vw,16px)] text-[#a0a0a0] w-full leading-5 mb-2 poppins">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, dignissimos!
              </p>
              <div className="z-10 absolute -left-4 top-37 h-[10px] w-[10px] border-3 border-amber-300 rounded-full"></div>
              <div className="z-0 absolute h-full w-[3px] bg-[#3a3a3a] -left-3 mt-1"></div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;