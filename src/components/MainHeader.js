import React from "react";
import styled from 'styled-components';

const Header = styled.header`
  background: #000000;
  color: white;
`;

const Name = styled.span`
  font-weight: bold;
`;

const MainHeader = () => {

  return (
      <Header className={'flex p2'}>
        <Name>SoundsOfBerlin</Name>
      </Header>
  )
};

export default MainHeader;
