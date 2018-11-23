import React from 'react';
// import { string, shape, arrayOf, object } from 'prop-types';
import styled from 'styled-components/native'

import { Text, ImageBackground } from 'react-native';

import image from '../../../assets/images/navy-ships-clipart-background-695348-1448208.jpg'

import Button from '../Button'

const StyledImageBackground = styled.ImageBackground`
	width: 100%;
	height: 100%;
`;

const Home = () => (
	<StyledImageBackground source={image}>
		<Button action={() => {console.log('onPress button')}} title='Introduce yourself, kooky Admiral'/>
	</StyledImageBackground>
);

Home.propTypes = {

};

export default Home;
