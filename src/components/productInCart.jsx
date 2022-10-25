import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./productInCart.css";

const ProductInCart = (props) => {

    const getProdTotal = () => {
        return (props.data.price * props.data.qty);
    }
    return (
        <div className="product-cart">
            <section className="img-section">
                <img src={"/images/"+props.data.image} />
            </section>

            <section className="title-section">
                <h3>{props.data.title}</h3>
                <h5>{props.data.category}</h5>
            </section>

            <section className="price-section">
                <h4>Price</h4>
                <h5>${props.data.price}</h5>
            </section>

            <section className="qty-section">
                <h4>Qty</h4>
                <h5>{props.data.qty}</h5>
            </section>

            <section className="subt-section">
                <h4>Subtotal</h4>
                <h5>${getProdTotal()}</h5>
            </section>

            <section className="delete-btn">
                <button><FontAwesomeIcon icon="fa-solid fa-trash" /></button>
            </section>
        </div>
    )
}

export default ProductInCart;