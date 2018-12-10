import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { func, string, bool } from 'prop-types';

import styles from '../../configs/styles';

const StyledView = styled(View)`
	display: flex;
	justify-content: center;
	align-items: center;

`;

const StyledText = styled(Text)`
	color: ${styles.colors.textColor};
	font-size: 18;
`;

const Battlefield = ({ battlefield }) => {
 return (
   <StyledView>
    <StyledText>
      sdfef
    </StyledText>
  </StyledView>
 )
};

// Button.propTypes = {
//   onPress: func.isRequired,
//   children: string.isRequired,
//   disabled: bool,
// };
//
// Button.defaultProps = {
//   disabled: false,
// };
//

export default Battlefield;
