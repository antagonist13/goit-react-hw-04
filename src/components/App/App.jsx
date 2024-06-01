import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import ImageModal from '../ImageModal/ImageModal'
import { getImages } from '/src/images-api.js'
import { useEffect, useState } from 'react'

export default function App() {
    const [query, setQuery] = useState()
    const [isMounted, setIsMounted] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
        try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(query, page);
          console.log(data);
          setPhotos((prevState) => [...prevState, ...data]);
      } catch (error) {
            console.log(error);
            setIsError(true);
      } finally {
            setIsLoading(false);
      }
    }
    if (isMounted) {
        fetchImages();
    } else {
      setIsMounted(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

      const handleSearch = async (value) => {
    setQuery(value);
    setPage(1);
    setPhotos([]);
    }
      const handleLoadMore = async () => {
    setPage(page + 1);
    }
    
    return <div className={css.container}>
        <SearchBar setSearchData={handleSearch} />
        {isError && <ErrorMessage/>}
        {photos.length > 0 && <ImageGallery photos={photos} />}
        {isLoading && <Loader />}
        {photos.length > 0 && !isLoading && <LoadMoreBtn loadMore={handleLoadMore} />}
        <ImageModal />
</div>
}