// styles import
import './gallery.css'

const Gallery = () => {
    return (
        <section className='about-gallery__section section-container'>
            <h2 className='about-gallery__heading section-heading'>Gallery</h2>
            <p className='about-gallery__subheading'>Swipe to view more</p>

            <div className='about-gallery__container'>
                <div className='about-gallery__container-inner'>
                    <div className='about-gallery__image-container'></div>
                    <div className='about-gallery__image-container'></div>
                    <div className='about-gallery__image-container'></div>
                    <div className='about-gallery__image-container'></div>
                    <div className='about-gallery__image-container'></div>
                    <div className='about-gallery__image-container'></div>
                </div>
            </div>
        </section>
    )
}

export default Gallery