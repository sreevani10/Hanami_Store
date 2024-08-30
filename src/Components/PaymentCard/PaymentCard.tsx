
import { toast } from 'react-toastify';
import { TCart } from '../../Context/CartContext';
import './PaymentCard.css'




  

const PaymentCard = ({ cart, setCart ,setCartCount}:{cart : TCart[], setCart : (cart:TCart[])=> void, setCartCount:(count:number)=> void}) => {
  const handleOrderNow = () => {
      const finalTotal = total;
      toast.success(`Thanks for shopping!! Please visit again. Total amount: ₹${finalTotal}`);
      setTimeout(()=> {  setCart([]) ; setCartCount(0)}, 2000);

    
  };

  let price = 0;
  let discount = 0;
  let total = 0;
  cart.forEach((product) => {
    price += product.price * (product.quantity);
    if(product.discount){
      discount += ((product.price * product.discount) / 100);
    }
    total += (product.price * (product.quantity)) - (discount*product.quantity);
  });

  


  return (
    <div className="payment-body">
                       <h1>Payment Details</h1>
                 <hr></hr> 
                 <div className="payment-details">
                     <p>Price({cart.length}{cart.length>1? ' products':' product'})</p>
                     <p>₹{price}</p>
                 </div>
                 <div className="payment-details">
                     <p>Discount </p>
                     <p className="text-highlight"> -{discount}</p>
                 </div>
                 <div className="payment-details">
                     <p>Delivery Charges</p>
                     <p className="text-highlight">Free</p>
                 </div>
                 <div className="payment-details">
                     <p>Total Amount </p>
                     <p>₹{total}</p>
                 </div>
                 <h5 >
                    You saved {discount}₹ on this order
                 </h5>
                 <div className="price-order">
                 <span>
                        <h4>₹{total}</h4>
                        <p>view price details</p>
                        <button onClick={handleOrderNow}>Order Now</button></span>

                 </div>

      
    </div>
  );
};

export default PaymentCard;