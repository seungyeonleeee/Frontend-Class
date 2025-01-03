import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { userDataAtom } from "../atoms";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { motion, useAnimation, useScroll } from "framer-motion";

// Styled
const Nav = styled(motion.nav)`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  color: ${({ theme }) => theme.red};
  font-size: 18px;
  z-index: 5;
`;
const Inner = styled.div`
  width: var(--inner-width);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Logo = styled(motion.svg)`
  width: 150px;
  height: 40px;
  cursor: pointer;
  path {
    fill: ${({ theme }) => theme.red};
  }
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const Item = styled.li`
  a {
    position: relative;
    padding: 10px;
    color: ${({ theme }) => theme.white.darker};
    transition: all 0.3s;
    &.active,
    &:hover {
      font-weight: 500;
      color: ${({ theme }) => theme.white.lighter};
    }
  }
`;
const Circle = styled(motion.span)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.red};
`;
const Search = styled(motion.form)`
  position: relative;
  width: 38px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.black.lighter};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  svg {
    position: absolute;
    right: 10px;
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.white.darker};
    transition: fill 0.3s;
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.red};
    }
  }
`;
const Input = styled(motion.input)`
  width: 160px;
  transform-origin: right center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.white.darker};
`;
const UserNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
  li {
    a,
    .logout-btn {
      padding: 10px;
      border: 1px solid ${({ theme }) => theme.black.lighter};
      border-radius: 5px;
      color: ${({ theme }) => theme.white.darker};
      font-size: 1.4rem;
      transition: all 0.3s;
      &:hover {
        background: ${({ theme }) => theme.black.lighter};
      }
    }
    &.signup {
      a {
        background: ${({ theme }) => theme.red};
        color: ${({ theme }) => theme.white.lighter};
        &:hover {
          background: ${({ theme }) => theme.black.lighter};
        }
      }
    }
  }
`;

// Motion Variants
const logoVariants = {
  normal: { fillOpacity: 1 },
  active: {
    fillOpacity: [0, 0.5, 0, 0.7, 0.2, 0, 0.5, 1],
    transition: { duration: 0.5 },
  },
};
const navVariants = {
  top: {
    background: "rgba( 0, 0, 0, 0)",
  },
  scroll: {
    background: "rgba( 0, 0, 0, 1)",
  },
};

// Type
interface Form {
  keyword: string;
}

const Header = () => {
  const navigate = useNavigate();

  // User Data
  const [userData, setUserData] = useRecoilState(userDataAtom);

  // Toggle Search
  const [searchOpen, setSearchOpen] = useState(false);

  // Circle Animation
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/series");
  // console.log(homeMatch, tvMatch);
  // true => 객체, false => null 반환
  const modalMatch = useMatch("/movies/*");

  // Motion Animation
  const navAnimation = useAnimation();
  const formAnimation = useAnimation();
  const inputAnimation = useAnimation();

  // Scroll Event
  const { scrollY } = useScroll();

  // Go To Main
  const goToMain = () => {
    navigate("/");
  };

  // Logout
  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      setUserData({ userId: "", password: "", email: "" });
      navigate("/login");
    }
  };

  // Search Form
  const { register, handleSubmit, setValue } = useForm<Form>();
  const onValid = (data: Form) => {
    navigate(`/search?keyword=${data.keyword}`);
    setValue("keyword", "");
  };
  const openSearch = () => {
    if (searchOpen) {
      formAnimation.start({
        width: "38px",
        background: "transparent",
      });
      inputAnimation.start({
        scaleX: 0,
        opacity: 0,
      });
    } else {
      formAnimation.start({
        width: "203px",
        background: "#2f2f2f",
      });
      inputAnimation.start({
        scaleX: 1,
        opacity: 1,
      });
    }
    setSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 40) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY]);

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Inner>
        <Col>
          <Logo
            onClick={goToMain}
            variants={logoVariants}
            initial={"normal"}
            whileHover={"active"}
            xmlns="http://www.w3.org/2000/svg"
            width="1024"
            height="276.742"
            viewBox="0 0 1024 276.742"
          >
            <path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
          </Logo>
          <Items>
            <Item>
              <Link to={"/"} className={homeMatch ? "active" : ""}>
                영화
                {homeMatch && <Circle layoutId="circle" />}
                {modalMatch && <Circle layoutId="circle" />}
              </Link>
            </Item>
            <Item>
              <Link to={"/series"} className={tvMatch ? "active" : ""}>
                시리즈
                {tvMatch && <Circle layoutId="circle" />}
              </Link>
            </Item>
          </Items>
        </Col>
        <Col>
          <Search onSubmit={handleSubmit(onValid)} animate={formAnimation}>
            <Input
              {...register("keyword", { required: true, minLength: 1 })}
              type="text"
              placeholder="Search for MOVIE or TV"
              animate={inputAnimation}
              initial={{ scaleX: 0 }}
              transition={{ type: "linear" }}
            />
            <svg
              onClick={openSearch}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </Search>
          <UserNav>
            <li className="login">
              {userData.userId ? (
                <button className="logout-btn" onClick={handleLogout}>
                  로그아웃
                </button>
              ) : (
                <Link to={"/login"}>로그인</Link>
              )}
            </li>
            <li className="signup">
              <Link to={"/signup"}>회원가입</Link>
            </li>
          </UserNav>
        </Col>
      </Inner>
    </Nav>
  );
};

export default React.memo(Header);
