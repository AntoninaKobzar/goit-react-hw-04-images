    import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=34322980-08373f8358d1fe63d0b7301a8&image_type=photo&orientation=horizontal';
    const getImages = async (query, page) => {
  try {
    const response = await axios.get(`&per_page=12&page=${page}&q=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
    export default getImages;