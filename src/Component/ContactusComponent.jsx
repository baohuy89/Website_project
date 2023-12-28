import "../do_an/contact-us.css";

function ContactusComponent() {
    return (
        <>
            <>
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators/dots */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                    </div>
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="head">
                                    <h2>Gửi yêu cầu dịch vụ khách hàng</h2>
                                    <p>
                                        Nếu bạn có câu hỏi về dịch vụ của chúng tôi hoặc có vấn đề cần báo cáo, vui lòng gửi yêu cầu và chúng tôi sẽ
                                        liên hệ lại với bạn trong thời gian sớm nhất.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="from">
                                        <div className="from1">
                                            <h2>Họ và tên*</h2>
                                            <input type="text" placeholder="Họ tên đầy đủ" />
                                        </div>
                                        <div className="from1">
                                            <h2>Địa chỉ email*</h2>
                                            <input type="text" placeholder="Địa chỉ email của bạn" />
                                        </div>
                                        <div className="from1">
                                            <h2>Chủ đề*</h2>
                                            <input type="text" placeholder="Chủ đề" />
                                        </div>
                                        <div className="from2">
                                            <h2>Thông điệp*</h2>
                                            <input type="text" placeholder="Nhập thông tin bạn gửi cho chúng tôi" />
                                        </div>
                                        <div className="from3">
                                            <button>Đồng ý xác nhận</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="address">
                                        <div className="col-lg-12">
                                            <div className="gps">
                                                <i className="fa-solid fa-location-dot" />
                                                <a href="">Hồ Chí Minh : Trụ sở chính: 128 Trần Quang Khải, P.Tân Định, Quận.1, TP.HCM.</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="gps">
                                                <i className="fa-solid fa-location-dot" />
                                                <a href="">Hà Nội: số 2 Hùng Vương, Ba Đình, Tp. Hà Nội.</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="gps">
                                                <i className="fa-solid fa-location-dot" />
                                                <a href="">Đà Nẵng: số 119, đường Trần Phú, quận Hải Châu, Tp. Đà Nẵng. </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="gps">
                                                <i className="fa-solid fa-location-dot" />
                                                <a href="">Nha Trang: Đường 2/4 , Vĩnh Phước, Thành phố Nha Trang, Khánh Hòa.</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="gps">
                                                <i className="fa-solid fa-location-dot" />
                                                <a href="">Bình Dương: số 14 phường Hiệp An, Thủ Dầu Một, Bình Dương.</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Latest compiled JavaScript */}
                    </div>
                </div>
            </>
        </>
    );
}

export default ContactusComponent;
