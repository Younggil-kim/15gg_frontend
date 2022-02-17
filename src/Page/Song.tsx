import React from "react";
import { connect } from "react-redux";

const SongList = () => {
  return <div>SongList</div>;
};
const mapStateToProps = (state: any) => {
  console.log(state);
  return state;
};


export default connect(mapStateToProps)(SongList)