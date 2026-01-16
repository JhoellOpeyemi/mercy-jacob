// components import
import ProcessCard from './process-card/ProcessCard'
// utils import
import {processesList} from '@/utils'
// styles import 
import './processes.css'

const Processes = () => {
    return (
        <ul className='processes__list'>
            {processesList.map(({title, description}: {title: string, description: string}) => (
                <>
                    <ProcessCard title={title} description={description} />
                    <div className='process-connector' />
                </>
            ))}
        </ul>
    )
}

export default Processes