import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";
import Draggable from "react-draggable";

const Notes = () => {
  const [firstZIndex, setFirstZIndex] = useState(0);
  const [secondZIndex, setSecondZIndex] = useState(0);
  const [thirdZIndex, setThirdZIndex] = useState(0);
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
    <div>
      <Draggable
        scale={0.4}
        bounds={{ left: -925, top: -18, right: 100, bottom: 525 }}
        onMouseDown={() => handleMouseDown(setFirstZIndex)}
      >
        <div
          className="absolute right-[7%] top-[5%] h-96 w-96 animate-expandBox bg-orange-300 hover:cursor-grab"
          style={{ zIndex: firstZIndex }}
        >
          1
        </div>
      </Draggable>
      <Draggable
        scale={0.4}
        bounds={{ left: -995, top: -115, right: 30, bottom: 430 }}
        onMouseDown={() => handleMouseDown(setSecondZIndex)}
      >
        <div
          className="absolute right-[2%] top-[15%] h-96 w-96 animate-expandBox bg-orange-400 hover:cursor-grab"
          style={{ zIndex: secondZIndex }}
        >
          2
        </div>
      </Draggable>
      <Draggable
        scale={0.4}
        bounds={{ left: -812, top: -215, right: 212, bottom: 337 }}
        onMouseDown={() => handleMouseDown(setThirdZIndex)}
      >
        <div
          className="absolute right-[15%] top-[25%] h-96 w-96 animate-expandBox bg-orange-500 hover:cursor-grab"
          style={{ zIndex: thirdZIndex }}
          onMouseDown={() => handleMouseDown(setThirdZIndex)}
        >
          3
        </div>
      </Draggable>
    </div>
  );
};

export default Notes;
