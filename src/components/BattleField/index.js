import { connect } from 'react-redux';

import { battlefieldSelector } from '../../reducers/battlefields';

import BattleField from './BattleField';

const mapStateToProps = (state, { playerType }) => battlefieldSelector(state, playerType);

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BattleField);
