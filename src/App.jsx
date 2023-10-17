import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { GrPowerReset, GrAdd } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaAngleDownSolid } from "react-icons/lia";

function App() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  const [typography, setTypography] = useState({
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "normal",
    textTransform: "none",
    textDecoration: "none",
    lineHeight: "1.5",
    letterSpacing: "normal",
    wordSpacing: "normal",
  });

  const updateTypography = (property, value) => {
    setTypography({ ...typography, [property]: value });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center pt-5 pb-7 bg-gray-700 text-white">
        Typography GUI
      </h1>
      <div className="w-72 pt-5">
        <div className="flex justify-between px-5">
          <h3 className="text-sm">Typography</h3>
          <div className="flex">
            <div
              className="border rounded-sm p-1 text-lg"
              onClick={togglePopover}
            >
              <CiGlobe />
            </div>
            <div
              className="bg-[#D5D8DC] rounded-sm p-1  text-lg"
              onClick={togglePopover}
            >
              <BiSolidEditAlt />
            </div>
          </div>
        </div>
        {isPopoverOpen && (
          <div className="relative w-72">
            <div className="absolute right-5 top-3 mb-2 ml-2 p-4 bg-white border border-gray-300 rounded-md shadow-[#b3b1b1] shadow-lg">
              <div className="flex justify-between shadow-md shadow-gray-300 p-2">
                <h3 className="text-sm font-bold">Typography</h3>
                <div>
                  <div className="flex gap-2">
                    <div className="border rounded-sm text-sm p-1">
                      <GrPowerReset />
                    </div>
                    <div className="border rounded-sm text-sm p-1">
                      <GrAdd />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between gap-5 mt-3">
                  <label className="text-xs">Family</label>
                  <div className="relative inline-block w-28">
                    <select
                      value={typography.textTransform}
                      onChange={(e) =>
                        updateTypography("textTransform", e.target.value)
                      }
                      className="border rounded p-1 w-full appearance-none text-xs"
                    >
                      <option value="none">None</option>
                      <option value="uppercase">Uppercase</option>
                      <option value="lowercase">Lowercase</option>
                      <option value="capitalize">Capitalize</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between gap-5 mb-3">
                    <label className="text-sm">Size</label>
                    <div className="relative w-10 inline-block">
                      <select
                        value={typography.textTransform}
                        onChange={(e) =>
                          updateTypography("textTransform", e.target.value)
                        }
                        className="border rounded p-1 appearance-none text-[10px] w-10"
                      >
                        <option value="none">px</option>
                        <option value="uppercase">em</option>
                        <option value="lowercase">%</option>
                        <option value="capitalize">rem</option>
                        <option value="capitalize">vw</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-[10px]">
                        <LiaAngleDownSolid />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mb-3">
                    <div className="W-4/5">
                      <input
                        type="range"
                        min="12"
                        max="100"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className=""
                      />
                    </div>
                    <div className="W-1/5">
                      <input
                        type="number"
                        min="12"
                        max="72"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className="border w-10 text-xs rounded p-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between gap-5 mb-3">
                    <label className="text-sm">Size</label>
                    <div className="relative w-10 inline-block">
                      <select
                        value={typography.textTransform}
                        onChange={(e) =>
                          updateTypography("textTransform", e.target.value)
                        }
                        className="border rounded p-1 appearance-none text-[10px] w-10"
                      >
                        <option value="none">px</option>
                        <option value="uppercase">em</option>
                        <option value="lowercase">%</option>
                        <option value="capitalize">rem</option>
                        <option value="capitalize">vw</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-[10px]">
                        <LiaAngleDownSolid />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mb-3">
                    <div className="W-4/5">
                      <input
                        type="range"
                        min="12"
                        max="100"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className=""
                      />
                    </div>
                    <div className="W-1/5">
                      <input
                        type="number"
                        min="12"
                        max="72"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className="border w-10 text-xs rounded p-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between gap-5 mb-3">
                    <label className="text-sm">Size</label>
                    <div className="relative w-10 inline-block">
                      <select
                        value={typography.textTransform}
                        onChange={(e) =>
                          updateTypography("textTransform", e.target.value)
                        }
                        className="border rounded p-1 appearance-none text-[10px] w-10"
                      >
                        <option value="none">px</option>
                        <option value="uppercase">em</option>
                        <option value="lowercase">%</option>
                        <option value="capitalize">rem</option>
                        <option value="capitalize">vw</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-[10px]">
                        <LiaAngleDownSolid />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mb-3">
                    <div className="W-4/5">
                      <input
                        type="range"
                        min="12"
                        max="100"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className=""
                      />
                    </div>
                    <div className="W-1/5">
                      <input
                        type="number"
                        min="12"
                        max="72"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className="border w-10 text-xs rounded p-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between gap-5 mb-3">
                    <label className="text-sm">Size</label>
                    <div className="relative w-10 inline-block">
                      <select
                        value={typography.textTransform}
                        onChange={(e) =>
                          updateTypography("textTransform", e.target.value)
                        }
                        className="border rounded p-1 appearance-none text-[10px] w-10"
                      >
                        <option value="none">px</option>
                        <option value="uppercase">em</option>
                        <option value="lowercase">%</option>
                        <option value="capitalize">rem</option>
                        <option value="capitalize">vw</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-[10px]">
                        <LiaAngleDownSolid />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mb-3">
                    <div className="W-4/5">
                      <input
                        type="range"
                        min="12"
                        max="100"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className=""
                      />
                    </div>
                    <div className="W-1/5">
                      <input
                        type="number"
                        min="12"
                        max="72"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className="border w-10 text-xs rounded p-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-5 mt-5">
                  <label className="text-xs">Family</label>
                  <div className="relative inline-block w-28">
                    <select
                      value={typography.textTransform}
                      onChange={(e) =>
                        updateTypography("textTransform", e.target.value)
                      }
                      className="border rounded p-1 w-full appearance-none text-xs"
                    >
                      <option value="none">None</option>
                      <option value="uppercase">Uppercase</option>
                      <option value="lowercase">Lowercase</option>
                      <option value="capitalize">Capitalize</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-5 mt-5">
                  <label className="text-xs">Family</label>
                  <div className="relative inline-block w-28">
                    <select
                      value={typography.textTransform}
                      onChange={(e) =>
                        updateTypography("textTransform", e.target.value)
                      }
                      className="border rounded p-1 w-full appearance-none text-xs"
                    >
                      <option value="none">None</option>
                      <option value="uppercase">Uppercase</option>
                      <option value="lowercase">Lowercase</option>
                      <option value="capitalize">Capitalize</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-5 mt-5">
                  <label className="text-xs">Family</label>
                  <div className="relative inline-block w-28">
                    <select
                      value={typography.textTransform}
                      onChange={(e) =>
                        updateTypography("textTransform", e.target.value)
                      }
                      className="border rounded p-1 w-full appearance-none text-xs"
                    >
                      <option value="none">None</option>
                      <option value="uppercase">Uppercase</option>
                      <option value="lowercase">Lowercase</option>
                      <option value="capitalize">Capitalize</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
              </div>
              <p style={typography} className="mt-8">
                Whereas disregard and contempt for human rights have resulted
              </p>
              <div className="text-sm mt-4">
                <label>Font Family: </label>
                <input
                  type="text"
                  value={typography.fontFamily}
                  onChange={(e) =>
                    updateTypography("fontFamily", e.target.value)
                  }
                />
              </div>
              <div className="text-sm mt-2">
                <label>Font Size: </label>
                <input
                  type="text"
                  value={typography.fontSize}
                  onChange={(e) => updateTypography("fontSize", e.target.value)}
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
