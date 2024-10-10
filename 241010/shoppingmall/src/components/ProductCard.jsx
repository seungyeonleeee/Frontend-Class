// 각각의 db.json 아이템이 들어갈 컴포넌트
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductCard = ({ item }) => {
  // 24
  // console.log(item);

  // 41
  const navigate = useNavigate();

  // 34
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(item.price);
  // Intl.NumberFormat : 해당 국가 화폐단위 가져오는 클래스 객체

  // 40
  const showDetail = () => {
    navigate(`products/${item.id}`);
  };

  return (
    // 25
    <Wrapper
      // 39
      onClick={showDetail}
    >
      <Img src={item && item?.img} />
      <div>Conscious Choice</div>
      <div>{item && item?.title}</div>
      <div>
        {item &&
          // 35
          formattedPrice}
      </div>
      <div>{item && item?.new ? "신제품" : "이벤트상품"}</div>
    </Wrapper>
  );
};

export default ProductCard;
