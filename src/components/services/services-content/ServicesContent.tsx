// utils import
import {servicesList} from '@/utils'
// components import
import Heading from '@/components/utils/heading/Heading'
// styles import
import './services-content.css'

const ServicesContent = () => {
    return (
        <main className='services-content'>
            <Heading firstText='What' secondText='I Do' />

            <ul className='services-content__list'>
                {servicesList.map(({title, full_description}) => (
                    <li key={title} className='services-content__item'>
                        <div className='services-content__item-image'></div>
                        <h3 className='services-content__item-heading'>{title}</h3>
                        <p className='services-content__item-text'>{full_description}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default ServicesContent