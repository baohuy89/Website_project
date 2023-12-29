// ParentComponent.js
import React from "react";
import SearchComponent from "./SearchComponent";

const ParentComponent = () => {
  // Fetch products or pass them from the parent component state
  const products = [...]; // Thay thế bằng dữ liệu sản phẩm thực tế của bạn
  // Khai báo và định nghĩa các logic khác nếu cần

  const handleSearchDetail = (selectedProduct) => {
    // Xử lý sản phẩm được chọn
    console.log("Selected Product:", selectedProduct);
  };

  return (
    <div>
      {/* Chuyển dữ liệu sản phẩm và hàm xử lý tìm kiếm cho SearchComponent */}
      <SearchComponent product={products} searchDetail={handleSearchDetail} />
    </div>
  );
};

export default ParentComponent;
