import React from "react";
import { useLaptopInfo } from "@/app/_providers/LaptopInfoProvider";

const AboutFinder = () => {
  const { setters, maxZIndex } = useLaptopInfo();
  return <div>AboutFinder</div>;
};

export default AboutFinder;
