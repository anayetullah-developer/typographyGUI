import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { GrPowerReset, GrAdd } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaAngleDownSolid } from "react-icons/lia";

function App() {
  const fontFamilies = [
    "Arial",
    "Verdana",
    "Helvetica",
    "Georgia",
    "Times New Roman",
    "Courier New",
    "Lucida Console",
    "Trebuchet MS",
    "Palatino Linotype",
    "Tahoma",
    "Impact",
    "Arial Black",
    "Comic Sans MS",
    "Copperplate",
    "Brush Script MT",
    "Lucida Handwriting",
    "Geneva",
    "Candara",
    "Franklin Gothic Medium",
    "Garamond",
  ];

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const [typography, setTypography] = useState({
    fontFamily: "Arial, ",
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    textDecoration: "none",
    lineHeight: "1.5",
    letterSpacing: "0px",
    wordSpacing: "0px",
    textTransform: "none",
  });

  const updateTypography = (property, value) => {
    setTypography({ ...typography, [property]: value });
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center pt-5 pb-7 bg-gray-700 text-white">
        Typography GUI
      </h1>

      <div className="md:flex mt-4 md:mt-0">
        {/* ============ Left Sidebar Part ============= */}

        <div className="w-80 pt-5">
          <div className="w-80 flex justify-between rounded pl-5">
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

          {/* ================ Popover Starts Here =================  */}

          {isPopoverOpen && (
            <div className="w-80">
              <div className="px-5 mb-2 ml-10 p-4 mt-3 bg-white border border-gray-300 rounded-md shadow-[#b3b1b1] shadow-lg">
                {/* ================ Typography add and reset  =================  */}

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

                {/* ================ Font Family =================  */}

                <div className="flex justify-between gap-5 mt-3">
                  <label className="text-xs">Family</label>
                  <div className="relative inline-block w-28">
                    <select
                      value={typography.fontFamily}
                      onChange={(e) =>
                        updateTypography("fontFamily", e.target.value)
                      }
                      className="border rounded p-1 w-full appearance-none text-xs"
                    >
                      {fontFamilies.map((font, index) => (
                        <option key={index} value={font}>
                          {font}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>

                {/* ================ Font Size Unit =================  */}

                <div className="mt-3">
                  <div className="flex justify-between gap-5 mb-3">
                    <label className="text-sm">Size</label>
                    <div className="relative w-10 inline-block">
                      <select className="border rounded p-1 appearance-none text-[10px] w-10">
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

                  <div className="flex justify-between mb-3 gap-3">
                    <div className="w-full">
                      <input
                        type="range"
                        min="12"
                        max="100"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className="bg-[#D5D8DC] w-full appearance-none h-[5px] rounded-full hover:bg-[#D5D8DC]"
                      />
                    </div>
                    <div className="">
                      <input
                        type="number"
                        min="12"
                        max="72"
                        value={parseInt(typography.fontSize)}
                        onChange={(e) =>
                          updateTypography("fontSize", e.target.value + "px")
                        }
                        className="border w-12 text-xs rounded p-1"
                      />
                    </div>
                  </div>
                </div>

                {/* ================ Text Transform Unit =================  */}

                <div className="flex justify-between gap-5 mt-5">
                  <label className="text-xs">Transform</label>
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

                {/* ================ Font Weight Unit =================  */}

                <div className="flex justify-between gap-5 mt-5">
                  <label className="text-xs">Weight</label>
                  <div className="relative inline-block w-28">
                    <select
                      value={typography.fontWeight}
                      onChange={(e) =>
                        updateTypography("fontWeight", e.target.value)
                      }
                      className="border rounded p-1 w-full appearance-none text-xs"
                    >
                      <option value="100">100</option>
                      <option value="300">300</option>
                      <option value="400">400</option>
                      <option value="500">500</option>
                      <option value="700">700</option>
                      <option value="800">800</option>
                      <option value="900">900</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>

                {/* ================ Font style Unit =================  */}

                <div className="flex justify-between gap-5 mt-5">
                  <label className="text-xs">Style</label>
                  <div className="relative inline-block w-28">
                    <select
                      value={typography.fontStyle}
                      onChange={(e) =>
                        updateTypography("fontStyle", e.target.value)
                      }
                      className="border rounded p-1 w-full appearance-none text-xs"
                    >
                      <option value="normal">Normal</option>
                      <option value="italic">Italic</option>
                      <option value="oblique">Oblique</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>

                {/* ================ Text Decoration  Unit =================  */}

                <div className="flex justify-between gap-5 mt-5">
                  <label className="text-xs">Decoration</label>
                  <div className="relative inline-block w-28">
                    <select
                      value={typography.textDecoration}
                      onChange={(e) =>
                        updateTypography("textDecoration", e.target.value)
                      }
                      className="border rounded p-1 w-full appearance-none text-xs"
                    >
                      <option value="none">None</option>
                      <option value="underline">Underline</option>
                      <option value="overline">Overline</option>
                      <option value="line-through">Line Through</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>

                {/* ================ Line Height Unit =================  */}

                <div className="mt-3">
                  <div className="flex justify-between gap-5 mb-3">
                    <label className="text-sm">Line-height</label>
                    <div className="relative w-10 inline-block">
                      <select className="border rounded p-1 appearance-none text-[10px] w-10">
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

                  <div className="flex justify-between mb-3 gap-3">
                    <div className="w-full">
                      <input
                        type="range"
                        min="0.1"
                        max="10"
                        step="0.1"
                        value={parseFloat(typography.lineHeight)}
                        onChange={(e) =>
                          updateTypography("lineHeight", e.target.value)
                        }
                        className="bg-[#D5D8DC] w-full appearance-none h-[5px] rounded-full hover:bg-[#D5D8DC]"
                      />
                    </div>
                    <div className="">
                      <input
                        type="number"
                        min="0.1"
                        max="10"
                        step="0.1"
                        value={parseFloat(typography.lineHeight)}
                        onChange={(e) =>
                          updateTypography("lineHeight", e.target.value)
                        }
                        className="w-12 text-xs border rounded-md p-1"
                      />
                    </div>
                  </div>
                </div>

                {/* ================ Letter spacing Unit =================  */}

                <div className="mt-3">
                  <div className="flex justify-between gap-5 mb-3">
                    <label className="text-sm">Letter Spacing</label>
                    <div className="relative w-10 inline-block">
                      <select className="border rounded p-1 appearance-none text-[10px] w-10">
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

                  <div className="flex justify-between mb-3 gap-3">
                    <div className="w-full">
                      <input
                        type="range"
                        min="-5"
                        max="10"
                        step="0.1"
                        value={parseFloat(typography.letterSpacing)}
                        onChange={(e) =>
                          updateTypography(
                            "letterSpacing",
                            e.target.value + "px"
                          )
                        }
                        className="bg-[#D5D8DC] w-full appearance-none h-[5px] rounded-full hover:bg-[#D5D8DC]"
                      />
                    </div>
                    <div className="W-1/5">
                      <input
                        type="number"
                        min="-5"
                        max="10"
                        step="0.1"
                        value={parseFloat(typography.letterSpacing)}
                        onChange={(e) =>
                          updateTypography(
                            "letterSpacing",
                            e.target.value + "px"
                          )
                        }
                        className="w-12 text-xs border rounded-md p-1"
                      />
                    </div>
                  </div>
                </div>

                {/* ================ Word Spacing Unit =================  */}

                <div className="mt-3">
                  <div className="flex justify-between gap-5 mb-3">
                    <label className="text-sm">Word Spacing</label>
                    <div className="relative w-10 inline-block">
                      <select
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

                  <div className="flex justify-between mb-3 gap-3">
                    <div className="w-full">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={parseFloat(typography.wordSpacing)}
                        onChange={(e) =>
                          updateTypography("wordSpacing", e.target.value + "px")
                        }
                        className="bg-[#D5D8DC] w-full appearance-none h-[5px] rounded-full hover:bg-[#D5D8DC]"
                      />
                    </div>
                    <div className="W-1/5">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={parseFloat(typography.wordSpacing)}
                        onChange={(e) =>
                          updateTypography("wordSpacing", e.target.value + "px")
                        }
                        className="w-12 text-xs border rounded-md p-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Display part */}

        <div className="p-8">
          <p style={typography} className="mt-4">
            Whereas disregard and contempt for human rights have resulted
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
