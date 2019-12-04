import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  height: 100vh;
  grid-template-rows: auto;
  text-align: center;
  align-items: center;
  padding: 2rem;
`;

const Blog = () => (
  <Section>
    <p>
      I will update this section as soon as I finish my first blog. Wish me
      luck. 🙏
    </p>
  </Section>
);

export default Blog;
