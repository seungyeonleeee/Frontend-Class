import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;
const HeaderTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 20px;
`;
const SearchBox = styled.div`
  input {
    width: 100px;
    padding: 4px 6px;
    border: none;
    border-bottom: 1px solid #000;
    text-align: center;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;
const LoginAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Logo = styled.div`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const MenuArea = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

// 12
const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "발매",
  "랭킹",
  "세일",
  "무탠슈퍼세일",
];

const Navbar = ({ authenticate, setAuthenticate }) => {
  // 15
  const navigate = useNavigate();

  // 16
  const onCheckEnter = (e) => {
    // console.log(e);
    // 마지막에 누른 key가 enter면 파라미터가 value값으로 이동
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };

  return (
    <Wrapper>
      <HeaderTop>
        {/* // 14 */}
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
        </SearchBox>
        {/* // 17 */}
        {/* // 45 */}
        {authenticate ? (
          <LoginAuth onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </LoginAuth>
        ) : (
          <LoginAuth onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuth>
        )}
      </HeaderTop>

      <Logo>
        <Link to={"/"}>
          <img
            src="https://menu.mt.co.kr/moneyweek/thumb/2020/08/21/06/2020082114368021238_2.jpg"
            alt="musinsa"
          />
        </Link>
      </Logo>
      {/* // 13 */}
      <MenuArea>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </MenuArea>
    </Wrapper>
  );
};

export default Navbar;
