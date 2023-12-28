import "../do_an/like-product.css";


function LikeProductComponent() {
    return (
        <>
         
               

                <div className="like-product-container">
                    <h2>
                        <i className="fas fa-heart" /> Sản Phẩm yêu thích của bạn
                    </h2>
                    <div className="product-grid">
                        <div className="product-item">
                            <img src="img/product/khoai-mon-tui-500g-1-cu-202211240942348566_300x300.jpg" alt="Product Image" />
                            <h3>Khoai Môn</h3>
                            <p>
                                $56.00<span> $69.00</span>
                            </p>
                            <div className="product-action">
                                <a href="#" className="btn add-to-cart">
                                    Ấn Mua
                                </a>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src="img/product/dua-hau-khong-hat-trai-24kg-202309210948103144_300x300.jpg" alt="Product Image" />
                            <h3>Dưa hấu không hạt</h3>
                            <p>
                                $56.00<span> $69.00</span>
                            </p>
                            <div className="product-action">
                                <a href="#" className="btn add-to-cart">
                                    Ấn Mua
                                </a>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src="img/product/banh-oreo-cadbury-socola-hop-360g-12-cai-202306270918096583_300x300.jpg" alt="Product Image" />
                            <h3>Oreo socola </h3>
                            <p>
                                $56.00<span> $69.00</span>
                            </p>
                            <div className="product-action">
                                <a href="#" className="btn add-to-cart">
                                    Ấn Mua
                                </a>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src="img/product/bap-cai-tim-500g-202306180748314879_300x300.jpg" alt="Product Image" />
                            <h3>Bắp cải tím</h3>
                            <p>
                                $56.00<span> $69.00</span>
                            </p>
                            <div className="product-action">
                                <a href="#" className="btn add-to-cart">
                                    Ấn Mua
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

               
            </>
        
    );
}

export default LikeProductComponent;
