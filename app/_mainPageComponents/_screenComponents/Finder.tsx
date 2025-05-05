import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";

const Finder = () => {
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
      className="absolute left-[10%] top-[10%] h-[40rem] w-[54rem] animate-expandBox bg-red-500 text-6xl"
      style={{ zIndex: zIndex }}
      onClick={handleClick}
    >
      Finder
    </div>
  );
};

export default Finder;
