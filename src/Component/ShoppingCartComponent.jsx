import { useContext, useEffect, useState } from "react";
import "../do_an/shopping-cart.css";
import "../App.css";
// import { useNavigate } from "react-router-dom";

import { Context } from "./AppContext";
import { useNavigate } from "react-router-dom";

function ShoppingCartComponent() {
    const [totalPrice, setTotalPrice] = useState(0);
    const customer = useNavigate();
    const { history, setHistory, handleUpdatequantity } = useContext(Context);
    useEffect(() => {
        const newTotalPrice = history.reduce(
            (acc, item) => acc + (item.salecost ? item.quantity * (item.price - item.price * (item.salecost / 100)) : item.quantity * item.price),
            0
        );

        setTotalPrice(newTotalPrice);
    }, [history]);
    const handleDelete = (value) => {
        const UpdateHistory = history.filter((product) => product.id !== value.id);
        setHistory(UpdateHistory);
    };
    const formatCurrency = (amount) => {
        const formattedAmount = amount.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
        return formattedAmount.replace("₫", "VNĐ");
    };
    const handleCustomer = () => {
        customer("/Website_project/CustomerCart");
    };

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Giỏ Hàng</title>

            <div className="box-cart">
                {history.map((value, key) => (
                    // console.log(value),
                    <div className="list-cart" key={key}>
                        <div className="cart-item">
                            <div className="item_img">
                                <img src={value.image} alt="" />
                            </div>
                            <div className="item_content">
                                <div className="content_top">
                                    <div className="info">
                                        <h3 className="title">{value.nameProduct}</h3>
                                    </div>
                                    <div className="delete" onClick={() => handleDelete(value)}>
                                        <a href="javascript:;">
                                            <i className="fa-solid fa-trash-can" />
                                        </a>
                                    </div>
                                </div>
                                <div className="content_bot">
                                    <div className="left">
                                        <span>Số lượng:</span>
                                        <div className="quantity">
                                            <span type="minus" onClick={() => handleUpdatequantity("minus", value)}>
                                                <i className="fa fa-minus" aria-hidden="true" />
                                            </span>
                                            <input value={value.quantity} type="text" />
                                            <span type="plus" onClick={() => handleUpdatequantity("plus", value)}>
                                                <i className="fa fa-plus" aria-hidden="true" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="price">{formatCurrency(Number(value.price * value.quantity))}</div>
                                    <div className="pricecore" style={{ display: "none" }}>
                                        31
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="s_total">
                    <div className="info">
                        <div>Tổng tiền:</div>
                        <div className="total">
                            <span>{formatCurrency(Number(totalPrice))}</span>
                        </div>
                    </div>
                </div>
                <div className="s_button" onClick={handleCustomer}>
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    Đặt hàng ngay
                </div>
            </div>
        </>
    );
}

export default ShoppingCartComponent;
