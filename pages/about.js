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
        completed my <a href="https://www.cs.ou.edu/~weaver/academic/publications/rathnam-2017a/materials/rathnam-2017a.pdf">Master&apos;s in Computer Science</a> at The University of Oklahoma.       
        </p>
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
            name="US Visa Appointment Tracking"
          />
          <ProjectList
            link="https://procreateswatcher.netlify.app/"
            name="ProCreate Swatch"
          />
          <ProjectList
            link="https://github.com/JeyRathnam/passgen-rs"
            name="Password Generator (purely in rust)"
          />
          <ProjectList
            link="https://npsdb.netlify.app/"
            name="National Parks DB"
          />
        </ul>
      </p>
      <p>
      <a href="https://github.com/JeyRathnam">My GitHub Profile</a>
      </p>
    </StyledDiv>
  );
}
