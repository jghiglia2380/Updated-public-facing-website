import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';

// Styled components
const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '8.5in',
  margin: '0 auto',
  padding: '0.5in',
  fontFamily: '"Inter", sans-serif',
  lineHeight: 1.6,
  color: '#333',
}));

const Header = styled(Box)(({ theme }) => ({
  marginBottom: '1.5rem',
  borderBottom: '2px solid #4F46E5',
  paddingBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 24,
  color: '#4F46E5',
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  color: '#4F46E5',
  fontSize: 28,
  marginBottom: '1.5rem',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#4338CA',
  fontSize: 20,
  marginTop: '2rem',
  marginBottom: '1rem',
  borderBottom: '1px solid #E5E7EB',
  paddingBottom: '0.5rem',
}));

const SubsectionTitle = styled(Typography)(({ theme }) => ({
  color: '#6366F1',
  fontSize: 16,
  marginTop: '1.5rem',
  marginBottom: '0.5rem',
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: '2rem',
}));

const Callout = styled(Paper)(({ theme }) => ({
  backgroundColor: '#EFF6FF',
  borderLeft: '4px solid #3B82F6',
  padding: '1rem',
  margin: '1rem 0',
  borderRadius: 4,
}));

const Important = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FEF3C7',
  borderLeft: '4px solid #F59E0B',
  padding: '1rem',
  margin: '1rem 0',
  borderRadius: 4,
}));

const StyledTable = styled(Table)(({ theme }) => ({
  marginTop: '1.5rem',
  marginBottom: '1.5rem',
  '& th': {
    backgroundColor: '#F3F4F6',
    fontWeight: 600,
  },
  '& th, & td': {
    border: '1px solid #E5E7EB',
    padding: '0.75rem',
  },
}));

const StepBox = styled(Paper)(({ theme }) => ({
  border: '1px solid #E5E7EB',
  padding: '1rem',
  margin: '1rem 0',
  borderRadius: 4,
}));

const StepNumber = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  width: 24,
  height: 24,
  backgroundColor: '#4F46E5',
  color: 'white',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '24px',
  marginRight: '0.5rem',
  fontWeight: 'bold',
}));

const TwoColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const ColumnItem = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const Footer = styled(Box)(({ theme }) => ({
  marginTop: '3rem',
  paddingTop: '1rem',
  borderTop: '2px solid #4F46E5',
  fontSize: 12,
  color: '#6B7280',
  textAlign: 'center',
}));

const PageBreak = styled(Box)(({ theme }) => ({
  pageBreakAfter: 'always',
  '@media print': {
    display: 'block',
  },
  '@media screen': {
    display: 'none',
  },
}));

// Define interfaces for the data structure
interface GettingStartedStep {
  number: number;
  title: string;
  description: string;
}

// Main component
const QuickStartGuide: React.FC = () => {
  // Data for getting started steps
  const gettingStartedSteps: GettingStartedStep[] = [
    {
      number: 1,
      title: "Log in to your teacher dashboard",
      description: "Visit app.pflacademy.co/login and sign in with your credentials. First-time users will need to create an account using the invitation email sent by your school administrator."
    },
    {
      number: 2,
      title: "Create your class",
      description: "From your dashboard, click "Add Class" and enter your class details. You can create multiple classes for different periods or sections. Each class receives a unique join code for students."
    },
    {
      number: 3,
      title: "Browse curriculum",
      description: "Navigate to the "Curriculum" tab to explore the 15 financial literacy standards and their associated chapters. Each chapter includes both student-facing content and teacher guides."
    },
    {
      number: 4,
      title: "Assign content to your class",
      description: "Select a chapter and click "Assign to Class" to make it available to your students. You can set start and due dates, and choose whether to include assessments."
    },
    {
      number: 5,
      title: "Review teacher guides",
      description: "Each chapter includes comprehensive teacher guides for both Day 1 and Day 2 content. These guides provide detailed lesson plans, discussion prompts, and facilitation tips."
    },
    {
      number: 6,
      title: "Invite your students",
      description: "Share your class join code with students. They can create accounts and join your class at app.pflacademy.co/student."
    },
    {
      number: 7,
      title: "Monitor progress",
      description: "Use the "Progress" tab to track student completion and assessment scores. You can view both class-wide and individual student data."
    }
  ];

  // Data for learning model
  const learningModelData = [
    {
      day: "Day 1: Content Exploration",
      activities: [
        "Core concept introduction",
        "Key vocabulary and principles",
        "Real-world examples and case studies",
        "Discussion prompts and reflection",
        "Initial skill builder introduction"
      ]
    },
    {
      day: "Day 2: Learning Lab",
      activities: [
        "Hands-on application stations",
        "Interactive skill builders",
        "Problem-solving activities",
        "Portfolio building exercises",
        "Real-world decision-making practice"
      ]
    }
  ];

  return (
    <StyledContainer>
      <Header>
        <Logo variant="h4">PFL Academy</Logo>
        <Box>Quick Start Guide for Teachers</Box>
      </Header>
      
      <Section>
        <PageTitle variant="h1">Welcome to PFL Academy</PageTitle>
        <Typography paragraph>
          This quick start guide will help you navigate the PFL Academy platform and get the most out of our 
          comprehensive financial literacy curriculum. Here you'll find everything you need to begin teaching 
          financial literacy with confidence!
        </Typography>
        
        <Callout elevation={0}>
          <Typography>
            <strong>Did you know?</strong> PFL Academy's curriculum aligns with all 15 standards recommended by 
            the Council for Economic Education and the Jump$tart Coalition for Personal Financial Literacy.
          </Typography>
        </Callout>
      </Section>
      
      <Section>
        <SectionTitle variant="h2">1. Platform Overview</SectionTitle>
        <Typography paragraph>
          PFL Academy is a complete financial literacy education platform designed for high school students. 
          Our curriculum spans 15 standards with multiple chapters per standard, using a unique two-day 
          learning model that combines core content with hands-on application.
        </Typography>
        
        <TwoColumn>
          <ColumnItem>
            <SubsectionTitle variant="h3">Core Components:</SubsectionTitle>
            <List>
              <ListItem>
                <ListItemText primary={<Typography><strong>Student-Facing Content</strong> - Engaging lessons with interactive elements</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Typography><strong>Teacher Guides</strong> - Detailed lesson plans with discussion prompts and facilitation tips</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Typography><strong>Skill Builders</strong> - Interactive tools for practical application</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Typography><strong>Assessments</strong> - Pre-built evaluations with automated grading</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Typography><strong>Resource Library</strong> - Supplementary materials and downloads</Typography>} />
              </ListItem>
            </List>
          </ColumnItem>
          <ColumnItem>
            <SubsectionTitle variant="h3">Key Standards Covered:</SubsectionTitle>
            <List>
              <ListItem>
                <ListItemText primary="Income & Careers" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Taxes" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Financial Services" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Saving & Investing" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Credit & Debt Management" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Risk Management & Insurance" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Housing & Transportation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Career Readiness" />
              </ListItem>
            </List>
          </ColumnItem>
        </TwoColumn>
      </Section>
      
      <Section>
        <SectionTitle variant="h2">2. Two-Day Learning Model</SectionTitle>
        <Typography paragraph>
          Each chapter in PFL Academy follows our proven two-day learning model, designed to build both 
          knowledge and practical skills.
        </Typography>
        
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell width="50%">Day 1: Content Exploration</TableCell>
              <TableCell width="50%">Day 2: Learning Lab</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <List>
                  {learningModelData[0].activities.map((activity, index) => (
                    <ListItem key={index} sx={{ p: 0, m: 0 }}>
                      <ListItemText primary={activity} />
                    </ListItem>
                  ))}
                </List>
              </TableCell>
              <TableCell>
                <List>
                  {learningModelData[1].activities.map((activity, index) => (
                    <ListItem key={index} sx={{ p: 0, m: 0 }}>
                      <ListItemText primary={activity} />
                    </ListItem>
                  ))}
                </List>
              </TableCell>
            </TableRow>
          </TableBody>
        </StyledTable>
        
        <Important elevation={0}>
          <Typography>
            <strong>Pro Tip:</strong> The Day 1 content is designed to take approximately 55 minutes of class time, 
            while Day 2 Learning Labs are flexible and can be extended or shortened based on your needs.
          </Typography>
        </Important>
      </Section>
      
      <PageBreak />
      
      <Section>
        <SectionTitle variant="h2">3. Getting Started with PFL Academy</SectionTitle>
        
        {gettingStartedSteps.map((step) => (
          <StepBox key={step.number} elevation={0}>
            <Typography paragraph>
              <StepNumber>{step.number}</StepNumber> <strong>{step.title}</strong>
            </Typography>
            <Typography paragraph>{step.description}</Typography>
          </StepBox>
        ))}
      </Section>
      
      <Section>
        <SectionTitle variant="h2">4. Finding Resources</SectionTitle>
        
        <SubsectionTitle variant="h3">Teacher Guides</SubsectionTitle>
        <Typography paragraph>
          Teacher guides can be accessed through the "Teacher Resources" tab or directly from any chapter page. 
          Look for the "Teacher Guide" button at the top of each chapter.
        </Typography>
        
        <SubsectionTitle variant="h3">Downloadable Materials</SubsectionTitle>
        <Typography paragraph>
          Each chapter includes downloadable worksheets, handouts, and supplementary materials. 
          These can be found in the "Resources" section of each chapter page.
        </Typography>
        
        <SubsectionTitle variant="h3">Assessment Tools</SubsectionTitle>
        <Typography paragraph>
          Pre-built assessments are available for each chapter. Access them through the "Assessments" tab 
          on your dashboard or within individual chapters.
        </Typography>
        
        <SubsectionTitle variant="h3">Professional Development</SubsectionTitle>
        <Typography paragraph>
          Additional training materials, webinars, and PD resources are available in the "Professional Development" 
          section of your dashboard.
        </Typography>
        
        <Callout elevation={0}>
          <Typography>
            <strong>Looking for more?</strong> Visit the <a href="https://support.pflacademy.co">PFL Academy Support Center</a> for 
            additional resources, including video tutorials, FAQs, and community forums.
          </Typography>
        </Callout>
      </Section>
      
      <Section>
        <SectionTitle variant="h2">5. Need Assistance?</SectionTitle>
        <Typography paragraph>
          Our support team is here to help! Contact us through any of these channels:
        </Typography>
        
        <List>
          <ListItem>
            <ListItemText 
              primary={<Typography><strong>Email:</strong> <a href="mailto:support@pflacademy.co">support@pflacademy.co</a></Typography>} 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Typography><strong>Live Chat:</strong> Available on your dashboard during school hours</Typography>} 
            />
          </ListItem>
        </List>
        
        <Typography paragraph>
          For custom training and professional development, use the Custom Training Request Form available in your dashboard.
        </Typography>
      </Section>
      
      <Footer>
        <Typography>© 2025 PFL Academy. All rights reserved.</Typography>
        <Typography>
          This quick start guide is for teacher use only. For the latest version, visit your teacher dashboard.
        </Typography>
      </Footer>
    </StyledContainer>
  );
};

export default QuickStartGuide;