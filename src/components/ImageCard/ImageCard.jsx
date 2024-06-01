import css from './ImageCard.module.css'
export default function ImageGallery({ photo }) {
    return <div>
        <img className={css.galleryItemPhoto} src={photo.urls.small} alt={photo.alt_description} />
    </div>
}