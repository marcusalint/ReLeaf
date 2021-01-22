import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Track = styled.div`
  width: 100%;
  height: 10px;
  background-color: #9DC5BB;
  border-radius: 10px;
  // box-shadow: inset 0 0 5px #000
  `;
const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #5E807F;
  border-radius: 6px;
  //box-shadow: inset 0 0 5px #000;
  `;

export default function ProgressBar (props) {
  return(
    <Track>
      <Thumb percentage={props.percentage}/>
    </Track>
  )
}