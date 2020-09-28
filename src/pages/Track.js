import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {Player} from "../components/Player";
import CoffeeHouseService from "../services/CoffeeHouseService";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 90vh;
  flex-direction: column;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: -1;
  width: 100%;
`;

const Gradient = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 14%,
    rgba(0, 0, 0, 0.7) 95%
  );
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const PlayerWrapper = styled.div`
  background-color: #f72585;
  box-shadow: 28px 26px 97px -27px rgba(0,0,0,0.76);
  padding: 10px 20px;
  margin: 0 auto;
`;

const Track = () => {
  const [data, setData] = useState({coffee: [], isFetching: false});
  const service = new CoffeeHouseService();
  let {id} = useParams();

  useEffect(() => {
    const fetchCoffeePlace = async () => {
      setData({coffee: [], isFetching: true});
      service.getCoffeeHouse(id).then(
          response => {
            setData({coffee: response, isFetching: false});
          }
      );
    };
    fetchCoffeePlace();
  }, []);

  return (
      <Wrapper>
        <ImageWrapper>
          <Image src={data.img} alt={data.title}/>
          <Gradient/>
        </ImageWrapper>
        <PlayerWrapper>
          <Player {...data.coffee}/>
        </PlayerWrapper>
      </Wrapper>
  )
};

export default Track;
