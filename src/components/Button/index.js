import { connect } from 'react-redux';

import Button from './Button';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => ({
  onPress: () => dispatch(props.onPress),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
