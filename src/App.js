import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'

const App = props => {

  const dispatch = useDispatch();

  const removeItem = item => {
    // dispatch an action here to remove an item
    // console.log("dispatch REMOVE_FEAT with payload: ", item)
    dispatch({type: "REMOVE_FEAT", payload: item})
  };

  const addItem = item => {
    // dipsatch an action here to add an item
    // console.log("dispatch ADD_FEAT with payload item: ", item)
    dispatch({type: "ADD_FEAT", payload: item});
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeat={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} car={props.car} addFeat={addItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("APP STATE: ", state)
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
}

export default connect(mapStateToProps, {})(App);
