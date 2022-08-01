import styled from "styled-components";
import { Tag } from "./Tag";
import GithubIcon from "../../assets/Icons/github.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  background-color: gray;
  border-radius: 20px;
  position: relative;
  
`;

const ImageStyle = styled.div`
  height: 100px;
  width: 100px;
  background-color: green;
`;

const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const FixedSideRow = styled.div`
  background-color: red;
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Date = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const DescriptionText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

interface Props {
  image: string;
  name: string;
  description: string;
}

const ProjectMin = ({ image, name, description }: Props) => {
  return (
    <Wrapper>
      <ImageStyle>image</ImageStyle>
      <Heading>Jamboree Projekt</Heading>
      <Date>2020</Date>
      <Tag />
      <DescriptionText>asdjflkjasd</DescriptionText>
      <FixedSideRow>
        <GithubIcon height="50px" width="50px" />
        <GithubIcon height="50px" width="50px" />
      </FixedSideRow>
    </Wrapper>
  );
};

export default ProjectMin;
