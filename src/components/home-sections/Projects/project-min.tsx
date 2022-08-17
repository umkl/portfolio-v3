import styled from "styled-components";
import { Tag } from "../../elements/Tag";
import GithubIcon from "../../assets/Icons/github.svg";
import pm from "./project-min.module.scss";
import Techs from "../../elements/Techs";

const Wrapper = styled.div`
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  width: 400px;
  /* height: 500px; */

  border-radius: 5px;
  background-color: #454545;
  border-radius: 20px;
  position: relative;
  margin: 20px;
`;

const ImageStyle = styled.div`
  height: 100px;
  width: 100px;
  background-color: green;
`;

const Heading = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "Inter";
  color: white;
  margin: 8px;
`;

const FixedSideRow = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  margin: 8px;
`;

const Date = styled.div`
  font-size: 20px;

  color: #81899b;
`;

const DescriptionText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2775px;
  line-height: 20px;
  color: #c2cad1;
`;

interface Props {
  image: string;
  name: string;
  description: string;
}

const ProjectMin = ({ image, name, description }: Props) => {
  const iconStyle = {
    "stroke": "#2a60df",
    "path": {
      "stroke": "#2a60df",
    },
  };
  return (
    <Wrapper>
      <ImageStyle>image</ImageStyle>
      <Heading>Jamboree Projekt</Heading>
      <Date>2020</Date>
      <Tag />
      <DescriptionText>asdjflkjasd</DescriptionText>
      <Techs />
      <FixedSideRow>
        <GithubIcon height="30px" width="30px" className={pm["icon"]} />
        <GithubIcon height="30px" width="30px" className={pm["icon"]} />
      </FixedSideRow>
    </Wrapper>
  );
};

export default ProjectMin;
