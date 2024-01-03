import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContexts";
import "./dogs.css";
const DogsCard = (props) => {
  const { id, name, breed, description, price, imageUrl } = props;
  const {addtoCart, setTotal} = useContext(CartContext);
  const [isAdded,setAdded] = useState(false); //btn add logic useState
  const handleclick=()=>{
    setAdded(true);
    const newItems = {
        name : name,
        price : price,
        imageUrl : imageUrl,
    };
    addtoCart((item) => [...item, newItems]);
    setTotal((total) => (total += Number(price)));
  }; 
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p> {name} </p>
          <p> {breed} </p>
        </div>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt={`picture of: ${name}`} />
        </div>
        <div className="dogs-description">{description}</div>
        <div className="dog-price">{price}$</div>
        {isAdded ? ( // conditional statement render 
             <button disabled className="dogs-btn-disabled">ADDED</button>
        ) : (
            <button className="dogs-btn" onClick={handleclick}>ADD TO CART</button>
        )}

      </section>
    </>
  );
};

export default DogsCard;
