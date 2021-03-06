import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { func, string, bool } from 'prop-types';

import styles from '../../configs/styles';

const StyledButton = styled(TouchableOpacity)`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${styles.borderRadius};
	border: 2px solid #fff;
	width: auto;
	background-color: ${styles.colors.navy};
	padding: 10px 15px;
	margin: 10px;
	height: 50px;
`;

const StyledText = styled(Text)`
	color: ${styles.colors.white};
	font-size: 18;
`;

const Button = ({ onPress, children, disabled }) => (
  <StyledButton onPress={onPress} disabled={disabled}>
    <StyledText>
      {children}
    </StyledText>
  </StyledButton>
);

Button.propTypes = {
  onPress: func.isRequired,
  children: string.isRequired,
  disabled: bool,
};

Button.defaultProps = {
  disabled: false,
};


export default Button;
