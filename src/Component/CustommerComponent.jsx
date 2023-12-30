// import { useState } from "react";
// import "../do_an/customer.css";

// function CustommerComponent() {
//     const [customerInfo, setCustomerInfo] = useState({
//         fullName: "",
//         phoneNumber: "",
//         address: "",
//         email: "",
//         orderDetails: "",
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setCustomerInfo({
//             ...customerInfo,
//             [name]: value,
//         });
//     };

//     const handleConfirmation = () => {
//         localStorage.setItem("customerInfo", JSON.stringify(customerInfo));

//         setCustomerInfo({
//             fullName: "",
//             phoneNumber: "",
//             address: "",
//             email: "",
//             orderDetails: "",
//         });
//         history.push("/thank-you");
//     };

//     return (
//         <>
//             <div className="mainer">
//                 <div className="container">
//                     <div className="row">
//                         <div className="head">
//                             <h2>Gửi yêu cầu đơn hàng của khách hàng</h2>
//                         </div>
//                         <div className="col-lg-12">
//                             <div className="from">
//                                 <div className="from1">
//                                     <h2>Họ và tên*</h2>
//                                     <input
//                                         type="text"
//                                         placeholder="Họ tên đầy đủ"
//                                         name="fullName"
//                                         value={customerInfo.fullName}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="from1">
//                                     <h2>Số điện thoại</h2>
//                                     <input
//                                         type="number"
//                                         placeholder="Mời nhập số điện thoại"
//                                         name="phoneNumber"
//                                         value={customerInfo.phoneNumber}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="from1">
//                                     <h2>Địa chỉ của khách hàng</h2>
//                                     <input
//                                         type="text"
//                                         placeholder="Mời nhập địa chỉ "
//                                         name="address"
//                                         value={customerInfo.address}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="from1">
//                                     <h2>Địa chỉ email*</h2>
//                                     <input
//                                         type="text"
//                                         placeholder="Địa chỉ email của bạn"
//                                         name="email"
//                                         value={customerInfo.email}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="from2">
//                                     <h2>Nội dung chi tiết đơn hàng</h2>
//                                     <input
//                                         type="text"
//                                         placeholder="Nhập thông tin bạn gửi cho chúng tôi"
//                                         name="orderDetails"
//                                         value={customerInfo.orderDetails}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="from3">
//                                     <button onClick={handleConfirmation}>Đồng ý xác nhận</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default CustommerComponent;

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Update import statement
import "../do_an/customer.css";

function CustommerComponent() {
    const [customerInfo, setCustomerInfo] = useState({
        fullName: "",
        phoneNumber: "",
        address: "",
        email: "",
        orderDetails: "",
    });

    const navigate = useNavigate(); // Change from useHistory to useNavigate

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo({
            ...customerInfo,
            [name]: value,
        });
    };

    const handleConfirmation = () => {
        localStorage.setItem("customerInfo", JSON.stringify(customerInfo));
        setCustomerInfo({
            fullName: "",
            phoneNumber: "",
            address: "",
            email: "",
            orderDetails: "",
        });
        navigate("/Website_project/thank-you"); // Change from history.push to navigate
    };

    return (
        <>
            <div className="mainer">
                <div className="container">
                    <div className="row">
                        <div className="head">
                            <h2>Gửi yêu cầu đơn hàng của khách hàng</h2>
                        </div>
                        <div className="col-lg-12">
                            <div className="from">
                                <div className="from1">
                                    <h2>Họ và tên*</h2>
                                    <input
                                        type="text"
                                        placeholder="Họ tên đầy đủ"
                                        name="fullName"
                                        value={customerInfo.fullName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="from1">
                                    <h2>Số điện thoại</h2>
                                    <input
                                        type="number"
                                        placeholder="Mời nhập số điện thoại"
                                        name="phoneNumber"
                                        value={customerInfo.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="from1">
                                    <h2>Địa chỉ của khách hàng</h2>
                                    <input
                                        type="text"
                                        placeholder="Mời nhập địa chỉ "
                                        name="address"
                                        value={customerInfo.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="from1">
                                    <h2>Địa chỉ email*</h2>
                                    <input
                                        type="text"
                                        placeholder="Địa chỉ email của bạn"
                                        name="email"
                                        value={customerInfo.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="from2">
                                    <h2>Nội dung chi tiết đơn hàng</h2>
                                    <input
                                        type="text"
                                        placeholder="Nhập thông tin bạn gửi cho chúng tôi"
                                        name="orderDetails"
                                        value={customerInfo.orderDetails}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="from3">
                                    <button onClick={handleConfirmation}>Đồng ý xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustommerComponent;
