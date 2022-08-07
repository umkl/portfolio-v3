import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Techs = () => {
  const items = ["Javascript", "react"];
  return (
    <Wrapper>
      {items.map((item, index) => {
        return (
          <div key={index}>
            {item}
            {index < items.length - 1 && " · "}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Techs;
