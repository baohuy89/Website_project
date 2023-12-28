import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ImgHead } from "./ImgComponent/ImgComponent";
import { useState, useEffect, useContext, useRef } from "react";
import { Form, Col, Row } from "react-bootstrap";
import SearchComponent from "./SearchComponent";
import "../do_an/style.css";
import { Context } from "./AppContext";

function BaseComponent() {
    const [searchproduct, setsearchproduct] = useState("");
    const [searchass, setseachss] = useState([]);
    const cardSearchRef = useRef(null);
    const [searchNotFound, setSearchNotFound] = useState(false);

    const { Dataproduct } = useContext(Context);
    const handleSearch = (e) => {
        e.preventDefault();
        setsearchproduct(e.target.value);
        const filteredProducts = Dataproduct.flatMap((value) =>
            value.product.filter((item) => item.name.toLowerCase().includes(searchproduct.toLowerCase()))
        );
        setseachss(filteredProducts);
        setSearchNotFound(filteredProducts.length === 0);
    };
    useEffect(() => {
        if (searchproduct) {
            const timeout = setTimeout(() => {}, 1000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [searchproduct]);

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link href="https://fonts.googleapis.com/css2?family=Nerko+One&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" />

            <nav className="navbar navbar-expand-md .fixed-top ">
                <div className="container">
                    <a className="navbar-brand" href="#" onClick={(e) => e.preventDefault()}>
                        {ImgHead && ImgHead.map((value, key) => <img key={key} src={value.img} alt="" />)}
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to={"/Website_project/"} className="nav-link">
                                    Trang Chủ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/Website_project/product"} className="nav-link">
                                    Sản Phẩm
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/Website_project/contact-us"} className="nav-link">
                                    Liên hệ với chúng tôi
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <form className="nav-icon">
                        <Form.Control placeholder="Search..." onChange={handleSearch} value={searchproduct} />

                        <Link to={"/Website_project/shopping-cart"}>
                            <i className="fa-solid fa-cart-shopping" />
                        </Link>
                    </form>
                </div>
            </nav>

            {searchproduct.length > 0 && (
                <>
                    <div className="Card-search" ref={cardSearchRef}>
                        <Row>
                            <h4>Sản phẩm</h4>
                            {searchNotFound ? (
                                <p>Không tìm thấy kết quả phù hợp</p>
                            ) : (
                                searchass.map((value, key) => (
                                    <Col key={key} sm={6} md={4} lg={4}>
                                        <SearchComponent value={value} key={key} searchDetail={setsearchproduct} />
                                    </Col>
                                ))
                            )}
                        </Row>
                    </div>
                </>
            )}

            <Outlet />
            <Footer />
        </>
    );
}

export default BaseComponent;
