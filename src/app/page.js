import HeaderFiles from "./components/HeaderFile";
import SectionBox from "./components/SectionBox";
import Sparkleicon from "./components/Sparkleicon";
import Uploadfileicon from "./components/UploadFileicon";

export default function Home() {
  return (
    <>
     <HeaderFiles/>
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
