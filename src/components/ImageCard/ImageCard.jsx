export default function ImageGallery( { photo }) {
    return <div>
        <img src={photo.urls.small} alt={photo.alt_description} />
    </div>
}