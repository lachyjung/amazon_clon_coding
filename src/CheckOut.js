import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import Checkoutproduct from "./CheckoutProduct";

function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-aws.jpg?jwAuTeoLXQvDzDNGQ8Q3zDmWXndEqL8V&itok=tukEXkYJ"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>your shopping basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">your shopping basket</h2>
          {basket?.map((item) => (
            <Checkoutproduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CheckOut;
