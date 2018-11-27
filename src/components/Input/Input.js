import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { func, string, bool } from 'prop-types';
import styled from 'styled-components/native';
import { renderComponent } from 'recompose';

import styles from '../../styles';

const StyledTextInput = styled(TextInput)`
  display: flex;
  text-align: center;
  border-radius: ${styles.borderRadius};
  border: 2px solid ${styles.colors.bgColor};
  background-color: #fff;
  margin: 10px;
  font-size: 18;
  color: ${styles.colors.bgColor};
`;

// class component is used to avoid HRM error
class Input extends Component { // eslint-disable-line
  render() {
    return (
      <StyledTextInput
        placeholderTextColor={styles.colors.bgColor}
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
