import { StyledServices } from './styles/Services.styled'
import { lessonTypes } from '../data'
import ServiceItem from "./ServiceItem.js"

export default function Services() {
    return (
        <StyledServices id='services'>
            <h2>Services</h2>
            {lessonTypes.map((type) => {
                const id = lessonTypes.indexOf(type)
                const { lessonType } = type
                return(
                    <ServiceItem key={id} lessonType={lessonType} num={id}></ServiceItem>
                )
            })}

            <p>* USD</p>
        </StyledServices>
    )
}


