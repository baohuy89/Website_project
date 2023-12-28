import HomeComponent from "./Component/HomeComponent";
import ContactusComponent from "./Component/ContactusComponent";
import ProductComponent from "./Component/ProductComponent";
import ShoppingCartComponent from "./Component/ShoppingCartComponent";
import DetailComponent from "./Component/DetailComponent";
import { Routes, Route } from "react-router-dom";
import BaseComponent from "./Component/BaseComponent";
import AppContext from "./Component/Appcontext";
import CustommerComponent from "./Component/CustommerComponent";

function App() {
    return (
        <>
            {/* <Detail1/> */}
            {/* <DetailComponent /> */}
            <AppContext>
                <Routes>
                    <Route path="/" element={<BaseComponent />}>
                        <Route index element={<HomeComponent />} />
                        <Route path="/product" element={<ProductComponent />} />
                        <Route path="/shopping-cart" element={<ShoppingCartComponent />} />
                        <Route path="/contact-us" element={<ContactusComponent />} />
                        <Route path="/detail/:id" element={<DetailComponent />} />
                        <Route path="/CustomerCart" element={<CustommerComponent />} />
                    </Route>
                </Routes>
            </AppContext>
        </>
    );
}

export default App;
