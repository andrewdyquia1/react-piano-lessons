import { StyledServices } from './styles/Services.styled'
import { lessonTypes } from '../data'
import ServiceItem from "./ServiceItem.js"

export default function Services() {
    return (
        <StyledServices id='services'>
            {lessonTypes.map((type) => {
                const { id, lessonType } = type
                return(
                    <ServiceItem key={id} lessonType={lessonType} num={id - 1}></ServiceItem>
                )
            })}

            <p>* USD</p>
        </StyledServices>
    )
}


