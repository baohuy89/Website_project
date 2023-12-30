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
                                <p>Họ và tên: {userInfo.fullName}</p>
                                <p>Địa chỉ: {userInfo.address}</p>
                                <p>Email: {userInfo.email}</p>
                                <p>Số điện thoại: {userInfo.phoneNumber}</p>
                                <p>Nội dung đơn hàng: {userInfo.orderDetails}</p>
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
