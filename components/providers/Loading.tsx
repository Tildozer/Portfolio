import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="text-accent2 fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen items-center justify-center bg-black">
      <div className="flex items-center space-x-2 text-2xl text-yellow-500 sm:text-6xl">
        <span className="mr-10 font-bold">Loading</span>
        <FaSpinner className="animate-slowSpin" />
      </div>
    </div>
  );
};

export default Loading;
