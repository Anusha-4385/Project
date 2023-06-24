// import React from 'react';
// import Navbar from './component/Navbar';
// import{BrowserRouter,Routes,Route,Link} from "react-router-dom";
// import Contact from './component/Contact.js';

// function App() {
//   return (
//     <BrowserRouter>
    
//     <Navbar/>

//     <Routes>
//       <Route path='/Link'element={<Link/>} ></Route>
//       {/* <Route path='/Mercedes-Benz'element={<Mercedes-Benz/>} ></Route> */}
//       <Route path='/Contact'element={<Contact/>} ></Route>
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// /
 import React from 'react';
 import Navbar from './component/Navbar';
 import Tts from './component/Tts';
 import Stt from './component/Stt';
 import Home from './component/Home.js';
 import Contact from './component/Contact.js';
 import About from './component/About.js';
import{BrowserRouter,Routes,Route,Link} from "react-router-dom";
import LoginPage from './component/LoginPage.jsx'
import Sign from './component/Sign .js'
import Ourteam from './component/Ourteam.js'


function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/Home'element={<Home/>} />
      <Route path='/Stt'element={<Stt/>} />
      <Route path='/Tts'element={<Tts/>} />
      <Route path='/Contact'element={<Contact/>} />
      <Route path='/About'element={<About/>} />
      <Route path='/Sign' element={<Sign/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/Ourteam' element={<Ourteam/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
 
  
 }
 export default App;