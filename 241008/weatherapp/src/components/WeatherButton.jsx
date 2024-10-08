// 6
import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  // 13
  // console.log(cities);

  return (
    <ButtonGroup>
      <Button
        variant="warning"
        // 26
        onClick={() => setCity("")}
      >
        Current Location
      </Button>
      {/* // 14 */}
      {cities.map((it, index) => (
        <Button
          variant="warning"
          key={index}
          // 17
          onClick={() => {
            // setCity(it);
            // 27
            handleCityChange(it);
          }}
        >
          {it}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
