import React from 'react';
import { Link } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
export default function Level4(props) {

  return (
    <>
      <Toast>
        <Toast.Header>
          <img src="../server/public/graysquare.png" className="rounded me-2" alt="" />
          <strong className="me-auto">Gray Square</strong>
          <small>Level 4</small>
        </Toast.Header>
        <Toast.Body>Where did your cursor go?</Toast.Body>
      </Toast>
    <div className="disappearing-cursor container-fluid">
      <div className='row justify-content-start align-items-center full-height m-0'>
        <Link style={{ height: 100, width: 100 }} className="gray-square m-5" to="/level5" />
      </div>
    </div>
    </>
  );
}
