// import { default as Experience } from "@/components/mainPageComponents/Experience";
import { Projects } from "@/components/projects";
import { Wave } from "@/components/waveBanner";

const Main = () => {
  return (
    <div className="bg-color h-[90vh] w-full bg-slate-100 dark:bg-slate-900 dark:text-yellow-500">
      <div className="animate-fadeInOnce flex flex-col">
        <div className="fade-bottom relative h-[20vh] w-full bg-slate-100 dark:bg-slate-900">
          <Wave />
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Main;
