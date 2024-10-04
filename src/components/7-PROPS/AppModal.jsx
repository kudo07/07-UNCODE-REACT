import React, { useState } from 'react';
import Modal from './Modal';

const AppModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <main>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && (
        <Modal onClose={handleClose}>
          <h1>Modal</h1>
          <p>
            <i>children</i> can be whatever we want.
          </p>
          <p>(and it can be different each time we use Modal)</p>
        </Modal>
      )}
    </main>
  );
};

export default AppModal;
