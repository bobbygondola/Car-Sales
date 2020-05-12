import React from 'react';
//import connect
const AddedFeature = props => {
  return (
    <li>
      
      <button onClick={() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

//mstp-whatever state that comp needs.
export default AddedFeature;//removefeature
