import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";

const Notes = () => {
  const [firstZIndex, setFirstZIndex] = useState(0);
  const [secondZIndex, setSecondZIndex] = useState(0);
  const [thirdZIndex, setThirdZIndex] = useState(0);

  const [firstNotes, setFirstNote] = useState("this is a note");
  const [secondNotes, setSecondNote] = useState(
    "- Tell them you do anything but play video games. No one wants to hear about your obsessions with Monster Hunter or Pokémon. \n - Tell them about you love camping and hiking, but don't go into details about your 75 mile backpacking trip. you had a week and a half to do it! big deal. \n - Tell them about you constant search for more knowledge for everything you! how you yearn for new information to use in every situation you encounter.",
  );
  const [thirdNotes, setThirdNote] = useState(
    `- If you loose a window do not call support, it can be moved! THEY ARE DRAGGABLE! \n\n - If a window is not responding, try to close it! DO NOT CALL SUPPPORT!`,
  );

  const {
    state: { maxZIndex },
    setters: { setMaxZIndex },
  } = useLaptopInfo();

  const handleMouseDown = (
    setCurrentZIndex: Dispatch<SetStateAction<number>>,
  ) => {
    setCurrentZIndex(maxZIndex + 1);
    setMaxZIndex(maxZIndex + 1);
  };

  useEffect(() => {
    setFirstZIndex(maxZIndex + 1);
    setSecondZIndex(maxZIndex + 1);
    setThirdZIndex(maxZIndex + 1);
    setMaxZIndex(maxZIndex + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-2xl">
      <Draggable
        scale={0.5}
        bounds={{ left: -925, top: -18, right: 99, bottom: 525 }}
        handle="h1"
        onMouseDown={() => handleMouseDown(setFirstZIndex)}
      >
        <div
          className="absolute right-[7%] top-[5%] h-96 w-96 animate-expandBox overflow-hidden bg-[#b2ffa1] text-black shadow-lg shadow-black hover:cursor-grab active:cursor-grabbing"
          style={{ zIndex: firstZIndex }}
        >
          <h1 className="text-4xl"></h1>
          <textarea
            className="h-[80%] w-[105%] resize-none overflow-y-scroll bg-transparent p-2 text-black outline-none"
            value={firstNotes}
            onChange={(e) => setFirstNote(e.target.value)}
          />
        </div>
      </Draggable>
      <Draggable
        scale={0.5}
        bounds={{ left: -995, top: -115, right: 28, bottom: 430 }}
        handle="h1"
        onMouseDown={() => handleMouseDown(setSecondZIndex)}
      >
        <div
          className="absolute right-[2%] top-[15%] h-96 w-96 animate-expandBox overflow-hidden bg-[#71ffff] text-black shadow-lg shadow-black hover:cursor-grab active:cursor-grabbing"
          style={{ zIndex: secondZIndex }}
        >
          <h1 className="text-4xl">
            What to tell people if they ask about you:
          </h1>
          <textarea
            className="h-[80%] w-[105%] resize-none overflow-y-scroll bg-transparent p-2 text-black outline-none"
            value={secondNotes}
            onChange={(e) => setSecondNote(e.target.value)}
          />
        </div>
      </Draggable>
      <Draggable
        scale={0.5}
        bounds={{ left: -812, top: -215, right: 212, bottom: 337 }}
        handle="h1"
        onMouseDown={() => handleMouseDown(setThirdZIndex)}
      >
        <div
          className="absolute right-[15%] top-[25%] h-96 w-96 animate-expandBox overflow-hidden bg-[#ffc7c7] text-black shadow-lg shadow-black hover:cursor-grab active:cursor-grabbing"
          style={{ zIndex: thirdZIndex }}
        >
          <h1 className="text-4xl">HOW TO USE A COMPUTER</h1>
          <textarea
            className="h-[80%] w-[105%] resize-none overflow-y-scroll bg-transparent p-2 text-black outline-none"
            value={thirdNotes}
            onChange={(e) => setThirdNote(e.target.value)}
          />
        </div>
      </Draggable>
    </div>
  );
};

export default Notes;
