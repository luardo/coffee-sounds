import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import styled from 'styled-components';
import {RiCloseCircleLine} from 'react-icons/ri';
import {GiSpeaker, GiSpeakerOff} from 'react-icons/gi';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
display: block;
text-align: left;
margin-left: 10px;
`;

const StyledLink = styled(Link)`
    align-self: normal;
    color: black;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


export const Player = ({title, file, img, category, city}) => {
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio(file));
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
  );

  return (
      <Wrapper>
        {!playing ?
            <GiSpeakerOff
                className={'block mx-auto'}
                size={'5rem'}
                style={{opacity: 1, cursor: 'pointer'}}
                onClick={toggle}/> :
            <GiSpeaker
                className={'block mx-auto'}
                size={'5rem'}
                style={{opacity: 1, cursor: 'pointer'}}
                onClick={toggle}/>
        }

        <Content>
          <h2 className="h5 caps">
            {title}
          </h2>
          <h3 className="h6 caps">
            {category} - {city}
          </h3>
        </Content>

        <StyledLink to={'/list'}>
          <RiCloseCircleLine size={'1.25rem'} style={{alignSelf: 'end', cursor: 'pointer'}}/>
        </StyledLink>

      </Wrapper>
  )
};
