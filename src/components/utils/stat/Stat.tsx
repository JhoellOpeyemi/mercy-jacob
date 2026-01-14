// styles import
import './stat.css'

interface StatProps {
    number: string,
    firstText: string,
    secondText: string,
}

const Stat = ({number, firstText, secondText}: StatProps) => {
    return (
        <p className="stat flex-column">
           <span>{number}</span>
            <span>{firstText} <br /> {secondText}</span>
        </p>
    )
}

export default Stat;