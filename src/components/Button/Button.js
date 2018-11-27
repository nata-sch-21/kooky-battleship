import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { func, string, bool } from 'prop-types';

import styles from '../../styles';

const StyledButton = styled(TouchableOpacity)`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${styles.borderRadius};
	border: 2px solid #fff;
	width: auto;
	background-color: ${styles.colors.bgColor};
	padding: 10px 15px;
	margin: 10px;
`;

const StyledText = styled(Text)`
	color: ${styles.colors.textColor};
	font-size: 18;
`;

const Button = ({ onPress, children, disabled = false }) => (
  <StyledButton onPress={onPress} disabled={disabled}>
    <StyledText>
      {children}
    </StyledText>
  </StyledButton>
);

Button.propTypes = {
  onPress: func.isRequired,
  children: string.isRequired,
  disabled: bool.isRequired,
};


export default Button;
