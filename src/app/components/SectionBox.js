import Sparkleicon from "./Sparkleicon";

export default function SectionBox(){
    return(
         <section className="flex justify-evenly mt-10 items-center">
        <div className="bg-gray-800/80 w-[240px] h-[480px] rounded-md"></div>
        <div>
          <Sparkleicon/>
        </div>
        <div className="bg-gray-800/80 w-[240px] h-[480px] rounded-md"></div>
      </section>
    );
}