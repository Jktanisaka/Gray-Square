import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
export default function Level1(Props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/level2');
  }
  return (
  <>
    <Toast>
      <Toast.Header>
        <img src="../server/public/graysquare.png" className="rounded me-2" alt="" />
        <strong className="me-auto">Gray Square</strong>
        <small>Level 1</small>
      </Toast.Header>
      <Toast.Body>Hi!, I&apos;m a Gray Square! Can you click me?</Toast.Body>
    </Toast>
    <div className="x">
      <div className='y'>
        <button className="gray-square" onClick={handleClick} />
      </div>
    </div>
  </>
  );
}
