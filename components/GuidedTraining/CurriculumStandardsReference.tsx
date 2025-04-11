import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Container, Grid, Paper, Divider, Tabs, Tab, Button } from '@mui/material';

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

const Callout = styled(Paper)(({ theme }) => ({
  backgroundColor: '#EFF6FF',
  borderLeft: '4px solid #3B82F6',
  padding: '1rem',
  margin: '1rem 0',
  borderRadius: 4,
}));

const StandardBox = styled(Paper)(({ theme }) => ({
  border: '1px solid #E5E7EB',
  borderRadius: 8,
  marginBottom: '1.5rem',
  overflow: 'hidden',
}));

const StandardHeader = styled(Box)(({ theme }) => ({
  backgroundColor: '#EFF6FF',
  padding: '1rem',
  borderBottom: '1px solid #E5E7EB',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StandardIcon = styled(Box)(({ theme }) => ({
  backgroundColor: '#4F46E5',
  color: 'white',
  width: 36,
  height: 36,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  marginRight: '0.75rem',
}));

const StandardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#4F46E5',
  flex: 1,
}));

const StandardContent = styled(Box)(({ theme }) => ({
  padding: '1rem',
}));

const ChapterList = styled('ul')(({ theme }) => ({
  listStyleType: 'none',
  paddingLeft: 0,
}));

const ChapterItem = styled('li')(({ theme }) => ({
  padding: '0.75rem',
  borderBottom: '1px solid #E5E7EB',
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const ChapterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: '0.25rem',
}));

const ChapterDesc = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: '#6B7280',
}));

const SkillBuilder = styled(Box)(({ theme }) => ({
  backgroundColor: '#F3E8FF',
  padding: '0.5rem',
  borderRadius: 4,
  fontSize: 14,
  display: 'inline-block',
  marginTop: '0.5rem',
  color: '#7C3AED',
}));

const StandardNav = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  backgroundColor: 'white',
  padding: '1rem 0',
  marginBottom: '1.5rem',
  borderBottom: '1px solid #E5E7EB',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  zIndex: 10,
}));

const StandardNavButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#F3F4F6',
  border: '1px solid #E5E7EB',
  padding: '0.5rem 0.75rem',
  borderRadius: 4,
  fontSize: 14,
  fontWeight: 500,
  cursor: 'pointer',
  color: '#4B5563',
  '&:hover': {
    backgroundColor: '#EFF6FF',
    color: '#4F46E5',
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

const Alignments = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: '#6B7280',
  marginTop: '0.5rem',
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

// Define interfaces for our data
interface Chapter {
  title: string;
  description: string;
  skillBuilder: string;
}

interface Standard {
  id: number;
  title: string;
  description: string;
  alignments: string;
  chapters: Chapter[];
}

// Component for a single standard
const StandardSection: React.FC<{ standard: Standard }> = ({ standard }) => {
  return (
    <StandardBox id={`standard${standard.id}`}>
      <StandardHeader>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StandardIcon>{standard.id}</StandardIcon>
          <StandardTitle variant="h6">{standard.title}</StandardTitle>
        </Box>
      </StandardHeader>
      <StandardContent>
        <Typography paragraph>{standard.description}</Typography>
        
        <Alignments>
          <strong>Alignments:</strong> {standard.alignments}
        </Alignments>
        
        <SubsectionTitle variant="h6">Chapters in this Standard:</SubsectionTitle>
        <ChapterList>
          {standard.chapters.map((chapter, index) => (
            <ChapterItem key={index}>
              <ChapterTitle variant="body1">{chapter.title}</ChapterTitle>
              <ChapterDesc variant="body2">{chapter.description}</ChapterDesc>
              <SkillBuilder>{chapter.skillBuilder}</SkillBuilder>
            </ChapterItem>
          ))}
        </ChapterList>
      </StandardContent>
    </StandardBox>
  );
};

// Main component
const CurriculumStandardsReference: React.FC = () => {
  // Scroll to a specific standard section
  const scrollToStandard = (id: number) => {
    document.getElementById(`standard${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Data for standards (normally this would come from an API or database)
  const standards: Standard[] = [
    {
      id: 1,
      title: "Income & Careers",
      description: "This standard explores the relationship between education, skills, career choices, and income potential. Students learn to evaluate career options, understand income sources, and develop strategies for financial success.",
      alignments: "CEE Standard I, Jump$tart Income & Careers, NEFE Income",
      chapters: [
        {
          title: "1.1: Jobs vs. Careers",
          description: "Distinguishes between jobs and careers, exploring how education and skills impact earning potential and career advancement.",
          skillBuilder: "Career Path Planner"
        },
        {
          title: "1.2: Paying for Post-Secondary Education",
          description: "Examines options for financing education beyond high school, including scholarships, grants, loans, and work-study programs.",
          skillBuilder: "FAFSA Navigator"
        },
        {
          title: "1.3: Income and Taxes",
          description: "Explores different types of income, tax structures, and how to understand paycheck withholdings and deductions.",
          skillBuilder: "W-4 Form Guide"
        },
        {
          title: "1.4: Financial Goal Setting",
          description: "Teaches strategies for setting SMART financial goals and developing action plans to achieve them.",
          skillBuilder: "Goal Setting Workshop"
        },
        {
          title: "1.5: Managing Your Income Effectively",
          description: "Covers budgeting, cash flow management, and strategies for making the most of your income.",
          skillBuilder: "Budget Builder"
        }
      ]
    },
    {
      id: 2,
      title: "Taxes",
      description: "This standard examines how taxes function in our economy, the different types of taxes individuals pay, and strategies for tax planning and compliance. Students gain practical knowledge about filing taxes and maximizing tax benefits.",
      alignments: "CEE Standard II, Jump$tart Financial Decision Making, NEFE Planning & Money Management",
      chapters: [
        {
          title: "2.1: Understanding Federal and State Taxes",
          description: "Explores the structure and purpose of federal and state tax systems, including income, sales, and property taxes.",
          skillBuilder: "Tax System Analysis"
        },
        {
          title: "2.2: Understanding Tax Brackets and Tax Rates",
          description: "Explains progressive taxation, marginal tax rates, and how to calculate your effective tax rate.",
          skillBuilder: "Tax Bracket Calculator"
        },
        {
          title: "2.3: Understanding Tax Filing Requirements",
          description: "Covers who needs to file taxes, filing statuses, deadlines, and the consequences of not filing.",
          skillBuilder: "Tax Filing Simulator"
        },
        {
          title: "2.4: Understanding Tax Deductions and Credits",
          description: "Explains the difference between deductions and credits and explores common tax benefits available to taxpayers.",
          skillBuilder: "Deduction & Credit Optimizer"
        },
        {
          title: "2.5: Tax Planning and Compliance",
          description: "Provides strategies for legal tax planning, proper record-keeping, and responding to tax notices.",
          skillBuilder: "Tax Planning Workshop"
        }
      ]
    },
    {
      id: 3,
      title: "Financial Services",
      description: "This standard introduces students to the financial services industry, including different types of financial institutions, products, and services. Students learn how to evaluate and select appropriate financial service providers for their needs.",
      alignments: "CEE Standard III, Jump$tart Financial Decision Making, NEFE Financial System",
      chapters: [
        {
          title: "3.1: Understanding Different Types of Financial Service Providers",
          description: "Compares banks, credit unions, online banks, and other financial service providers and their offerings.",
          skillBuilder: "Financial Institution Comparison"
        },
        {
          title: "3.2: Choosing and Evaluating Financial Service Providers",
          description: "Provides criteria for selecting financial institutions and evaluating their services, fees, and accessibility.",
          skillBuilder: "Bank Account Opening Simulator"
        }
      ]
    },
    {
      id: 4,
      title: "Banking Tools",
      description: "This standard focuses on practical banking skills and tools, including account management, electronic banking, and financial record-keeping. Students develop the ability to effectively use banking tools for everyday financial management.",
      alignments: "CEE Standard IV, Jump$tart Financial Decision Making, NEFE Planning & Money Management",
      chapters: [
        {
          title: "4.1: Understanding and Using Banking Tools",
          description: "Explores checking accounts, savings accounts, online banking, mobile apps, and other banking tools.",
          skillBuilder: "Banking Tools Simulator"
        }
      ]
    },
    {
      id: 5,
      title: "Saving & Investing",
      description: "This standard explores strategies for saving and investing money to achieve short and long-term financial goals. Students learn about different investment vehicles, risk assessment, and the power of compound interest.",
      alignments: "CEE Standard V, Jump$tart Saving & Investing, NEFE Saving & Investing",
      chapters: [
        {
          title: "5.1: Saving and Investing",
          description: "Introduces the concepts of saving versus investing and explores different options for both.",
          skillBuilder: "Investment Strategy Builder"
        },
        {
          title: "5.2: Understanding The Power of Compound Interest and the Rule of 72",
          description: "Demonstrates how compound interest and time affect investment growth and wealth accumulation.",
          skillBuilder: "Compound Interest Calculator"
        },
        {
          title: "5.3: Evaluating Saving and Investment Strategies",
          description: "Provides frameworks for evaluating different saving and investment strategies based on goals and risk tolerance.",
          skillBuilder: "Investment Portfolio Simulator"
        },
        {
          title: "5.4: Time is Money",
          description: "Explores the concept of opportunity cost and the time value of money in financial decision-making.",
          skillBuilder: "Time Value Calculator"
        },
        {
          title: "5.5: Understanding Monetary Risk in Saving and Investing",
          description: "Examines different types of financial risk and strategies for risk management in investing.",
          skillBuilder: "Risk Assessment Tool"
        }
      ]
    },
    {
      id: 6,
      title: "Retirement Planning",
      description: "This standard focuses on long-term financial planning for retirement. Students learn about the various retirement savings vehicles, estimating retirement needs, and creating a sustainable retirement plan.",
      alignments: "CEE Standard VI, Jump$tart Saving & Investing, NEFE Planning for the Future",
      chapters: [
        {
          title: "6.1: Planning for Retirement",
          description: "Introduces retirement planning concepts, timeline considerations, and goal-setting for different life stages.",
          skillBuilder: "Retirement Calculator"
        },
        {
          title: "6.2: Longevity and Retirement Planning",
          description: "Explores how increasing life expectancy impacts retirement planning and strategies for ensuring financial security.",
          skillBuilder: "Longevity Risk Analyzer"
        }
      ]
    },
    {
      id: 7,
      title: "Borrowing",
      description: "This standard examines the concept of borrowing money, different loan types, and responsible debt management. Students learn how to evaluate loan options, understand interest calculations, and develop effective repayment strategies.",
      alignments: "CEE Standard VII, Jump$tart Credit & Debt, NEFE Credit & Debt",
      chapters: [
        {
          title: "7.1: Understanding the Cost of Borrowing",
          description: "Explains interest rates, annual percentage rate (APR), loan terms, and the true cost of borrowing money.",
          skillBuilder: "Loan Analyzer"
        },
        {
          title: "7.2: Choosing the Right Source of Credit",
          description: "Compares different lending sources including banks, credit unions, online lenders, and peer-to-peer lending.",
          skillBuilder: "Loan Comparison Tool"
        },
        {
          title: "7.3: Understanding Credit Score",
          description: "Explores what makes up a credit score, how scores impact borrowing, and strategies for building good credit.",
          skillBuilder: "Credit Score Simulator"
        },
        {
          title: "7.4: Consumer Credit Legislation",
          description: "Covers key laws protecting consumer rights in credit transactions and borrowing situations.",
          skillBuilder: "Consumer Rights Navigator"
        },
        {
          title: "7.5: Understanding Student Loans",
          description: "Provides in-depth information on federal and private student loans, repayment options, and loan forgiveness programs.",
          skillBuilder: "Student Loan Repayment Planner"
        }
      ]
    },
    {
      id: 8,
      title: "Credit & Debit Cards",
      description: "This standard focuses on the responsible use of credit and debit cards, including features, benefits, risks, and security considerations. Students learn to make informed decisions about card usage and online transactions.",
      alignments: "CEE Standard VIII, Jump$tart Credit & Debt, NEFE Financial System",
      chapters: [
        {
          title: "8.1: Credit Card Use and Management",
          description: "Explores credit card features, billing cycles, minimum payments, fees, and strategies for responsible credit card use.",
          skillBuilder: "Credit Card Management Simulator"
        },
        {
          title: "8.2: Online Shopping",
          description: "Covers secure online shopping practices, evaluating online retailers, and protecting personal and financial information.",
          skillBuilder: "Online Shopping Simulator"
        }
      ]
    },
    {
      id: 9,
      title: "Consumer Protection",
      description: "This standard explores strategies for protecting yourself as a consumer from fraud, scams, and identity theft. Students learn about consumer rights, identifying fraudulent schemes, and steps to take if victimized.",
      alignments: "CEE Standard IX, Jump$tart Financial Decision Making, NEFE Risk Management",
      chapters: [
        {
          title: "9.1: Protecting Yourself from Consumer Fraud",
          description: "Identifies common types of consumer fraud, red flags of scams, and strategies for protecting yourself from fraudulent schemes.",
          skillBuilder: "Fraud Detection Exercise"
        },
        {
          title: "9.2: Identity Theft Prevention and Recovery",
          description: "Covers strategies for preventing identity theft, monitoring credit reports, and steps to take if your identity is stolen.",
          skillBuilder: "Identity Protection Planner"
        }
      ]
    },
    {
      id: 10,
      title: "Housing Decisions",
      description: "This standard examines the financial aspects of housing decisions, including the rent vs. buy decision, mortgage options, and housing costs. Students learn to evaluate housing choices based on budget, lifestyle, and financial goals.",
      alignments: "CEE Standard X, Jump$tart Financial Decision Making, NEFE Planning & Money Management",
      chapters: [
        {
          title: "10.1: Renting vs. Owning - Making Informed Housing Decisions",
          description: "Compares the financial implications of renting versus buying, examining advantages and disadvantages of each option.",
          skillBuilder: "Rent vs. Buy Calculator"
        },
        {
          title: "10.2: Understanding the Cost and Responsibilities of Renting",
          description: "Covers lease agreements, security deposits, tenant rights and responsibilities, and budgeting for rental costs.",
          skillBuilder: "Rental Budget Planner"
        },
        {
          title: "10.3: Understanding Home Buying",
          description: "Explains the home buying process, mortgage types, down payments, closing costs, and ongoing homeownership expenses.",
          skillBuilder: "Mortgage Estimator"
        }
      ]
    },
    {
      id: 11,
      title: "Risk Management",
      description: "This standard focuses on identifying and managing various types of risk through insurance and other protection strategies. Students learn about different insurance products and how to assess their insurance needs.",
      alignments: "CEE Standard XI, Jump$tart Risk Management & Insurance, NEFE Risk Management",
      chapters: [
        {
          title: "11.1: Understanding and Managing Risk",
          description: "Introduces types of financial risk, risk assessment, and strategies for managing different kinds of risk.",
          skillBuilder: "Risk Assessment Tool"
        },
        {
          title: "11.2: Insurance as a Risk Management Tool",
          description: "Explores different types of insurance including auto, health, homeowners/renters, life, and disability insurance.",
          skillBuilder: "Insurance Coverage Analyzer"
        },
        {
          title: "11.3: Insurance Costs",
          description: "Examines factors that affect insurance premiums, strategies for reducing insurance costs, and evaluating policy options.",
          skillBuilder: "Insurance Cost Comparison"
        }
      ]
    },
    {
      id: 12,
      title: "Gambling",
      description: "This standard examines gambling from a financial perspective, including probability, risk assessment, and responsible decision-making. Students develop a critical understanding of gambling activities and their financial implications.",
      alignments: "CEE Standard XII, Jump$tart Financial Decision Making, NEFE Risk Management",
      chapters: [
        {
          title: "12.1: Understanding the Risks of Gambling",
          description: "Explores financial and psychological risks associated with gambling and analyzes probability concepts.",
          skillBuilder: "Probability Simulator"
        },
        {
          title: "12.2: The Costs and Benefits of Gambling",
          description: "Examines the financial impact of gambling on individuals, families, and communities, and explores responsible approaches.",
          skillBuilder: "Risk-Reward Analyzer"
        }
      ]
    },
    {
      id: 13,
      title: "Debt Management",
      description: "This standard focuses on strategies for managing high levels of debt, understanding debt relief options, and rebuilding financial health. Students learn about various approaches to debt management and financial recovery.",
      alignments: "CEE Standard XIII, Jump$tart Credit & Debt, NEFE Credit & Debt",
      chapters: [
        {
          title: "13.1: Strategies for Managing High Levels of Debt",
          description: "Covers debt reduction strategies, prioritizing debt payments, debt consolidation, credit counseling, and bankruptcy implications.",
          skillBuilder: "Debt Payoff Calculator"
        }
      ]
    },
    {
      id: 14,
      title: "Charitable Giving",
      description: "This standard explores philanthropic giving as part of a financial plan. Students learn how to evaluate charitable organizations, understand the tax implications of giving, and align charitable activities with personal values and financial goals.",
      alignments: "CEE Standard XIV, Jump$tart Financial Decision Making, NEFE Planning & Money Management",
      chapters: [
        {
          title: "14.1: Charitable Giving and Financial Planning",
          description: "Explores how to incorporate charitable giving into a financial plan and examines the tax implications of donations.",
          skillBuilder: "Giving Plan Builder"
        },
        {
          title: "14.2: Checking Out Charitable Groups",
          description: "Provides frameworks for evaluating charitable organizations, understanding efficiency ratings, and avoiding charity scams.",
          skillBuilder: "Charity Evaluation Tool"
        }
      ]
    },
    {
      id: 15,
      title: "Career Readiness",
      description: "This standard focuses on preparing students for career success, from job search strategies to workplace readiness skills. Students develop practical tools for career planning, job acquisition, and professional development.",
      alignments: "CEE Standard XV, Jump$tart Income & Careers, NEFE Career",
      chapters: [
        {
          title: "15.1: Career Exploration and Goal Setting",
          description: "Guides students through self-assessment, career research, and setting meaningful career goals aligned with personal values.",
          skillBuilder: "Career Path Planner"
        },
        {
          title: "15.2: Resume Building and Personal Branding",
          description: "Teaches strategies for creating impactful resumes, developing a professional online presence, and building a personal brand.",
          skillBuilder: "Resume Builder"
        },
        {
          title: "15.3: Job Application Process",
          description: "Covers effective job search strategies, application materials preparation, and navigating the hiring process.",
          skillBuilder: "Application Simulator"
        },
        {
          title: "15.4: Interview Skills and Workplace Readiness",
          description: "Provides techniques for successful interviewing, workplace etiquette, and professional communication skills.",
          skillBuilder: "Interview Simulator"
        },
        {
          title: "15.5: Entrepreneurship and Side Hustles",
          description: "Explores entrepreneurship concepts, starting a small business, and developing side income opportunities.",
          skillBuilder: "Business Plan Builder"
        }
      ]
    }
  ];

  return (
    <StyledContainer>
      <Header>
        <Logo variant="h4">PFL Academy</Logo>
        <Box>Curriculum Standards Reference</Box>
      </Header>
      
      <Box component="section" className="section">
        <PageTitle variant="h1">PFL Academy Curriculum Standards Reference</PageTitle>
        <Typography paragraph>
          This guide provides a comprehensive overview of all 15 financial literacy standards covered in the PFL Academy curriculum, 
          including chapter descriptions, learning objectives, and skill builders. Use this reference to plan your financial literacy 
          curriculum and identify which content best aligns with your educational goals.
        </Typography>
        
        <Callout elevation={0}>
          <Typography>
            <strong>Complete Curriculum Coverage:</strong> PFL Academy's curriculum aligns with standards from the Council for 
            Economic Education (CEE), Jump$tart Coalition for Personal Financial Literacy, and state financial literacy requirements. 
            Each standard includes multiple chapters with both Day 1 content exploration and Day 2 learning lab activities.
          </Typography>
        </Callout>
      </Box>
      
      <StandardNav>
        {standards.map((standard) => (
          <StandardNavButton 
            key={standard.id}
            onClick={() => scrollToStandard(standard.id)}
          >
            Standard {standard.id}
          </StandardNavButton>
        ))}
      </StandardNav>
      
      {standards.map((standard, index) => (
        <React.Fragment key={standard.id}>
          <StandardSection standard={standard} />
          {index < standards.length - 1 && index % 2 === 1 && <PageBreak />}
        </React.Fragment>
      ))}
      
      <Box component="section" className="section">
        <SectionTitle variant="h2">Implementation Recommendations</SectionTitle>
        <Typography paragraph>
          While the curriculum is designed to be taught sequentially from Standards 1-15, many teachers 
          choose to focus on specific standards based on student needs and course requirements. Here are some recommended approaches:
        </Typography>
        
        <SubsectionTitle variant="h3">For a Comprehensive Financial Literacy Course</SubsectionTitle>
        <Typography paragraph>
          If you have a full semester or year to teach financial literacy, we recommend covering all standards 
          in sequence, spending approximately 1-2 weeks on each standard.
        </Typography>
        
        <SubsectionTitle variant="h3">For a Mini-Course or Unit</SubsectionTitle>
        <Typography paragraph>
          If you have limited time, consider focusing on these essential standards:
        </Typography>
        <ol>
          <li><strong>Standard 1:</strong> Income & Careers</li>
          <li><strong>Standard 4:</strong> Banking Tools</li>
          <li><strong>Standard 5:</strong> Saving & Investing</li>
          <li><strong>Standard 7:</strong> Borrowing</li>
          <li><strong>Standard 15:</strong> Career Readiness</li>
        </ol>
      </Box>
      
      <Callout elevation={0}>
        <Typography>
          <strong>Need More Details?</strong> For complete information on each standard, including all chapters, 
          learning objectives, and assessment options, please refer to the comprehensive Curriculum Guide available 
          through your PFL Academy teacher portal.
        </Typography>
      </Callout>
      
      <Footer>
        <Typography>© 2025 PFL Academy. All rights reserved.</Typography>
        <Typography>This curriculum standards reference is updated annually. For the latest version, visit your teacher dashboard.</Typography>
      </Footer>
    </StyledContainer>
  );
};

export default CurriculumStandardsReference;