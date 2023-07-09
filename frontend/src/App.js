import logo from "./logo.svg";
import "./App.css";
import Add from "./component/person/add";
import List from "./component/person/list";
import ComitteAdd from "./component/comitte/add";
import Sidebar from "./sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComitteList from "./component/comitte/list";
import ComitteEdit from "./component/comitte/edit";
import ImageList from "./component/image/list";
import ImageAdd from "./component/image/add";

function App() {
  return (
    <BrowserRouter>
      <div className="row m-0 ps-0">
        <div className="col-md-3 ps-0">
          <Sidebar />
        </div>
      
        <div className="col-md-9 pe-0">
          <Routes>
            {/* <Route path="/" element={<List />} /> */}
            <Route path="/person/add" element={<Add />} />
            <Route path="/person/list"element={<List/>}/>
            <Route path="/comitte/add" element={<ComitteAdd/>}/>
            <Route path="/comitte/list" element={<ComitteList/>}/>
            <Route path ='/comitte/edit/:id' element={<ComitteEdit/>}/>
            <Route path = '/image/list' element={<ImageList/>}/> 
            <Route path='/image/add' element={<ImageAdd/>}/>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
