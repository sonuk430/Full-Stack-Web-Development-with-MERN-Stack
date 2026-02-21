import "remixicon/fonts/remixicon.css";
import "animate.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

const data = [
  {
    label: "Illustration",
    value: "illustration",
    url: "https://api.dicebear.com/9.x/avataars/svg?seed=",
  },
  {
    label: "Cartoon",
    value: "cartoon",
    url: "https://api.dicebear.com/9.x/adventurer/svg?seed=",
  },
  {
    label: "Sketchy",
    value: "sketchy",
    url: "https://api.dicebear.com/9.x/croodles/svg?seed=",
  },
  {
    label: "Robots",
    value: "robots",
    url: "https://api.dicebear.com/9.x/bottts/svg?seed=",
  },
  {
    label: "Art",
    value: "art",
    url: "https://api.dicebear.com/9.x/pixel-art/svg?seed=",
  },
  {
    label: "Male",
    value: "male",
    url: "https://randomuser.me/api/portraits/men",
  },
  {
    label: "Female",
    value: "female",
    url: "https://randomuser.me/api/portraits/women",
  },
];

const App = () => {
  const [src, setSrc] = useState(null);
  const [option, setOption] = useState("male");

  const generateNum = () => {
    return Math.floor(Math.random() * 100);
  };

  const handleUrlChange = () => {
    generate();
  };

  const handleCopyUrl = (imgUrl) => {
    navigator.clipboard.writeText(imgUrl);
    toast.success("Copy Img Url", { position: "top-center", autoClose: 1000 });
  };

  const handleDownload = (imgUrl) => {
    const aTag = document.createElement("a");
    aTag.href = imgUrl;
    aTag.download = `${Date.now()}.jpg`;
    aTag.click();
    aTag.remove();
  };

  const generate = () => {
    const getImageApi = data.find((item) => item.value === option);
    const uniqueValue = Date.now();
    const apiUrl = getImageApi.url;
    if (option === "male" || option === "female") {
      const makeJpg = `${apiUrl}/${generateNum()}.jpg`;
      setSrc(makeJpg);
    } else {
      const imgUrl = `${apiUrl}${uniqueValue}`;
      setSrc(imgUrl);
    }
  };

  useEffect(() => {
    generate();
    generateNum();
  }, [option]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white">
      <div
        className="animate__animated animate__bounce  flex flex-col gap-6 items-center
       w-full max-w-md  rounded-2xl shadow-xl backdrop-blur-xl border-slate-700 p-10"
      >
        <img
          src={src || "/avatar.jpg"}
          alt="avatar"
          target="_blank"
          className="w-32 h-32 rounded-full border-slate-700 shadow-lg object-cover"
        />
        <div className="text-center">
          <h1 className="tex-3xl font-bold tracking-wide">Avatar Generator</h1>
          <p className="text-slate-300">
            Generate unlimited avatar for your website
          </p>
        </div>
        <div className="w-full space-y-6">
          <select
            className="bg-slate-900/60 w-full p-3 rounded-xl"
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
          >
            {data.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <div className="bg-slate-900/60 w-full p-3 rounded-xl">{src}</div>
          <div className="flex gap-3">
            <button
              onClick={handleUrlChange}
              className="flex-1 bg-gradient-to-br from-rose-500 to-orange-600 font-medium rounded-lg py-2 hover:scale-105 transition-transform "
            >
              <i className="ri-arrow-right-up-line mr-1"></i>
              Change
            </button>
            <button
              onClick={() => handleDownload(src)}
              className="flex-1 bg-gradient-to-br from-green-500 to-cyan-600 font-medium rounded-lg py-2 hover:scale-105 transition-transform "
            >
              <i className="ri-download-line mr-1"></i>
              Download
            </button>
            <button
              onClick={() => handleCopyUrl(src)}
              className="flex-1 bg-gradient-to-br from-orange-500 to-amber-600 font-medium rounded-lg py-2 hover:scale-105 transition-transform "
            >
              <i className="ri-file-copy-line mr-1"></i>
              Copy
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;

// https://api.dicebear.com/9.x/adventurer/svg?seed=156
