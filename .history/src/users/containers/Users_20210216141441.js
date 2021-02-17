import React from 'react';
import { connect } from 'react-redux';
const Users = () => {
  return (
    <div>
      Users
      <button onClick={}>Loading users</button>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    counterValue: state.count
  }
}
export default connect(mapStateToProps)(Users);
