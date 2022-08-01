import l from "../content/Projects/Projects.module.scss";
import f from "@styles/fonts.module.scss";
import Header from "@components/modules/Header/header";
import ProjectMin from "@components/project-min";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: red;
`;

const MoreProjects = () => {
  return (
    <Wrapper>
      <section className={l["Section"]} id="projects">
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>03.1.</span>
          <span className={f["Section-Heading-1"]}>More Projects</span>
        </h2>
        <ProjectMin image={""} name={""} description={""} />
      </section>
    </Wrapper>
  );
};

export default MoreProjects;
