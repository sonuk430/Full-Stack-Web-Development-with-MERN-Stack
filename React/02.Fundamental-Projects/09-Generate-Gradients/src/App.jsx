import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");
  const [gradients, setGradients] = useState([]);

  const getHexColorCode = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.floor(Math.random() * rgb);
    const hexCode = random.toString(16);
    const colorHex = hexCode.padStart(6, "0");
    return `#${colorHex}`;
  };

  const generateGradient = () => {
    const colors = [];
    for (let i = 1; i <= num; i++) {
      const color1 = getHexColorCode();
      const color2 = getHexColorCode();
      const degree = Math.floor(Math.random() * 360);
      const degreeString = `${degree}deg`;
      if (type === "linear") {
        colors.push({
          gradient: `linear-gradient(${degreeString}, ${color1}, ${color2})`,
          css: `background : 'linear-gradient(${degreeString}, ${color1}, ${color2})'`,
        });
      } else {
        colors.push({
          gradient: `radial-gradient(circle, ${color1}, ${color2})`,
          css: `background : 'radial-gradient(circle, ${color1}, ${color2})'`,
        });
      }
    }
    setGradients(colors);
  };

  const handleCopyColor = (css) => {
    navigator.clipboard.writeText(css);
    toast.success("Css code Copy", { position: "top-center", autoClose: 500 });
  };

  useEffect(() => {
    generateGradient();
  }, [num, type]);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
              🎨 Gradient Generator
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="number"
                value={num}
                min="1"
                max="100"
                className="border border-gray-700 bg-gray-900 rounded-lg w-full sm:w-[150px] p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setNum(Number(e.target.value))}
              />

              <select
                value={type}
                className="border border-gray-700 bg-gray-900 rounded-lg w-full sm:w-[120px] p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
              </select>

              <button
                className="w-full sm:w-auto px-6 py-2 bg-orange-600 hover:bg-orange-500 transition rounded-lg font-medium"
                onClick={generateGradient}
              >
                Generate
              </button>
            </div>
          </div>

          {/* Gradient Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gradients.map((el, index) => (
              <div
                key={index}
                className="h-[180px] sm:h-[200px] rounded-xl relative overflow-hidden shadow-lg"
                style={{ background: el.gradient }}
              >
                <button
                  className="bg-black/60 hover:bg-black text-white rounded absolute bottom-3 right-3 text-xs py-1 px-3 transition"
                  onClick={() => handleCopyColor(el.css)}
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
