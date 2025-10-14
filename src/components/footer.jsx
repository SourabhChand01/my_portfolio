import { useState } from "react";

export default function Footer() {
  const [creditOpen, setCreditOpen] = useState(false);
  const handlecredit = () => {
    setCreditOpen(true);
    setTimeout(() => {
        setCreditOpen(false);
    }, 10000);
  };

  const credits = [
    {
      object: "Meteor 3D Model",
      Title: "Meteor",
      Author: "Maxim Mavrichev",
      href: "https://skfb.ly/6Zx8T",
      License: "CC-BY-4.0",
      licenseHref: "http://creativecommons.org/licenses/by/4.0/",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <footer className="flex flex-col items-center justify-around w-full py-16 text-sm text-gray-300">
        <div className="flex items-center gap-8">
          <a href="#home" className="font-medium hover:text-white transition-all">Home</a>
          <a href="#about" className="font-medium hover:text-white transition-all">About</a>
          <a href="#contact" className="font-medium hover:text-white transition-all">Contact</a>
        </div>

        <p className="w-full flex justify-center text-2xl mt-4 py-0">
          <a className="text-white" href="#home">Sourabh</a>
        </p>

        <div
          onClick={handlecredit}
          className="text-white capitalize cursor-pointer mt-4 hover:text-indigo-400 transition-all"
        >
          Credits
        </div>

        {creditOpen && (
          <div className="flex flex-col items-center justify-center mt-4 gap-3">
            {credits.map((item, index) => (
              <ul
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 w-80 text-left shadow-lg transition-all hover:shadow-xl"
              >
                <li>
                  <span className="font-semibold">Object:</span>{" "}
                  <span className="text-indigo-300">{item.object}</span>
                </li>
                <li>
                  <span className="font-semibold">Title:</span>{" "}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-200 underline"
                  >
                    {item.Title}
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Author:</span>{" "}
                  <span className="text-indigo-300">{item.Author}</span>
                </li>
                <li>
                  <span className="font-semibold">License:</span>{" "}
                  <a
                    href={item.licenseHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-200 underline"
                  >
                    {item.License}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        )}
      </footer>
    </>
  );
}
