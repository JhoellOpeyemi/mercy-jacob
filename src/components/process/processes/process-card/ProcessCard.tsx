// styles import
import './process-card.css'

interface ProcessCardProps {
    title: string,
    description: string
}

const ProcessCard = ({title, description}: ProcessCardProps) => {
    return (
        <li key={title} className='process__item'>
            <h3 className='process__heading'>{title}</h3>
            <p className='process__desc'>{description}</p>
        </li>
    )
}

export default ProcessCard