import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow,
  List,
  ListItem,
  ListItemText
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

const TimelineContainer = styled(Box)(({ theme }) => ({
  margin: '1.5rem 0',
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: '1.5rem',
}));

const TimelineMarker = styled(Box)(({ theme }) => ({
  flex: '0 0 30px',
  position: 'relative',
  '&::before': {
    content: '""',
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: '#4F46E5',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  '&::after': {
    content: '""',
    width: 2,
    height: 'calc(100% + 1.5rem)',
    backgroundColor: '#E5E7EB',
    position: 'absolute',
    top: 16,
    left: 7,
  },
  '&:last-child::after': {
    display: 'none',
  },
}));

const TimelineContent = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingBottom: '1.5rem',
}));

const TimelineDate = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#4F46E5',
  marginBottom: '0.5rem',
}));

const TwoColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const ColumnItem = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const Checklist = styled(List)(({ theme }) => ({
  paddingLeft: 0,
  '& .MuiListItem-root': {
    position: 'relative',
    paddingLeft: '2rem',
    marginBottom: '0.75rem',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '0.25rem',
      width: '1.25rem',
      height: '1.25rem',
      border: '1px solid #D1D5DB',
      borderRadius: 4,
    },
  },
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

// Timeline item interface
interface TimelinePhase {
  title: string;
  items: string[];
}

// Checklist item interface
interface ChecklistSection {
  title: string;
  items: string[];
}

// Main component
const ImplementationGuide: React.FC = () => {
  // Data for timeline phases
  const timelinePhases: TimelinePhase[] = [
    {
      title: "Phase 1: Planning & Setup (1-2 weeks)",
      items: [
        "Identify implementation team and key stakeholders",
        "Determine scope of implementation (grade levels, courses, etc.)",
        "Set up administrator accounts and system configuration",
        "Schedule initial training sessions"
      ]
    },
    {
      title: "Phase 2: Teacher Training (1-2 weeks)",
      items: [
        "Conduct platform orientation for all teachers",
        "Provide curriculum overview and teaching methodology training",
        "Set up teacher accounts and class structures",
        "Practice using skill builders and assessment tools"
      ]
    },
    {
      title: "Phase 3: Curriculum Planning (1 week)",
      items: [
        "Select appropriate standards and chapters based on your curriculum needs",
        "Create pacing guides and lesson schedules",
        "Integrate with existing course structures",
        "Prepare supplementary materials if needed"
      ]
    },
    {
      title: "Phase 4: Student Onboarding & Ongoing Support (Continuous)",
      items: [
        "Help students create accounts and join classes",
        "Introduce platform features and expectations",
        "Begin teaching curriculum with ongoing support from PFL Academy",
        "Regular check-ins and improvement cycles"
      ]
    }
  ];

  // Data for team roles
  const teamRoles = [
    {
      role: "District/School Administrator",
      responsibilities: [
        "Oversee overall implementation",
        "Ensure alignment with district goals and standards",
        "Allocate resources and budget",
        "Remove barriers to implementation"
      ]
    },
    {
      role: "PFL Coordinator",
      responsibilities: [
        "Serve as primary point of contact with PFL Academy",
        "Coordinate training sessions",
        "Monitor implementation progress",
        "Gather and share feedback"
      ]
    },
    {
      role: "IT Support",
      responsibilities: [
        "Ensure technical requirements are met",
        "Support account setup and maintenance",
        "Troubleshoot technical issues",
        "Help with device and network configuration"
      ]
    },
    {
      role: "Lead Teachers",
      responsibilities: [
        "Become platform experts",
        "Provide peer coaching to other teachers",
        "Test new features and provide feedback",
        "Share best practices and success stories"
      ]
    },
    {
      role: "Classroom Teachers",
      responsibilities: [
        "Learn platform features and curriculum",
        "Implement lessons and activities",
        "Monitor student progress",
        "Provide feedback on effectiveness"
      ]
    }
  ];

  // Data for implementation models
  const implementationModels = [
    {
      model: "Dedicated Course",
      description: "Full implementation as a standalone financial literacy course, covering all standards sequentially.",
      idealFor: "Schools with dedicated personal finance course requirements or electives"
    },
    {
      model: "Integrated Units",
      description: "Selected standards integrated into existing courses like economics, business, math, or social studies.",
      idealFor: "Schools without a dedicated financial literacy course but wanting to cover the content"
    },
    {
      model: "Advisory Program",
      description: "Shorter lessons implemented during advisory periods or homeroom over an extended timeframe.",
      idealFor: "Schools with regular advisory or homeroom programs"
    },
    {
      model: "Workshop Series",
      description: "Concentrated delivery of key content through a series of workshops or seminar days.",
      idealFor: "Schools with flexible scheduling options or special programming days"
    },
    {
      model: "Hybrid Model",
      description: "Combination of in-class and independent work, with Day 1 content in class and Day 2 as homework.",
      idealFor: "Settings with limited class time but strong student independence"
    }
  ];

  // Data for implementation checklist
  const checklistSections: ChecklistSection[] = [
    {
      title: "Pre-Implementation (1-2 weeks before training)",
      items: [
        "Form implementation team with clear roles and responsibilities",
        "Review curriculum standards and align with existing courses",
        "Verify technical requirements and prepare technology infrastructure",
        "Schedule training sessions for administrators and teachers",
        "Communicate implementation plan to all stakeholders"
      ]
    },
    {
      title: "Administrator Setup",
      items: [
        "Set up district and school admin accounts",
        "Configure district/school settings and preferences",
        "Import or add teacher accounts",
        "Define reporting structures and access permissions",
        "Review and customize available curriculum content"
      ]
    },
    {
      title: "Teacher Setup & Training",
      items: [
        "Complete platform orientation training",
        "Create teacher accounts and profiles",
        "Create classes for each teaching section",
        "Review teacher guides and lesson plans",
        "Practice using skill builders and assessment tools",
        "Develop pacing guides and content schedules"
      ]
    },
    {
      title: "Student Onboarding",
      items: [
        "Generate and distribute class join codes to students",
        "Guide students through account creation process",
        "Provide platform orientation for students",
        "Set expectations for platform usage and participation",
        "Verify all students have successfully joined classes"
      ]
    },
    {
      title: "First Week of Implementation",
      items: [
        "Begin teaching with Day 1 content for initial chapters",
        "Ensure all students can access content and complete activities",
        "Address any technical or access issues promptly",
        "Document early feedback and implementation challenges",
        "Schedule check-in meeting with implementation team"
      ]
    },
    {
      title: "Ongoing Support & Improvement",
      items: [
        "Monitor student progress and engagement metrics",
        "Collect teacher feedback on curriculum and platform",
        "Schedule regular implementation team meetings",
        "Address emerging challenges and barriers",
        "Celebrate and share successes and best practices",
        "Plan for curriculum expansion and advanced feature adoption"
      ]
    }
  ];

  return (
    <StyledContainer>
      <Header>
        <Logo variant="h4">PFL Academy</Logo>
        <Box>Implementation Guide</Box>
      </Header>
      
      <Section>
        <PageTitle variant="h1">PFL Academy Implementation Guide</PageTitle>
        <Typography paragraph>
          This guide will help administrators and teachers successfully implement PFL Academy's financial literacy 
          curriculum in your school or district. Follow this step-by-step plan to ensure a smooth rollout and 
          maximize student engagement and learning outcomes.
        </Typography>
        
        <Callout elevation={0}>
          <Typography>
            <strong>Recommended Implementation Timeline:</strong> We recommend starting the implementation process 
            at least 1 month before you plan to begin teaching the curriculum to allow sufficient time for account 
            setup, teacher training, and curriculum planning.
          </Typography>
        </Callout>
      </Section>
      
      <Section>
        <SectionTitle variant="h2">1. Implementation Phases</SectionTitle>
        <Typography paragraph>
          Implementing PFL Academy involves four main phases. Each phase builds on the previous one to ensure a 
          comprehensive and successful integration into your educational program.
        </Typography>
        
        <TimelineContainer>
          {timelinePhases.map((phase, index) => (
            <TimelineItem key={index}>
              <TimelineMarker />
              <TimelineContent>
                <TimelineDate variant="subtitle1">{phase.title}</TimelineDate>
                <List>
                  {phase.items.map((item, i) => (
                    <ListItem key={i} sx={{ mb: 0.5, p: 0 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Section>
      
      <PageBreak />
      
      <Section>
        <SectionTitle variant="h2">2. Implementation Team Roles & Responsibilities</SectionTitle>
        <Typography paragraph>
          A successful implementation requires clear roles and responsibilities. We recommend including the 
          following stakeholders in your implementation team:
        </Typography>
        
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>Role</TableCell>
              <TableCell>Responsibilities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamRoles.map((role, index) => (
              <TableRow key={index}>
                <TableCell><strong>{role.role}</strong></TableCell>
                <TableCell>
                  <List sx={{ p: 0 }}>
                    {role.responsibilities.map((resp, i) => (
                      <ListItem key={i} sx={{ p: 0, m: 0 }}>
                        <ListItemText primary={resp} />
                      </ListItem>
                    ))}
                  </List>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </Section>
      
      <Section>
        <SectionTitle variant="h2">3. Technical Requirements</SectionTitle>
        <Typography paragraph>
          PFL Academy is a web-based platform that works on most modern devices. Ensure you meet the following 
          requirements for optimal performance:
        </Typography>
        
        <TwoColumn>
          <ColumnItem>
            <SubsectionTitle variant="h3">Device Requirements</SubsectionTitle>
            <List>
              <ListItem><strong>Desktop/Laptop:</strong> Windows, Mac, or Chromebook</ListItem>
              <ListItem><strong>Tablets:</strong> iPad (iOS 14+), Android (10+)</ListItem>
              <ListItem><strong>Screen Size:</strong> Minimum 9.7" display</ListItem>
              <ListItem><strong>Memory:</strong> 4GB RAM recommended</ListItem>
              <ListItem><strong>Storage:</strong> 100MB available space</ListItem>
            </List>
          </ColumnItem>
          
          <ColumnItem>
            <SubsectionTitle variant="h3">Internet & Browser Requirements</SubsectionTitle>
            <List>
              <ListItem><strong>Internet Speed:</strong> 5 Mbps minimum</ListItem>
              <ListItem>
                <strong>Browsers:</strong>
                <List>
                  <ListItem>Chrome (latest 2 versions)</ListItem>
                  <ListItem>Firefox (latest 2 versions)</ListItem>
                  <ListItem>Safari (latest 2 versions)</ListItem>
                  <ListItem>Edge (latest 2 versions)</ListItem>
                </List>
              </ListItem>
              <ListItem><strong>JavaScript:</strong> Enabled</ListItem>
              <ListItem><strong>Cookies:</strong> Enabled</ListItem>
            </List>
          </ColumnItem>
        </TwoColumn>
        
        <Important elevation={0}>
          <Typography>
            <strong>Note:</strong> While our platform is responsive and works on smartphones, we recommend using 
            devices with larger screens for the best experience, especially for interactive skill builders and 
            detailed financial calculations.
          </Typography>
        </Important>
      </Section>
      
      <Section>
        <SectionTitle variant="h2">4. Account Structure & Setup</SectionTitle>
        <Typography paragraph>
          PFL Academy uses a hierarchical account structure to manage users and content access:
        </Typography>
        
        <ol>
          <li><strong>District Admin Account</strong> - Oversees all schools, teachers, and classes within the district</li>
          <li><strong>School Admin Account</strong> - Manages teachers and classes within a specific school</li>
          <li><strong>Teacher Account</strong> - Creates and manages classes, assigns content, and monitors student progress</li>
          <li><strong>Student Account</strong> - Accesses assigned content, completes activities, and tracks personal progress</li>
        </ol>
        
        <SubsectionTitle variant="h3">Initial Setup Process</SubsectionTitle>
        <ol>
          <li>PFL Academy creates your district account and primary administrator credentials</li>
          <li>District admin adds schools and school administrators</li>
          <li>School admins add teachers and provide them with registration links</li>
          <li>Teachers create classes and invite students</li>
          <li>Students register using the class join code provided by their teacher</li>
        </ol>
      </Section>
      
      <PageBreak />
      
      <Section>
        <SectionTitle variant="h2">5. Implementation Checklist</SectionTitle>
        <Typography paragraph>
          Use this checklist to track your implementation progress:
        </Typography>
        
        {checklistSections.map((section, index) => (
          <Box key={index} mb={3}>
            <SubsectionTitle variant="h3">{section.title}</SubsectionTitle>
            <Checklist>
              {section.items.map((item, i) => (
                <ListItem key={i}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </Checklist>
          </Box>
        ))}
      </Section>
      
      <Section>
        <SectionTitle variant="h2">6. Curriculum Integration Models</SectionTitle>
        <Typography paragraph>
          PFL Academy can be implemented in various ways depending on your school's schedule, course offerings, 
          and priorities. Consider these common implementation models:
        </Typography>
        
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>Model</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Ideal For</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {implementationModels.map((model, index) => (
              <TableRow key={index}>
                <TableCell><strong>{model.model}</strong></TableCell>
                <TableCell>{model.description}</TableCell>
                <TableCell>{model.idealFor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
        
        <Callout elevation={0}>
          <Typography>
            <strong>Implementation Tip:</strong> Start with 1-2 standards that align most closely with your 
            existing curriculum or address the most critical student needs. Expand to additional standards as 
            teachers and students become comfortable with the platform.
          </Typography>
        </Callout>
      </Section>
      
      <Section>
        <SectionTitle variant="h2">7. Measuring Success</SectionTitle>
        <Typography paragraph>
          Track these key metrics to evaluate your implementation success:
        </Typography>
        
        <SubsectionTitle variant="h3">Short-Term Indicators (1-3 months)</SubsectionTitle>
        <List>
          <ListItem><strong>Access Metrics:</strong> Percentage of students and teachers actively using the platform</ListItem>
          <ListItem><strong>Completion Rates:</strong> Percentage of assigned content completed by students</ListItem>
          <ListItem><strong>Engagement Metrics:</strong> Time spent on platform, activity completion rates</ListItem>
          <ListItem><strong>Technical Issues:</strong> Number and type of technical support requests</ListItem>
          <ListItem><strong>Initial Feedback:</strong> Teacher and student satisfaction with platform and content</ListItem>
        </List>
        
        <SubsectionTitle variant="h3">Medium-Term Indicators (3-6 months)</SubsectionTitle>
        <List>
          <ListItem><strong>Assessment Performance:</strong> Student scores on chapter and standard assessments</ListItem>
          <ListItem><strong>Skill Builder Completion:</strong> Number of skill builders successfully completed</ListItem>
          <ListItem><strong>Teacher Adoption:</strong> Depth of platform feature usage by teachers</ListItem>
          <ListItem><strong>Curriculum Coverage:</strong> Number of standards and chapters implemented</ListItem>
          <ListItem><strong>Portfolio Development:</strong> Quality and completeness of student portfolios</ListItem>
        </List>
        
        <SubsectionTitle variant="h3">Long-Term Indicators (6+ months)</SubsectionTitle>
        <List>
          <ListItem><strong>Financial Knowledge:</strong> Pre/post assessment gains in financial literacy knowledge</ListItem>
          <ListItem><strong>Attitude Changes:</strong> Shifts in student attitudes toward financial topics</ListItem>
          <ListItem><strong>Behavioral Impacts:</strong> Student self-reported financial behaviors and habits</ListItem>
          <ListItem><strong>Curriculum Integration:</strong> Level of integration into school's overall curriculum</ListItem>
          <ListItem><strong>Program Sustainability:</strong> Plans for continued and expanded implementation</ListItem>
        </List>
      </Section>
      
      <Section>
        <SectionTitle variant="h2">8. Support Resources</SectionTitle>
        <Typography paragraph>
          PFL Academy offers comprehensive support throughout your implementation journey:
        </Typography>
        
        <SubsectionTitle variant="h3">Training Resources</SubsectionTitle>
        <List>
          <ListItem><strong>Administrator Training:</strong> 90-minute virtual session covering account management, reporting, and oversight</ListItem>
          <ListItem><strong>Teacher Training:</strong> 2-hour initial training plus optional follow-up sessions</ListItem>
          <ListItem><strong>Video Tutorials:</strong> On-demand videos for all platform features</ListItem>
          <ListItem><strong>Quick Reference Guides:</strong> Downloadable PDFs for key functions</ListItem>
        </List>
        
        <SubsectionTitle variant="h3">Technical Support</SubsectionTitle>
        <List>
          <ListItem><strong>Help Center:</strong> <a href="https://help.pflacademy.co">help.pflacademy.co</a></ListItem>
          <ListItem><strong>Email Support:</strong> <a href="mailto:support@pflacademy.co">support@pflacademy.co</a></ListItem>
          <ListItem><strong>Live Chat:</strong> Available during business hours through the platform</ListItem>
        </List>
        
        <SubsectionTitle variant="h3">Implementation Support</SubsectionTitle>
        <List>
          <ListItem><strong>Implementation Manager:</strong> Dedicated point of contact for district-wide implementations</ListItem>
          <ListItem><strong>Monthly Check-Ins:</strong> Scheduled reviews of implementation progress</ListItem>
          <ListItem><strong>Custom Training:</strong> Available for specific needs or new staff</ListItem>
          <ListItem><strong>PFL Community:</strong> Online forum to connect with other educators</ListItem>
        </List>
        
        <Important elevation={0}>
          <Typography>
            <strong>Remember:</strong> Your success is our success! Don't hesitate to reach out whenever you need 
            assistance. We're committed to supporting your financial literacy education goals.
          </Typography>
        </Important>
      </Section>
      
      <Footer>
        <Typography>© 2025 PFL Academy. All rights reserved.</Typography>
        <Typography>
          For the latest version of this guide and additional resources, visit <a href="https://www.pflacademy.co/resources">www.pflacademy.co/resources</a>.
        </Typography>
      </Footer>
    </StyledContainer>
  );
};

export default ImplementationGuide;