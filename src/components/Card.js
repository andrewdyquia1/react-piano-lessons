import { CardHeaderTwo, StyledCard, PerHour, CommentContainer, PriceContainer } from "./styles/Card.styled.js"
import { comments } from '../data'
export default function Card( { length, price, num, secondNum }) {
    return (
        <StyledCard>
            
                <PriceContainer>
                    <h4 className='header-three'>{length}</h4>
                    <CardHeaderTwo>{price} <PerHour>/ 4-week month *</PerHour></CardHeaderTwo>
                </PriceContainer>
                <CommentContainer>
                    {comments[num][secondNum].map((comment) => {
                        const id = comments[num][secondNum].indexOf(comment)
                        const { text } = comment
                        return(
                            <li key={id}>{text}</li>
                        )
                    })}
                </CommentContainer>
        </StyledCard>
    )
}
