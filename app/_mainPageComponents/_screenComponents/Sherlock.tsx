import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";

const Sherlock = () => {
  const [zIndex, setZIndex] = useState(0);

  const {
    state: { maxZIndex },
    setters: { setMaxZIndex },
  } = useLaptopInfo();

  const handleClick = () => {
    setZIndex(maxZIndex + 1);
    setMaxZIndex(maxZIndex + 1);
  };

  useEffect(() => {
    setZIndex(maxZIndex + 1);
    setMaxZIndex(maxZIndex + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="absolute right-[20%] top-[22%] h-[38rem] w-[54rem] animate-expandBox bg-green-500 text-6xl"
      style={{ zIndex: zIndex }}
      onClick={handleClick}
    >
      Sherlock
    </div>
  );
};

export default Sherlock;
