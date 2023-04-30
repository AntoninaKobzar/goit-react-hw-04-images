import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import getImages from '../services/api';
import ImageGallery from '../components/ImageGallery';
import css from './App.module.css';

function App(){
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [tags, setTags] = useState('');
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  
useEffect(() => {
    if (query !== '') {
      fetchImages(query, page);
    }
}, [page, query]);
  
  const fetchImages = async (query, page) => {
    try {
      setIsLoading(true);
      const data = await getImages(query, page);
      if (data.hits.length === 0) {
        return Notify.failure('No matches found!');
      }
      setTotal(data.totalHits);
      setImages(prev => [...prev, ...data.hits]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
    const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const onModalOpen = (largeImage, tags) => {
    setShowModal(true);
    setLargeImage(largeImage);
    setTags(tags);
  };

  const onModalClose = () => {
    setShowModal(false);
    setLargeImage('');
    setTags('');
  };

    const totalPage = total / images.length;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery gallery={images} onModalOpen={onModalOpen} />
        )}
        {totalPage > 1 && !isLoading && images.length !== 0 && (
          <Button onClick={onLoadMore} />
        )}
        {showModal && (
          <Modal
            largeImage={largeImage}
            tags={tags}
            onModalClose={onModalClose}
          />
        )}
        {error &&(<span>Try another option</span>)}
      </div>
    );
};

export default App;
