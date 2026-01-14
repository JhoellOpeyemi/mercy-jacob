// styles import
import './heading.css'

interface HeadingProps {
    firstText: string,
    secondText: string,
}

const Heading = ({firstText, secondText}: HeadingProps) => {
    return (
        <h1 className='page-heading'>
            <span className='playfair-display'>{firstText}</span> <br />{secondText}
        </h1>
    )
}

export default Heading