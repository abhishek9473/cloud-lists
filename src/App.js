import LeftNavbar from "./components/navigationBar/LeftNavbar/LeftNavbar";

function App() {
  return (
    <div>
      <div className="flex flex-row justify-between h-screen ">
        <div className="bg-gray-500a w-[275px]">
          <LeftNavbar />
        </div>
        <div className="grow">
          <nav className="bg-gray-300 h-12">Navbar</nav>
          <div>main page</div>
        </div>
        <div className="bg-gray-500 w-[275px]">right navbar</div>
      </div>
    </div>
  );
}

export default App;
