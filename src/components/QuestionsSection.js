import Accordion from "./Accordion";
import { HeaderTwo, SubSection } from "./styles/Questions.styled";

const QuestionsSection = ({ children, questionsAndAnswers }) => {
  return (
    <SubSection>
      <HeaderTwo>{children}</HeaderTwo>
      {questionsAndAnswers.map((qAndA) => {
        const id = questionsAndAnswers.indexOf(qAndA);
        const { question, answer } = qAndA;
        return (
          <Accordion key={id} question={question} answer={answer}></Accordion>
        );
      })}
    </SubSection>
  );
};

export default QuestionsSection;