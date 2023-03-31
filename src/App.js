import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import Color from "./components/Color";
import Settings from "./components/Settings";
import Manu from "./components/Manu";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Manu />
        <Color />
      </div>
      <div className="flex flex-row justify-start">
        <div>
          <Sidebar />
        </div>
        <div >
            <Menu />
        </div>
        <div >
            <Settings />
        </div>
        
      </div> 
    </div>
  );
}

export default App;
