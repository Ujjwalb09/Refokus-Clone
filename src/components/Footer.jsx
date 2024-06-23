import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2 flex flex-col">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
          <div className="mt-10">
            {["Privacy Policy", "Cookie Policy", "Impression", "Terms"].map(
              (item, index) => (
                <a key={index} className="text-sm mr-9 text-zinc-500">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 capitalize">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Sitemap</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-300 capitalize">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right ">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className="w-32 mt-10"
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
