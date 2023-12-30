import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "./AppContext";
import "../do_an/Search.css";

SearchComponent.propTypes = {
    value: PropTypes.object,
    searchDetail: PropTypes.func,
};
function SearchComponent({ value, searchDetail }) {
    const { handleAddcart } = useContext(Context);
    const detailproduct = useNavigate();
    const handledetail = (value) => {
        detailproduct("/Website_project/detail/" + value.id, { state: value });
        searchDetail("");
    };

    const formatCurrency = (amount) => {
        const formattedAmount = amount.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
        return formattedAmount;
    };
    return (
        <>
            <div className="container-card">
                <div className="card">
                    <div className="image-detail" onClick={() => handledetail(value)}>
                        <img src={value.image} alt={value.id} />
                    </div>
                    <h3>{value.nameProduct}</h3>
                    <p>{formatCurrency(Number(value.price))}</p>
                    <div className="product-action">
                        <button onClick={() => handleAddcart(value)}>Thêm Vào Giỏ</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchComponent;
