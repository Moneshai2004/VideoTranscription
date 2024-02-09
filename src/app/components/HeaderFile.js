import Sparkleicon from "./Sparkleicon";

export default function HeaderFiles() {
  return (
    <header className="flex justify-between mb-4 mt-10 text-white text-xl font-semibold">
      <a href="" className="flex gap-2 ">
        <Sparkleicon />
        Caption Generator
      </a>
      <nav className="flex space-x-4 justify-items-end">
        <a href="">Home</a>
        <a href="">Linkendin</a>
        <a href="">contact</a>
      </nav>
    </header>
  );
}
