// utils import
import {careerHighlights} from '@/utils'
// components import
import Button from '@/components/ui/button/Button'
// styles import
import './career.css'

const Career = () => {
    const shortCareerHighlights = careerHighlights.slice(0, 3)

    return (
        <section className='about-career__section section-container'>
            <h2 className="about-career__heading section-heading">Career</h2>

            <div className='about-career__section-content'>
                <div className='about-career__year-sidebar flex-column'>
                    <p className='about-career__year playfair-display'>2016</p>
                    <p className='about-career__year playfair-display'>2017</p>
                    <p className='about-career__year playfair-display'>2019</p>
                </div>

                <div className='about-career__highlights flex-column'>
                    {shortCareerHighlights.map(({year, highlights}) => (
                        <div className='about-career__highlights-year-group' key={year}>
                            <ul className='about-career__highlight-list'>
                                {highlights.map((highlight, index) => (
                                    <li key={index} className='about-career__highlight-item'>{highlight}</li>
                                ))}
                            </ul>

                            <h4 className='about-career__year-heading'>{year}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className='about-career__button'>
                <Button path='/career' label='View Career Highlights' link='true' />
            </div>
        </section>
    )
}

export default Career