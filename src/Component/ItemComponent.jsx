import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../do_an/product.css";
import "../App.css";
import { useContext } from "react";
import { Context } from "./Appcontext";


ItemComponent.propTypes = {
    value: PropTypes.object,
};

function ItemComponent({ value }) {
    const navigate = useNavigate();
    const { handleAddcart, setDetailProduct } = useContext(Context);
    const handleimagedetail = (value) => {
        navigate("/detail/" + value.id, { state: value });
        value["quantity"] = 1;
        setDetailProduct(value);
    };
    const formatCurrency = (amount) => {
        const formattedAmount = amount.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
        return formattedAmount.replace("₫", "VNĐ");
    };

    return (
        <>
            {/* <Container>
                <Row>
                    <Col >
                        <div className="card">
                            <div className="image-detail" onClick={() => handleimagedetail(value)}>
                                <img src={value.image} alt={value.id} />
                            </div>
                            <h3>{value.nameProduct}</h3>
                            <p>{formatCurrency(Number(value.price))}</p>
                            <div className="product-action">
                                <button onClick={() => handleAddcart(value)}>Thêm Vào Giỏ</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> */}
            <div className="card">
                <div className="image-detail" onClick={() => handleimagedetail(value)}>
                    <img src={value.image} alt={value.id} />
                </div>
                <h3>{value.nameProduct}</h3>
                <p>{formatCurrency(Number(value.price))}</p>
                <div className="product-action">
                    <button onClick={() => handleAddcart(value)}>Thêm Vào Giỏ</button>
                </div>
            </div>
        </>
    );
}

export default ItemComponent;
