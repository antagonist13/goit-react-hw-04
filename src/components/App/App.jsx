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
    const [query, setQuery] = useState('office')
    useEffect(() => {
        console.log(query);
        async function fetchImages() {
      try {
          const data = await getImages( query );
          console.log(data);
      } catch (error) {
          console.log(error);
      }
        }
        fetchImages()
    }, [query])

    return <div className={css.container}>
        <SearchBar setSearchData={setQuery} />
        <ImageGallery />
        <Loader />
        <ErrorMessage />
        <LoadMoreBtn />
        <ImageModal />
</div>
}