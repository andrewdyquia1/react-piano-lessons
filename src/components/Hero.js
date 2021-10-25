import { StyledHero, TextContainer, HeroHeaderTwo } from "./styles/Hero.styled"

export default function Hero() {
    return (
        <StyledHero>
                <TextContainer>
                    <HeroHeaderTwo>Andrew Dyquiangco Piano Studio</HeroHeaderTwo>
                    <p className='paragraph'>
                        Piano lessons for all ages. Offering in person lessons in Orange County, California and online lessons.
                    </p>
                </TextContainer> 
        </StyledHero>
    )
}
