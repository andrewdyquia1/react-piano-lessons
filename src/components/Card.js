import { CardHeaderTwo, StyledCard, PerHour, CommentContainer, PriceContainer } from "./styles/Card.styled.js"
import { comments } from '../data'
export default function Card( { length, price, num, secondNum }) {
    return (
        <StyledCard>
            
                <PriceContainer>
                    <h3 className='header-three'>{length}</h3>
                    <CardHeaderTwo>{price} <PerHour>/ week *</PerHour></CardHeaderTwo>
                </PriceContainer>
                <CommentContainer>
                    {comments[num][secondNum].map((comment) => {
                        const { text } = comment
                        return(
                            <li>{text}</li>
                        )
                    })}
                </CommentContainer>
        </StyledCard>
    )
}
