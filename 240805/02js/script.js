const viewMore = document.querySelector(".view_more");
const productDetail = document.querySelector(".product_detail");

viewMore.addEventListener("click", () => {
  productDetail.classList.toggle("active");
});
