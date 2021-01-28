import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// AllFundsList's progress bar
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
  transition: width 1s ease-in-out;
  //box-shadow: inset 0 0 5px #000;
  `;



export default function ProgressBar (props) {

  // Makes sure progress bar caps at 100% if amount raise is more than goal.
  const clamp = function(min, value, max) {
    return Math.min(Math.max(min, value), max);
  }

  return(
    <Track>
      <Thumb percentage={clamp(0, props.percentage, 100)}/>
    </Track>
  )
}
ProgressBar.propTypes = {
  percentage: PropTypes.number,
}