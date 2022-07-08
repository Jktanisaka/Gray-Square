import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
export default function Level2(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'passedLevel':
        return {
          passedLevel: true
        };
      case 'randomizeDimensions':
        return {
          passedLevel: false,
          count: state.count + 1,
          topDimension: Math.random() * 500,
          leftDimension: Math.random() * 1500
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer,
    {
      count: 0,
      topDimension: 100,
      leftDimension: 100
    });
  if (state.count === 6) {
    return (
      <>
      <Toast>
      <Toast.Header>
        <img src="../server/public/graysquare.png" className="rounded me-2" alt="" />
        <strong className="me-auto">Gray Square</strong>
        <small>Level 2</small>
      </Toast.Header>
      <Toast.Body>Im tired...</Toast.Body>
    </Toast>
      <div style={{ position: 'relative' }}>
        <Link className='gray-square' style={{ top: 300, left: 500, position: 'absolute' }}
         to="/level3" />
      </div>
      </>
    );
  }
  return (
  <>
    <Toast>
      <Toast.Header>
        <img src="../server/public/graysquare.png" className="rounded me-2" alt="" />
        <strong className="me-auto">Gray Square</strong>
        <small>Level 2</small>
      </Toast.Header>
      <Toast.Body>Catch Me!</Toast.Body>
    </Toast>
    <div style={{ position: 'relative' }}>
      <button style={{ top: state.topDimension, left: state.leftDimension, position: 'absolute' }}
      onMouseEnter={() => { dispatch({ type: 'randomizeDimensions' }); }}></button>
    </div>
    </>
  );
}
