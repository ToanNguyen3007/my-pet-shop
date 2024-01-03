import { useContext } from "react";
import { CartContext } from "../../contexts/CartContexts";
import "./cart.css"
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
    const {myCart,total,addtoCart,setTotal} = useContext(CartContext);
    const navigate = useNavigate();
    const handleCheckout = () => {
        setTotal(0);
        addtoCart([{}]);
    }
    const handleHome = () => {
        navigate("/");
    }
    return ( 
        <>
            <section className="cart-container">
                <div className="cart-header">CHECK OUT</div>
                <div className="cart-items">
                    {myCart.slice(1).map((item) => {
                        return (
                            <div className="cart-item">
                                <img src={item.imageUrl} className="cart-item-img" alt="" />
                                {item.name}:{item.price}$
                            </div>
                        );           
                    })}
                    <div className="cart-total">
                        TOTAL : {total}$
                    </div>
                </div>
                <button className="cart-checkout" onClick={handleCheckout}> DONE </button>
                <button className="cart-gohome" onClick={handleHome}> RETURN HOME </button>
            </section>
        </>
     );
}
 
export default Cart;