import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";

const Notes = () => {
  const [firstZIndex, setFirstZIndex] = useState(0);
  const [secondZIndex, setSecondZIndex] = useState(0);
  const [thirdZIndex, setThirdZIndex] = useState(0);

  const [firstNotes, setFirstNote] = useState("this is a note");
  const [secondNotes, setSecondNote] = useState("this is a second note");
  const [thirdNotes, setThirdNote] = useState(" this is a third note");

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
    <div className="text-3xl">
      <Draggable
        scale={0.4}
        bounds={{ left: -925, top: -18, right: 100, bottom: 525 }}
        handle="h1"
        onMouseDown={() => handleMouseDown(setFirstZIndex)}
      >
        <div
          className="absolute right-[7%] top-[5%] h-96 w-96 animate-expandBox bg-[#b2ffa1] text-black shadow-lg shadow-black hover:cursor-grab active:cursor-grabbing"
          style={{ zIndex: firstZIndex }}
        >
          <h1 className="text-balance text-center text-4xl">title 1</h1>
          <textarea
            className="h-[80%] w-full resize-none bg-transparent p-2 text-black outline-none"
            value={firstNotes}
            onChange={(e) =>
              e.target.value.length < 101 ? setFirstNote(e.target.value) : null
            }
          />
        </div>
      </Draggable>
      <Draggable
        scale={0.4}
        bounds={{ left: -995, top: -115, right: 30, bottom: 430 }}
        handle="h1"
        onMouseDown={() => handleMouseDown(setSecondZIndex)}
      >
        <div
          className="absolute right-[2%] top-[15%] h-96 w-96 animate-expandBox bg-[#71ffff] text-black shadow-lg shadow-black hover:cursor-grab active:cursor-grabbing"
          style={{ zIndex: secondZIndex }}
        >
          <h1 className="text-balance text-center text-4xl">title 2</h1>
          <textarea
            className="h-[80%] w-full resize-none bg-transparent p-2 text-black outline-none"
            value={secondNotes}
            onChange={(e) =>
              e.target.value.length < 101 ? setSecondNote(e.target.value) : null
            }
          />
        </div>
      </Draggable>
      <Draggable
        scale={0.4}
        bounds={{ left: -812, top: -215, right: 212, bottom: 337 }}
        handle="h1"
        onMouseDown={() => handleMouseDown(setThirdZIndex)}
      >
        <div
          className="absolute right-[15%] top-[25%] h-96 w-96 animate-expandBox bg-[#ffc7c7] text-black shadow-lg shadow-black hover:cursor-grab active:cursor-grabbing"
          style={{ zIndex: thirdZIndex }}
        >
          <h1 className="text-balance text-center text-4xl">
            All windows can be moved!
          </h1>
          <textarea
            className="h-[80%] w-full resize-none bg-transparent p-2 text-black outline-none"
            value={thirdNotes}
            onChange={(e) =>
              e.target.value.length < 101 ? setThirdNote(e.target.value) : null
            }
          />
        </div>
      </Draggable>
    </div>
  );
};

export default Notes;
