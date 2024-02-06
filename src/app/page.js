
export default function Home() {
  return (
    <>
    <main className="p-4">
       <header className="flex justify-between mb-4">
        <a href="">Caption Generator</a>
        <nav className="flex space-x-4">
          <a href="">Home</a>
          <a href="">pricing</a>
          <a href="">contact</a>
        </nav>
      </header>
      <div>
        <h1>Add Caption to your videos</h1>
        <h2>Just upload your videos and we will do rest</h2>
      </div>
      <div>
        <button>Choose Files</button>
      </div>
    </main>
     
    </>
  );
}
