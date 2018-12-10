import { connect } from 'react-redux';

import Button from './Button';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { onPress, enableDispatch = true }) => {
  if (enableDispatch) {
    return { onPress: () => dispatch(onPress()) };
  }

  return { onPress };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
