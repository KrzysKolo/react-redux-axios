import React from 'react';
import { connect } from 'react-redux';
import { inc } from './redux';
const Users = () => {
  const { counterValue, addValue }= this.props
  return (
    <div>
      Users
      <button onClick={() => addValue()}>Loading users</button>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    counterValue: state.count
  }
};
function mapDispatchToProps(dispatch){
  return {
    addValue: () => dispatch(inc())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
