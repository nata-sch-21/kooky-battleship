import React from 'react';
import { element, number } from 'prop-types';
import styled from 'styled-components/native';

import { ImageBackground } from 'react-native';

import bg from '../../../assets/images/bg.jpg';


const StyledImageBackground = styled(ImageBackground)`
	width: 100%;
	height: 100%;
`;

const Wrapper = ({ children, image }) => (
  <StyledImageBackground source={image}>
    {children}
  </StyledImageBackground>
);

Wrapper.propTypes = {
  children: element.isRequired,
  image: number,
};

Wrapper.defaultProps = {
  image: bg,
};

export default Wrapper;
