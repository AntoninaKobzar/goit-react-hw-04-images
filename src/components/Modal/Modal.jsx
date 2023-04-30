import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';


function Modal({onModalClose,largeImage,tags}) {
  useEffect(() => {
    function handleClose(e) {
      if (e.key === 'Escape') {
        onModalClose();
      }
    }

    window.addEventListener('keydown', handleClose);

    return () => window.removeEventListener('keydown', handleClose);
  }, [onModalClose]);


  function handleCloseBackdrop(e){

    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  
    return (
      <div className={css.overlay} onClick={handleCloseBackdrop}>
        <div className={css.modal}>
          <img src={largeImage} alt={tags} width="1000"/>
        </div>
      </div>
    );
  }


Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags:PropTypes.string.isRequired,
};
export default Modal;


