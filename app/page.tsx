// import { default as Experience } from "@/components/mainPageComponents/Experience";
import { Projects } from "@/components/projects";
import { Wave } from "@/components/waveBanner";

const Main = () => {
  return (
    <div className="bg-color h-[75vh] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 dark:text-yellow-500 md:h-[90vh]">
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
      <div className="flex animate-fadeInOnce flex-col">
        <div className="fade-bottom relative h-[20vh] w-full bg-slate-100 dark:bg-slate-900">
          <Wave />
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Main;
