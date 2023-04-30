    
    import PropTypes from 'prop-types';
    import ImageGalleryItem from '../ImageGalleryItem';
    import css from './ImageGallery.module.css';

    export const ImageGallery = ({ gallery, onModalOpen }) => {
  return (
    <ul className={css.gallery}>
      {gallery.map(({ webformatURL, largeImageURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onModalOpen={onModalOpen}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onModalOpen: PropTypes.func.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};


    export default ImageGallery;



