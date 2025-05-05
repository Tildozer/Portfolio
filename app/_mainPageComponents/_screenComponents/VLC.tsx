import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";

const VLC = () => {
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
      className={`absolute left-[3%] top-[30%] h-[38rem] w-[48rem] animate-expandBox bg-yellow-200 text-6xl`}
      style={{ zIndex: zIndex }}
      onClick={handleClick}
    >
      VLC
    </div>
  );
};

export default VLC;
