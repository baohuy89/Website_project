

function Footer() {
    return ( 
        <>
          <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <h3>HÃY ĐỂ CHÚNG TÔI GIÚP BẠN</h3>
                                <div className="email">
                                    <p>Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi tại:</p>
                                    <a href="">support@example.com</a>
                                </div>
                                <div className="social-media">
                                    <h4>Social Media:</h4>
                                    <div className="icon">
                                        <a href="">
                                            <i className="fa-brands fa-facebook" />
                                        </a>
                                        <a href="">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                        <a href="">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                        <a href="">
                                            <i className="fa-brands fa-youtube" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <h3>TÌM KIẾM ORFARM?</h3>
                                <div className="address">
                                    <p>189C Cống Quỳnh - Phường Nguyễn Cư Trinh - Quận 1-TPHCM</p>
                                </div>
                                <div className="info">
                                    <ul>
                                        <li>
                                            Monday - Friday: <span>8:10 AM - 6:10 PM</span>
                                        </li>
                                        <li>
                                            Saturday: <span>10:10 AM - 06:10 PM</span>
                                        </li>
                                        <li>
                                            Sunday: <span>Close</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <h3>DANH MỤC NÓNG</h3>
                                <div className="info-1">
                                    <ul>
                                        <li>
                                            <p>Trái cây &amp; Rau quả</p>
                                        </li>
                                        <li>
                                            <p>Thực phẩm tươi mới</p>
                                        </li>
                                        <li>
                                            <p>Thực phẩm đóng gói</p>
                                        </li>                                                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <h3>BẢN TIN CỦA CHÚNG TÔI </h3>
                                <p>Đăng ký vào danh sách gửi thư của Orfarm để nhận thông tin cập nhật về hàng mới đến và các thông tin khác.</p>
                                
                            </div>
                        </div>
                    </div>
                </div> 
        </>
     );
}

export default Footer;