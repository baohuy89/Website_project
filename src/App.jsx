import HomeComponent from "./Component/HomeComponent";
import ContactusComponent from "./Component/ContactusComponent";
import ProductComponent from "./Component/ProductComponent";
import ShoppingCartComponent from "./Component/ShoppingCartComponent";
import DetailComponent from "./Component/DetailComponent";
import { Routes, Route } from "react-router-dom";
import BaseComponent from "./Component/BaseComponent";
import CustommerComponent from "./Component/CustommerComponent";
import AppContext from "./Component/AppContext";

function App() {
    return (
        <>
            {/* <Detail1/> */}
            {/* <DetailComponent /> */}
            <AppContext>
                <Routes>
                    <Route path="/Website_project/" element={<BaseComponent />}>
                        <Route index element={<HomeComponent />} />
                        <Route path="/Website_project/product" element={<ProductComponent />} />
                        <Route path="/Website_project/shopping-cart" element={<ShoppingCartComponent />} />
                        <Route path="/Website_project/contact-us" element={<ContactusComponent />} />
                        <Route path="/Website_project/detail/:id" element={<DetailComponent />} />
                        <Route path="/Website_project/CustomerCart" element={<CustommerComponent />} />
                    </Route>
                </Routes>
            </AppContext>
        </>
    );
}

export default App;
