import { Skill } from 'pages/landing/ourSkillsBlock/ui/Skill';
import cpp from 'assets/ourSkills/c++icon.png';
import cSharp from 'assets/ourSkills/csicon.png';
import c from 'assets/ourSkills/cicon.png';
import linux from 'assets/ourSkills/linuxicon.png';
import python from 'assets/ourSkills/pyhtonicon.png';
import java from 'assets/ourSkills/javaicon.png';
import office from 'assets/ourSkills/officeicon.png';
import react from 'assets/ourSkills/react.svg';

export const skillsDesktop: (Skill & {
  line?: string;
})[] = [
  {
    x: 2,
    y: 1,
    image: cpp,
    description: 'STL, Boost, Qt, OpenGL, libcurl, Json, GoogleTest'
  },
  {
    x: 6,
    y: 2,
    image: cSharp,
    line: 'rb',
    description: '.Net6/7, Avalonya, .NET framework'
  },
  {
    x: 10,
    y: 1,
    image: c,
    line: 'rt',
    description: 'OpenGL, Low-level programming'
  },
  {
    x: 11,
    y: 5,
    image: linux,
    line: 'br',
    description: 'Bash, Command Line Interface'
  },
  {
    x: 1,
    y: 7,
    image: python,
    line: 'lb',
    description: 'Flask, Django, Pandas, Opencv, gRPC, Numpy'
  },
  {
    x: 5,
    y: 6,
    image: java,
    line: 'bl',
    description: 'Core Advanced, Spring, Hibernate, JDBC, MyBatis'
  },
  {
    x: 9,
    y: 7,
    image: office,
    line: 'rb',
    description: 'Word, Excel, PowerPoint, Access, Publisher'
  },
  {
    x: 6,
    y: 10,
    image: react,
    line: 'br',
    description: 'React, JavaScript frameworks, HTML5, CSS3'
  }
];

export const skillsMobile: (Skill & {
  line?: string;
})[] = [
  {
    x: 5,
    y: 1,
    image: cpp,
    description: 'STL, Boost, Qt, OpenGL, libcurl, Json, GoogleTest'
  },
  {
    x: 1,
    y: 2,
    image: cSharp,
    line: 'lb',
    description: '.Net6/7, Avalonya, .NET framework'
  },
  {
    x: 2,
    y: 6,
    image: c,
    line: 'br',
    description: 'OpenGL, Low-level programming'
  },
  {
    x: 6,
    y: 5,
    image: linux,
    line: 'br',
    description: 'Bash, Command Line Interface'
  },
  {
    x: 5,
    y: 9,
    image: python,
    line: 'bl',
    description: 'Flask, Django, Pandas, Opencv, gRPC, Numpy'
  },
  {
    x: 1,
    y: 10,
    image: java,
    line: 'lb',
    description: 'Core Advanced, Spring, Hibernate, JDBC, MyBatis'
  },
  {
    x: 2,
    y: 14,
    image: office,
    line: 'br',
    description: 'Word, Excel, PowerPoint, Access, Publisher'
  },
  {
    x: 6,
    y: 13,
    image: react,
    line: 'br',
    description: 'React, JavaScript frameworks, HTML5, CSS3'
  }
];
