import { StyledDiv } from "../components/Styled/ContentContainer";

function ProjectList({ link, name }) {
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
}

export default function About() {
  return (
    <StyledDiv>
      <title>About - JeyR</title>
      <p>
        Hello! My name is Jeyachandran Rathnam. I am a software engineer at Paycom. I
        completed my <a href="https://www.cs.ou.edu/~weaver/academic/publications/rathnam-2017a/materials/rathnam-2017a.pdf">Master&apos;s in Computer Science</a> at{" "}
        <a href="https://www.ou.edu/">University of Oklahoma</a>.       </p>
      <p>
        I LOVE National Parks, my personal goal is to visit all of
        them in my lifetime. I have been to 18 so far! My favourite so far
        is a tie between Zion and Glacier National Parks.
      </p>
      <p>
        My recent projects:
        <ul>
        <ProjectList
            link="https://usvisa.date/"
            name="US visa appointment tracking"
          />
          <ProjectList
            link="https://procreateswatcher.netlify.app/"
            name="ProCreate Swatch web app"
          />
          <ProjectList
            link="https://github.com/JeyRathnam/passgen-rs"
            name="Password Generator - Purely in Rust"
          />
          <ProjectList
            link="https://npsdb.netlify.app/"
            name="National Park DB"
          />
        </ul>
      </p>
      <p>
      <a href="https://github.com/JeyRathnam">My GitHub Profile</a>
      </p>
    </StyledDiv>
  );
}
