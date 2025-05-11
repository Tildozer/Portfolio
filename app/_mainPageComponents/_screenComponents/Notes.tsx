import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";

const Notes = () => {
  const [firstZIndex, setFirstZIndex] = useState(0);
  const [secondZIndex, setSecondZIndex] = useState(0);
  const [thirdZIndex, setThirdZIndex] = useState(0);

  const [firstNotes, setFirstNote] = useState(
    "This page is not complete yet. everything so far is functioning but more it to come in the near future.",
  );
  const [secondNotes, setSecondNote] = useState(
    "- Share hobbies or interests that showcase your versatility. Maybe skip the part where you’ve spent 500 hours hunting monsters or catching pokémon, keep it light and relatable.  \n\n- Highlight your love for outdoor activities such as camping and hiking. However, there's no need to dive into the specifics of your 75-mile backpacking adventure let the intrigue speak for itself.  \n\n- Emphasize your dedication to lifelong learning and your commitment to approaching every challenge with a mindset of growth and excellence.",
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
        scale={0.8}
        bounds={{ left: -925, top: -18, right: 99, bottom: 525 }}
        handle="h1"
        onMouseDown={() => handleMouseDown(setFirstZIndex)}
      >
        <div
          className="absolute right-[7%] top-[5%] h-96 w-96 animate-expandBox overflow-hidden bg-[#b2ffa1] text-black shadow-lg shadow-black hover:cursor-grab active:cursor-grabbing"
          style={{ zIndex: firstZIndex }}
        >
          <h1 className="text-4xl">WORK IN PROGRESS</h1>
          <textarea
            className="h-[80%] w-full resize-none overflow-y-scroll bg-transparent p-2 text-black outline-none"
            value={firstNotes}
            onChange={(e) => setFirstNote(e.target.value)}
          />
        </div>
      </Draggable>
      <Draggable
        scale={0.8}
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
            className="h-[80%] w-full resize-none overflow-y-scroll bg-transparent p-2 text-black outline-none"
            value={secondNotes}
            onChange={(e) => setSecondNote(e.target.value)}
          />
        </div>
      </Draggable>
      <Draggable
        scale={0.8}
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
            className="h-[80%] w-full resize-none overflow-y-scroll bg-transparent p-2 text-black outline-none"
            value={thirdNotes}
            onChange={(e) => setThirdNote(e.target.value)}
          />
        </div>
      </Draggable>
    </div>
  );
};

export default Notes;
