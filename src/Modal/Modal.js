import React from 'react';
import './Modal.scss';

export function Modal({ show, children, onClose }) {
  return (
    <>
      <div className={`modal${show ? '' : ' modal--hidden'}`}>
        {show ? children : null}
      </div>
      { show && <div className="modal-overlay" onClick={onClose}>
          <span className="modal-overlay__close" onClick={onClose}>&times;</span>
        </div>}
    </>
  );
}