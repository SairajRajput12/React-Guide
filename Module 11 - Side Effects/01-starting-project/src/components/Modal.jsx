import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open , children ,onClose}) {
  const dialog = useRef();

  useEffect(()=>{
    if(open){
      dialog.current.showModal(); 
    }
    else{
      dialog.current.close(); 
    }
  },[]);

  // dialog.current.showModal(); 
  // Lecture 181: back drop of the modal component will only possible using the showModal methood. 

  return createPortal(
    <dialog className="modal" ref={dialog} open={open} onClose={onClose} >
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
