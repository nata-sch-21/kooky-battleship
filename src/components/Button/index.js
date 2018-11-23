import React from 'react';
import { connect } from 'react-redux';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native'

const StyledButton = styled.Button`
	border-radius: 3;
	border-color: #fff;
`;

const AppButton = ({ onPress, title = '' }) => <StyledButton onPress={onPress} title={title} />;


const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => ({
	onPress: () => props.action(),
});


export default connect(mapStateToProps, mapDispatchToProps)(AppButton);