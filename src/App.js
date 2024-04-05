import LeftNavbar from "./components/navigationBar/LeftNavbar/LeftNavbar";
import Navbar from "./components/navigationBar/navbar/Navbar";
import RightNavbar from "./components/navigationBar/rightNavbar/RightNavbar";
import Mainpage from "./components/pageComponents/homepage/Mainpage";

function App() {
  return (
    <div style={{ fontStyle: "normal" }}>
      <div className="flex flex-row justify-between h-screen ">
        <div className="bg-gray-500a w-[275px]">
          <LeftNavbar />
        </div>
        <div className="grow">
          <nav className="bg-gray-300 h-12">
            <Navbar />
          </nav>
          <div className="bg-[#F2F5F8]">
            <Mainpage />
          </div>
        </div>
        <div className="w-[275px]">
          <RightNavbar />
        </div>
      </div>
    </div>
  );
}

export default App;
