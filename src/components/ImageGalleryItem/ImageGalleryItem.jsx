
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onModalOpen,
}) => {
  return (
    <>
      <li className={css.galleryItem}>
      <div onClick={() => onModalOpen(largeImageURL, tags)}>
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </div>
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  onModalOpen: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;



