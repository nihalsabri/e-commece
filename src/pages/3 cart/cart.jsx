import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../redux/slices/cartSlice"; 
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  
  const cartItems = useSelector((state) => state.cart.cartItems);
const totalprice = cartItems.reduce((acc , item) => {
acc += item.price*item.quantity ;
return acc;
},0)


  return (
    <div>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? <p>Cart is empty</p> : cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.title} />
          <h2>{item.title}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => {dispatch(increaseQuantity(item.id));
       toast.success("Item increased from cart!", { autoClose: 2000 })}}>+</button>
          <button onClick={() => {dispatch(decreaseQuantity(item.id));

          toast.success("Item decreased from cart!", { autoClose: 2000 });

       } }>-</button> 
    
          <button onClick={() => {
  dispatch(removeFromCart(item.id));
  toast.success("Item removed from cart!", { autoClose: 2000 });
}}>
  Remove
</button>

        </div>
      ))}
        <p>Total Price: {totalprice} $</p>
    </div>
  );
};

export default Cart;
