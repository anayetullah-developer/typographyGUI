import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";

function App() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  const [typography, setTypography] = useState({
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      fontWeight: 'normal',
      textTransform: 'none',
      textDecoration: 'none',
      lineHeight: '1.5',
      letterSpacing: 'normal',
      wordSpacing: 'normal',
    });

    const updateTypography = (property, value) => {
      setTypography({ ...typography, [property]: value });
    };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center pt-5 pb-7 bg-gray-700 text-white">Typography GUI</h1>
        <div className="w-72 border">
      <div className="flex justify-between">
        <h3>Typography</h3>
        <div
        className=""
        onClick={togglePopover}
      >
        <BiSolidEditAlt/>
      </div>
      </div>
      {isPopoverOpen && (
        <div className="relative w-72">
          <div className="absolute right-0 top-0 mb-2 ml-2 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
        <p
          style={typography}
        >
          Whereas disregard and contempt for human rights have resulted
        </p>
        <div className="text-sm mt-4">
          <label>Font Family: </label>
          <input
            type="text"
            value={typography.fontFamily}
            onChange={(e) => updateTypography('fontFamily', e.target.value)}
          />
        </div>
        <div className="text-sm mt-2">
          <label>Font Size: </label>
          <input
            type="text"
            value={typography.fontSize}
            onChange={(e) => updateTypography('fontSize', e.target.value)}
          />
        </div>
        {/* Add similar inputs for other typography options */}
        <button
          className="bg-blue-500 text-white rounded p-2 mt-2"
          onClick={togglePopover}
        >
          Close
        </button>
      </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
