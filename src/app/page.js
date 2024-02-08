import SectionBox from "./components/SectionBox";
import Sparkleicon from "./components/Sparkleicon";
import Uploadfileicon from "./components/UploadFileicon";

export default function Home() {
  return (
    <>
      <header className="flex justify-between mb-4 mt-10 text-white text-xl font-semibold">
        <a href="" className="flex gap-2 ">
          <Sparkleicon />
          Caption Generator
        </a>
        <nav className="flex space-x-4 justify-items-end">
          <a href="">Home</a>
          <a href="">pricing</a>
          <a href="">contact</a>
        </nav>
      </header>
      <div className="text-center mt-24">
        <h1 className="text-4xl">Add Caption to your videos</h1>
        <h2>Just upload your videos and we will do rest</h2>
      </div>
      <div className="flex justify-center mt-10">
        <button className="flex gap-2 rounded-full px-4 py-2 bg-orange-500 text-white ">
          <Uploadfileicon/>
          Choose Files
        </button>
      </div>
     <SectionBox/>
    </>
  );
}
