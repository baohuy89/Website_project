import "../do_an/customer.css";

function CustommerComponent() {
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
                                    <input type="text" placeholder="Họ tên đầy đủ" />
                                </div>
                                <div className="from1">
                                    <h2>Số điện thoại</h2>
                                    <input type="number" placeholder="Mời nhập số điện thoại" />
                                </div>
                                <div className="from1">
                                    <h2>Địa chỉ của khách hàng</h2>
                                    <input type="text" placeholder="Mời nhập địa chỉ " />
                                </div>
                                <div className="from1">
                                    <h2>Địa chỉ email*</h2>
                                    <input type="text" placeholder="Địa chỉ email của bạn" />
                                </div>
                                <div className="from2">
                                    <h2>Nội dung chi tiết đơn hàng</h2>
                                    <input type="text" placeholder="Nhập thông tin bạn gửi cho chúng tôi" />
                                </div>
                                <div className="from3">
                                    <button>Đồng ý xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest compiled JavaScript */}
            </div>
        </>
    );
}

export default CustommerComponent;
