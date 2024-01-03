import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DogsPage from "./components/Dogs/DogsPage";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "./contexts/CartContexts";

function App() {
  //thang useState lấy data đc gọi về bởi thằng useEffect
  const [allDogs,setallDogs] = useState([]);
  const [myCart,addtoCart] = useState([{}]);
  const [total,setTotal] = useState(0);
  //thang useEfeect để lấy data từ BE
  useEffect(()=>{
    async function getData(){
      const res = await axios.get("/v1/dogs");
      return res;
    }
    getData().then((res) => setallDogs(res.data));
    //catch để bắt lỗi khi sever sập vì getData trả về object thì promise (res,rej)
    getData().catch((err)=>console.log(err));
  },[]);


  return (
    <CartContext.Provider value={{myCart,addtoCart,total,setTotal}}>
    <Router>
      <NavBar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogsPage allDogs = {allDogs} />} />
          <Route path="/checkout" element={<Cart />} />
        </Routes>
      </div>
    </Router>
    </CartContext.Provider>
  );
}

export default App;
