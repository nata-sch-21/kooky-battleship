import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { func, string, bool } from 'prop-types';
import styled from 'styled-components/native';

import styles from '../../configs/styles';

const StyledTextInput = styled(TextInput)`
  display: flex;
  text-align: center;
  border-radius: ${styles.borderRadius};
  border: 2px solid ${styles.colors.navy};
  background-color: #fff;
  margin: 10px;
  font-size: 18;
  color: ${styles.colors.navy};
`;

// class component is used to avoid HRM error
class Input extends Component { // eslint-disable-line
  render() {
    return (
      <StyledTextInput
        placeholderTextColor={styles.colors.navy}
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      />
    );
  }
}

Input.propTypes = {
  onChangeText: func.isRequired,
  placeholder: string,
  secureTextEntry: bool,
  autoCorrect: bool,
  value: string,
};

Input.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
  autoCorrect: false,
  value: '',
};

export default Input;
