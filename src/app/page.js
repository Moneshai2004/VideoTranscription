import Sparkleicon from "./components/Sparkleicon";


export default function Home() {
  return (
    <>
      <main className="p-4 max-auto">
        <header className="flex justify-between mb-4 mt-10 text-white text-xl font-semibold">
          <a href="" className="flex gap-2 ">
            <Sparkleicon/>
            Caption Generator
          </a>
          <nav className="flex space-x-4 justify-items-end
          
          ">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Choose Files
          </button>
        </div>
        <div className="flex justify-evenly mt-10 items-center">
         <div className="bg-gray-800/80 w-[240px] h-[480px] rounded-md"></div>
         <div><Sparkleicon/></div>
         <div className="bg-gray-800/80 w-[240px] h-[480px] rounded-md"></div>
        </div>
      </main>
    </>
  );
}
