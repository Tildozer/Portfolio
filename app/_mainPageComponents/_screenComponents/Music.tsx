import { useEffect, useState } from "react";
import { useLaptopInfo } from "../../_providers/LaptopInfoProvider";

const Music = () => {
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
      className="absolute left-[2%] top-[5%] h-[32rem] w-[40rem] animate-expandBox bg-black text-6xl"
      style={{ zIndex: zIndex }}
      onClick={handleClick}
    >
      Music
    </div>
  );
};

export default Music;
