import styled from '@emotion/styled';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { useState } from 'react';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin: 2rem 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const ExperienceCard = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform 0.2s, box-shadow 0.2s;
  border: ${props => props.highlight ? `2px solid ${props.theme.colors.accent}` : 'none'};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const ExperienceTitle = styled.h3`
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const ExperienceCompany = styled.h4`
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const ExperienceDate = styled.span`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.9rem;
  display: block;
  margin-bottom: 1rem;
`;

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ExperienceListItem = styled.li`
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 0.75rem;
  line-height: 1.6;
  position: relative;
  padding-left: 1.25rem;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.accent};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

function ResumePage() {
  const [highlightedCompany, setHighlightedCompany] = useState("Amazon Web Services");

  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Amazon Web Services",
      date: "Jul 2023 - Jul 2024",
      description: [
        "Built automated on-call querying and monitoring API for AWS Aurora (relational database service built for the cloud), increasing on-call efficiency by 19.6% and reducing downtime by 15.3%",
        "Established Profile Guided Optimization on distributed architectures and measured their performance withbenchmarks, cutting read and write latency by 13.4%",
        "Enhanced system security by implementing strong encryption practices using C++ and Git, reducing databreaches by 87% and increasing customer trust",
        "Supported the development and deployment of 4 machine learning models and modernized outdated code,improving system stability and increasing runtime efficiency by 7.6% with tools like Java and Python",
        "Reduced data retrieval time by 12.5% and improved system efficiency with optimized SQL queries",
      ],
      type: "work"
    },
    {
      title: "Machine Learning Engineer",
      company: "Raydiant Inc.",
      date: "Aug 2024 - Present",
      description: [
        "Delivered over 4000+ lines of production-ready code within 4 months in a fast-paced startup environment",
        "Developed and tested new endpoints for the data reporting API using Golang, enabling rapid multi-file datadownload with optimized AWS Redshift pagination for data retrieval within 3 seconds",
        "Built robust ETL pipelines using AWS S3, Athena, Lambda, Glue, EventBridge, and Terraform,enhancing report quality through rigorous data validation with cross-functional collaboration",
        "Leveraged Amazon Bedrock to develop a generative AI chatbot that assists customers by answeringfrequently asked questions from the knowledge base, improving support efficiency by 33%", 
      ],
      type: "work"
    },
    {
      title: "Data Scientist",
      company: "Rocket Mortgage",
      date: "May 2022 - Jul 2023",
      description: [
        "Experimented with Multitouch Attribution models, applying Explainable AI (XAI) method – SHAP, MLmodels, and Bayesian modeling using AWS Sagemaker and EMR, improving model recall by 16.8%",
        "Analyzed clients' opt-out journey to maximize spend effectiveness, tuning hyper parameters on MLOps",
        "Conducted A/B testing and causal inference analysis on commercials, projecting a 3.1% increase in views",
        "Received 4 prizes out of the 5 for Hack Week projects, including Biggest Impact, Most Innovative, BestGroup Collaboration, and Best Presentation award", 
      ],
      type: "work"
    },
    {
      title: "Data Science, MS",
      company: "University of Michigan",
      description: [
        "Specialized in Machine Learning and Data Science",
        "GPA: 3.9/4.0",
        "Teaching Assistant for Introduction to Statistics and Data Analysis",
        "Student Leadership Board at Michigan Institute for Data Science",
        "Member of the Architecture + Artificial Intelligence Laboratory",
      ],
      type: "education"
    },
    {
      title: "Architecture, Statistics, and Mathematics, BA(Hons)",
      company: "University of Toronto",
      description: [
        "GPA: 3.62/4.0",
        "Dean's List for 2019-2020 and 2020-2021",
      ],
      type: "education"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      company: "Amazon Web Services",
      date: "Dec 2024",
      description: [
        "Associate Level Certification",
        "Validates ability to design and implement distributed systems on AWS"
      ],
      type: "certification"
    }
  ];

  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');

  const handleCardClick = (company) => {
    setHighlightedCompany(company);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}assets/resume.pdf`;
    link.download = 'Jiangyue_Mao_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Header>
        <Title>Resume</Title>
        <DownloadButton onClick={handleDownload}>
          Download Resume <FaDownload style={{ marginLeft: '0.5rem' }} />
        </DownloadButton>
      </Header>

      <section>
        <SectionTitle>
          <FaBriefcase />
          Work Experience
        </SectionTitle>
        {workExperiences.map((experience, index) => (
          <ExperienceCard 
            key={index}
            highlight={experience.company === highlightedCompany}
            onClick={() => handleCardClick(experience.company)}
          >
            <ExperienceTitle>{experience.title}</ExperienceTitle>
            <ExperienceCompany>{experience.company}</ExperienceCompany>
            <ExperienceDate>{experience.date}</ExperienceDate>
            <ExperienceList>
              {experience.description.map((desc, i) => (
                <ExperienceListItem key={i}>
                  {desc.replace(/\s+/g, ' ')}
                </ExperienceListItem>
              ))}
            </ExperienceList>
          </ExperienceCard>
        ))}
      </section>

      <section>
        <SectionTitle>
          <FaCertificate />
          Certifications
        </SectionTitle>
        {certifications.map((certification, index) => (
          <ExperienceCard 
            key={index}
            highlight={certification.company === highlightedCompany}
            onClick={() => handleCardClick(certification.company)}
          >
            <ExperienceTitle>{certification.title}</ExperienceTitle>
            <ExperienceCompany>{certification.company}</ExperienceCompany>
            <ExperienceDate>{certification.date}</ExperienceDate>
            <ExperienceList>
              {certification.description.map((desc, i) => (
                <ExperienceListItem key={i}>
                  {desc.replace(/\s+/g, ' ')}
                </ExperienceListItem>
              ))}
            </ExperienceList>
          </ExperienceCard>
        ))}
      </section>

      <section>
        <SectionTitle>
          <FaGraduationCap />
          Education
        </SectionTitle>
        {educationExperiences.map((experience, index) => (
          <ExperienceCard 
            key={index}
            highlight={experience.company === highlightedCompany}
            onClick={() => handleCardClick(experience.company)}
          >
            <ExperienceTitle>{experience.title}</ExperienceTitle>
            <ExperienceCompany>{experience.company}</ExperienceCompany>
            <ExperienceList>
              {experience.description.map((desc, i) => (
                <ExperienceListItem key={i}>
                  {desc.replace(/\s+/g, ' ')}
                </ExperienceListItem>
              ))}
            </ExperienceList>
          </ExperienceCard>
        ))}
      </section>
    </Container>
  );
}

export default ResumePage; 