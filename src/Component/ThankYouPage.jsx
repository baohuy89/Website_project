import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Lấy thông tin người thanh toán từ localStorage
        const storedUserInfo = JSON.parse(localStorage.getItem("customerInfo"));
        setUserInfo(storedUserInfo);
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="thank-you-page">
                        <h2>Cảm ơn bạn đã mua hàng!</h2>
                        {userInfo && (
                            <div>
                                <p>Chúng tôi đã nhận được đơn hàng của bạn.</p>
                                <h3>Thông tin người thanh toán:</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Họ và tên:</th>
                                            <th> {userInfo.fullName}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Địa chỉ:</td>
                                            <td> {userInfo.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Email: </td>
                                            <td>Email: {userInfo.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Số điện thoại:</td>
                                            <td> {userInfo.phoneNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>Nội dung đơn hàng: </td>
                                            <td> {userInfo.orderDetails}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        <Link to={"/Website_project/"}>Quay về trang chủ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
