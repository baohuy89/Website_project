import "../do_an/product.css";
import "../App.css";

import { useState, useEffect } from "react";

import { cateHome } from "../Component/ImgComponent/ImgComponent";
import ItemComponent from "./ItemComponent";

function ProductComponent() {
    const [product, setProduct] = useState([]);
    const [productFilter, setProductFilter] = useState([]);
    const [idCate, setIdCate] = useState(0);
    const [idSelect, setIDSelect] = useState(0);

    useEffect(() => {
        fetch("https://6561f5c3dcd355c0832466d9.mockapi.io/api/Products")
            .then((data) => {
                return data.json();
            })
            .then((result) => {
                setProduct(result[idCate].product);
                setProductFilter(result[idCate].product);
            });
    }, [idCate]);

    useEffect(() => {
        if (idSelect == "0") {
            setProductFilter(product);
        } else {
            const filterData = product.filter((value) => value.idSelect == idSelect);
            setProductFilter(filterData);
        }
    }, [idSelect]);

    console.log(productFilter);
    return (
        <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                </div>

                <div className="cate">
                    <div className="container">
                        <div className="row">
                            {cateHome &&
                                cateHome.map((value, key) => (
                                    <div key={key} className="col-lg-3  col-md-6 col-sm-6 ">
                                        <div className="card" onClick={() => setIdCate(key)}>
                                            <img src={value.img} alt="" />
                                            <div className="card-body">
                                                <h4>{value.title}</h4>
                                                <p>{}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="nameMenu" style={{ width: "100%" }}>
                        <h3>Tìm kiếm sản phẩm</h3>
                        <input type="text" placeholder="Tìm kiếm sản phẩm" />
                        <button>Tìm kiếm</button>
                        {idCate == 0 ? (
                            <select className="select-list" onChange={(e) => setIDSelect(e.target.value)}>
                                <option value={0}>Rau củ tươi</option>
                                <option value={1}>Rau lá</option>
                                <option value={2}>Củ, quả</option>
                            </select>
                        ) : idCate == 1 ? (
                            <select className="select-list" onChange={(e) => setIDSelect(e.target.value)}>
                                <option value={0}>Trái cây tươi</option>
                                <option value={1}>Xoài,Chuối</option>
                                <option value={2}>Bưởi</option>
                                <option value={3}>Táo</option>
                            </select>
                        ) : idCate == 2 ? (
                            <select className="select-list" onChange={(e) => setIDSelect(e.target.value)}>
                                <option value={0}>Thịt tươi sống</option>
                                <option value={1}>Thịt heo</option>
                                <option value={2}>Thịt bò</option>
                            </select>
                        ) : (
                            <select className="select-list" onChange={(e) => setIDSelect(e.target.value)}>
                                <option value={0}>Bánh Các Loại</option>
                                <option value={1}> Bánh quy, bơ,gạo </option>
                                <option value={2}>Bánh Snack</option>
                            </select>
                        )}
                    </div>
                </div>

                <div className="list-fruit">
                    {productFilter.map((value, key) => (
                        <ItemComponent value={value} key={key} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductComponent;
