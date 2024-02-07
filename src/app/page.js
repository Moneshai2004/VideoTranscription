export default function Home() {
  return (
    <>
      <main className="p-4 max-auto">
        <header className="flex justify-between mb-4 mt-10 text-white text-xl font-semibold">
          <a href="" className="flex gap-2 ">
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
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
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
        <div className="flex justify-evenly mt-10">
         <div className="bg-gray-800/80 w-[240px] h-[480px] rounded-md"></div>
         <div className="bg-gray-800/80 w-[240px] h-[480px] rounded-md"></div>
        </div>
      </main>
    </>
  );
}
