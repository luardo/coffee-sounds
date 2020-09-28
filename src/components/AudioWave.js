import React from "react";
import styled, {keyframes} from 'styled-components';

const AudioWaveWrapper = styled.div`
  position: relative;
  margin: 25px auto;
`;

const Animation = keyframes`
  0% {height:5px;transform:translateY(0px);background:#9b59b6;}
  25% {height:40px;transform:translateY(20px);background:#3498db;}
  /*effect is to animate the height of each span from 5px to 30px*/
  /*translateY makes Y axis move down to give the effect that it is growing from the center*/
  50% {height:5px;transform:translateY(0px);background:#9b59b6;}
  100% {height:5px;transform:translateY(0px);background:#9b59b6;}
`;
const Wave = styled.span`
  display: block;
  bottom: 0px;
  width: 9px;
  height: 5px;
  background: #9b59b6;
  position: absolute;
  animation: ${Animation} 1.5s infinite ease-in-out;
  
  &:nth-child(2) {
  left: 11px;
  animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
  left: 22px;
  animation-delay: 0.4s;
  }
  
  &:nth-child(4) {
  left: 33px;
  animation-delay: 0.6s;
  }
  
  &:nth-child(5) {
  left: 44px;
  animation-delay: 0.8s;
  }
`;
const AudioWave = () => {
  return (
      <AudioWaveWrapper>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
        <Wave></Wave>
      </AudioWaveWrapper>
  )
}

export default AudioWave;
