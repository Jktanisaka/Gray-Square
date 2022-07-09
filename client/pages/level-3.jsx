import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Toast } from 'react-bootstrap';

export default function Level3(props) {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'passedLevel':
        return {
          passed: true
        };
      case 'randomizeDimensions':
        return {
          passed: true,
          topDimension: Math.random() * 500,
          leftDimension: Math.random() * 1000
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer,
    {
      topDimension: 0,
      leftDimension: 0
    });

  if (state.passed === true) {
    return (
      <div className='position-relative'>
        <Toast className='position-absolute' style={{ top: 0, left: 0 }}>
        <Toast.Header>
          <img src="graysquare.png" className="rounded me-2 toast-img" alt="" />
          <strong className="me-auto">Gray Square</strong>
          <small>Level 3</small>
        </Toast.Header>
        <Toast.Body>Find me!</Toast.Body>
      </Toast>
        <div className="container position-relative">
          <div className='row justify-content-center align-items-center fade-out full-height'>
            <button style={{ height: 100, width: 100 }} className="l3-button shadow-none" disabled></button>
          </div>
            <Link className='gray-square l3-button-hidden position-absolute' to="/level4" style={{ top: state.topDimension, left: state.leftDimension }}/>
        </div>
      </div>
    );
  }
  return (
    <div className='position-relative'>
      <Toast className='position-absolute' style={{ top: 0, left: 0 }}>
      <Toast.Header>
        <img src="graysquare.png" className="rounded me-2 toast-img" alt="" />
        <strong className="me-auto">Gray Square</strong>
        <small>Level 3</small>
      </Toast.Header>
      <Toast.Body>Find me!</Toast.Body>
    </Toast>
    <div className="container">
      <div className='row justify-content-center align-items-center full-height'>
          <button style={{ height: 100, width: 100 }} className="l3-button shadow-none" onMouseEnter={() => { dispatch({ type: 'randomizeDimensions' }); }} ></button>
      </div>
    </div>
    </div>
  );
}
