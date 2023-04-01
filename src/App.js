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
        <Color className='last:w-screen'/>
        <Manu />
      </div>
      <div className="flex flex-row justify-between overflow-hidden">
        <div className="flex flex-row justify-start ">
          <div className="border-r-2">
            <Sidebar />
          </div>
          <div className="flex flex-col" >
            <div><Menu /></div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden last:w-screen">
            <div><Settings /></div>
        </div>
        
      </div> 
    </div>
  );
}

export default App;
