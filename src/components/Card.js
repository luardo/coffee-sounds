import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Wrapper = styled.article`
  background: #4cc9f0;
`;

const InnerContent = styled.div`
  padding: 15px;
`;
const Image = styled.img`
width: 100%;
object-fit: cover;
`;

const Paragraph = styled.p`
  font-size: 11px;
`;

export const Card = ({id, title, city, img, description}) => {
  return (
      <Wrapper>
        <Link to={"/place/" + id}>
          <Image src={img}/>
        </Link>
        <InnerContent>
          <div className="h5 caps bold">{title}</div>
          <div className="h6 mb2">{city}</div>
          <Paragraph>
            {description}
          </Paragraph>
        </InnerContent>
      </Wrapper>
  );
};
