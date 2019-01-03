import { connect } from 'react-redux';

import { battlefield } from '../../reducers/battlefields';

import BattleField from './BattleField';

const mapStateToProps = (state, { playerType }) => ({
  battlefield: battlefield(state, playerType),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);
