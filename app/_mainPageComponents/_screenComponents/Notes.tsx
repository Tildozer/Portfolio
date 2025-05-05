import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";

const Notes = () => {
  const [firstZIndex, setFirstZIndex] = useState(0);
  const [secondZIndex, setSecondZIndex] = useState(0);
  const [thirdZIndex, setThirdZIndex] = useState(0);
  const {
    state: { maxZIndex },
    setters: { setMaxZIndex },
  } = useLaptopInfo();

  const handleClick = (setCurrentZIndex: Dispatch<SetStateAction<number>>) => {
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
      <div
        className="absolute right-[7%] top-[5%] h-96 w-96 animate-expandBox bg-orange-300"
        style={{ zIndex: firstZIndex }}
        onClick={() => handleClick(setFirstZIndex)}
      >
        1
      </div>
      <div
        className="absolute right-[2%] top-[15%] h-96 w-96 animate-expandBox bg-orange-400"
        style={{ zIndex: secondZIndex }}
        onClick={() => handleClick(setSecondZIndex)}
      >
        2
      </div>
      <div
        className="absolute right-[15%] top-[25%] h-96 w-96 animate-expandBox bg-orange-500"
        style={{ zIndex: thirdZIndex }}
        onClick={() => handleClick(setThirdZIndex)}
      >
        3
      </div>
    </div>
  );
};

export default Notes;
