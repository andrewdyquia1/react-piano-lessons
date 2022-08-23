import { StyledServiceItem, CardContainer } from "./styles/ServiceItem.styled"
import { lessonPrices } from '../data'
import Card from "./Card.js"
export default function ServiceItem( {lessonType, num }) {
    return (
        <StyledServiceItem>
            <h3 className='header-three'>{lessonType}</h3>
            <CardContainer>
                {lessonPrices[num].map((lessonPrice) => {
                const id = lessonPrices[num].indexOf(lessonPrice)
                const { length, price } = lessonPrice
    
                return(
                    <Card key={id} length={length} price={price} num={num} secondNum={id}></Card>
                )
            })}
            </CardContainer>
        </StyledServiceItem>
    )
}


