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
        Hello! My name is Jeyachandran Rathnam. I am software engineer. I
        currently work at Paycom working on custom payroll solutions. I
        completed my Master&apos;s in Computer Science from{" "}
        <a href="https://www.ou.edu/">University of Oklahoma</a>. I did write a
        thesis which is available{" "}
        <a href="https://www.cs.ou.edu/~weaver/academic/publications/rathnam-2017a/materials/rathnam-2017a.pdf">
          here
        </a>
        .
      </p>
      <p>
        I LOVE National parks in the US, my personal goal is to visit all of
        them in my lifetime. I have been to 18 so far! My favourite one so far
        is a tie between Zion and Glacier National Park.
      </p>
      <p>
        My personal projects (most are WIP):
        <ul>
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
        My GitHub Profile - <a href="https://github.com/JeyRathnam">Link</a>
      </p>
    </StyledDiv>
  );
}
