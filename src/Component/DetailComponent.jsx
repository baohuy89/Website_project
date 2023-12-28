import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../do_an/detail.css";
import { Context } from "./Appcontext";
import ItemComponent from "./ItemComponent";
import { useLocation } from "react-router-dom";

function DetailComponent() {
    const { handleAddcart} = useContext(Context);

    const [arrayproduct, setarrayproduct] = useState([]);
    const location = useLocation();
    // const [numQuantity, setNumQuantity] = useState(1);
    // const handleUpdatequantity = (type, product) => {
        
        
      
    //     if (type == "minus") {
    //         if (product.quantity > 1) {
    //             product.quantity -= 1;
    //         }
    //     } else {
    //         product.quantity += 1;
    //     }

    //     setNumQuantity(product.quantity);
    
    // };

    useEffect(() => {
        fetch("https://6561f5c3dcd355c0832466d9.mockapi.io/api/Products")
            .then((data) => data.json())
            .then((result) => {
                setarrayproduct(result);
            });
    }, []);

    const formatCurrency = (amount) => {
        const formattedAmount = amount.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        });
        return formattedAmount.replace("₫", "VNĐ");
      }
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Grape Fruit Turkey</title>
            <link rel="stylesheet" href="style.css" />
            <div className="product-container">
                <div className="image-container">
                    <img src={location.state.image} alt="" />
                </div>
                <div className="info-container">
                    <div className="product-title">{location.state.nameProduct}</div>
                    <div className="product-price">{formatCurrency(Number(location.state.price))}</div>
                    <div className="add-to-cart" onClick={() => handleAddcart(location.state)}>
                        Thêm vào giỏ
                    </div>

                    <div className="product-description">
                        Đặc điểm nổi bật: <br />
                        <table>
                            <thead>
                                <tr>
                                    <th>Loại sản phẩm:</th>
                                    <th>{location.state.ProductType}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Khối lượng:</td>
                                    <td>{location.state.Mass}</td>
                                </tr>
                                <tr>
                                    <td>Nơi sản xuất:</td>
                                    <td>{location.state.Placeofmanufacture}</td>
                                </tr>
                                <tr>
                                    <td>Hướng dẫn sử dụng:</td>
                                    <td>{location.state.Instructionsforuse}</td>
                                </tr>
                                <tr>
                                    <td>Hạn sử dụng:</td>
                                    <td>{location.state.date}</td>
                                </tr>
                                <tr>
                                    <td>Bảo quản: </td>
                                    <td> {location.state.Preserve} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="listLq">
                <div className="ProductType">
                    <h2>Sản Phẩm Liên Quan</h2>

                    <Row>
                        {arrayproduct.map((value) =>
                            value.product.map(
                                (value, key) =>
                                    value.rand_product == location.state.rand_product &&
                                    value.nameProduct !== location.state.nameProduct && (
                                        <Col lg={3} key={key}>
                                            <ItemComponent value={value} />
                                        </Col>
                                    )
                            )
                        )}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default DetailComponent;
