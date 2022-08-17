import l from "./Projects/projects.module.scss";
import f from "@styles/fonts.module.scss";
import Header from "@components/modules/Header/header";
import ProjectMin from "@components/project-min";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const MoreProjects = () => {
  return (
    <Wrapper>
      <section className={l["Section"]} id="projects">
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>03.1.</span>
          <span className={f["Section-Heading-1"]}>More Projects</span>
        </h2>
        <ContentWrapper>
          <ProjectMin image={""} name={""} description={""} />
          <ProjectMin image={""} name={""} description={""} />
          <ProjectMin image={""} name={""} description={""} />
        </ContentWrapper>
      </section>
    </Wrapper>
  );
};

export default MoreProjects;
