import { Carousel } from "react-bootstrap";
import "../do_an/style.css";
import { CaroselHome, cateHome, healthyHome, bannerHome, newsHome } from "../Component/ImgComponent/ImgComponent";
import "../App.css";

function HomeComponent() {
    return (
        <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                </div>
           
                <div className="">
                    <Carousel>
                        {CaroselHome &&
                            CaroselHome.map((value, key) => (
                                <Carousel.Item key={key}>
                                    <img src={value.img} alt="" />
                                    <Carousel.Caption>
                                        <h3>{value.title}</h3>
                                        <h2>{value.titleImg}</h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                    </Carousel>
                </div>
         
            </div>
            <div className="cate">
                <div className="container">
                    <div className="row">
                        {cateHome &&
                            cateHome.map((value, key) => (
                                <div key={key} className="col-lg-3 col-md-6 col-sm-6 ">
                                    <div className="card">
                                        <img src={value.img} alt="" />
                                        <div className="card-body">
                                            <h4>{value.title}</h4>
                                            <p>{value.qu}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="healthy">
                <div className="container">
                    <div className="row">
                        {healthyHome &&
                            healthyHome.map((value, key) => (
                                <div key={key} className="col-md-6">
                                    <div className="thumb">
                                        <img style={{ width: "100%" }} src={value.img} alt="" />
                                    </div>
                                </div>
                            ))}

                        <div className="col-md-6">
                            <div className="headline">
                                <h4 style={{ marginLeft: "40% " }}>~ Sản Phẩm sắp được ra mắt ~</h4>
                                <h2>Organic Drinks</h2>
                                <h3>
                                    <span>Easy Healthy</span> - Happy Life
                                </h3>
                                <p>Đây là sản phẩm được làm 100% từ trái cây tươi, mỗi ngày một chai giúp bổ sung chất, tăng sức đề kháng</p>
                            </div>
                            <div className="list-menu">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>FRESH FRUITS:</h3>
                                        <p>Apples, Berries &amp; Cherries</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>INGREDIENT:</h3>
                                        <p>Energy, Protein, Sugars</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>EXPIRY DATE:</h3>
                                        <p>See on The Bottle Cap</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>BOOTLE SIZE:</h3>
                                        <p>500ml - 1000ml</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>FRESH FRUITS:</h3>
                                        <p>Apples, Berries &amp; Cherries</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>INGREDIENT:</h3>
                                        <p>Energy, Protein, Sugars</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        {bannerHome &&
                            bannerHome.map((value, key) => (
                                <div key={key} className="col-md-4">
                                    <div className="card">
                                        <img src={value.img} alt="" />
                                        <div className="card-img">
                                            <h4>{value.title}</h4>
                                            <p className="card-text">
                                                {value.titleSpan} <br /> <span>{value.titleSpan1}</span>
                                            </p>
                                            <p>{value.titleShip}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="news">
                <div className="container">
                    <div className="headline-1">
                        <h4>~ Đọc Blog của chúng tôi ~</h4>
                        <h2>Bài viết mới nhất của chúng tôi</h2>
                        <p>Bài viết được chúng tôi cập nhật hằng ngày.</p>
                    </div>
                    <div className="row">
                        {newsHome &&
                            newsHome.map((value, key) => (
                                <div className="col-lg-3" key={key}>
                                    <div className="card-new">
                                        <div className="thumb">
                                            <img style={{ width: "100%" }} src={value.img} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h4>{value.title}</h4>
                                            <p>{value.titleImg}</p>
                                            <div className="card-link">
                                                <a href="">Đọc thêm</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeComponent;
