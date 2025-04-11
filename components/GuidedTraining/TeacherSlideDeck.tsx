import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Container,
  Button
} from '@mui/material';

// Styled components
const SlideContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1280px',
  margin: '2rem auto',
  fontFamily: '"Inter", sans-serif',
}));

const Slide = styled(Box)(({ theme }) => ({
  width: '1280px',
  height: '720px',
  margin: '2rem auto',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  backgroundColor: 'white',
  position: 'relative',
  overflow: 'hidden',
  pageBreakAfter: 'always',
}));

const SlideContent = styled(Box)(({ theme }) => ({
  padding: '3rem',
  height: 'calc(100% - 6rem)',
  display: 'flex',
  flexDirection: 'column',
}));

const SlideHeader = styled(Box)(({ theme }) => ({
  marginBottom: '2rem',
}));

const SlideFooter = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 12,
  color: '#6B7280',
}));

const TitleSlide = styled(Slide)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));

const SlideTitle = styled(Typography)(({ theme }) => ({
  color: '#4F46E5',
  fontSize: '2.5rem',
  marginTop: 0,
  marginBottom: '2rem',
}));

const SlideSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: '1.5rem',
}));

const LogoText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '3rem',
  left: '3rem',
  fontSize: '2rem',
  fontWeight: 700,
}));

const DateText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: '3rem',
  fontSize: '1.2rem',
}));

const TextLarge = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  lineHeight: 1.4,
}));

const Highlight = styled(Box)(({ theme }) => ({
  backgroundColor: '#EFF6FF',
  borderLeft: '6px solid #3B82F6',
  padding: '1.5rem',
  borderRadius: '8px',
  margin: '1.5rem 0',
}));

const TwoColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '3rem',
  height: '100%',
}));

const Column = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const StatContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  textAlign: 'center',
  margin: '3rem 0',
}));

const Stat = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 700,
  color: '#4F46E5',
  lineHeight: 1,
  marginBottom: '1rem',
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: '#6B7280',
}));

const Quote = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontStyle: 'italic',
  color: '#4F46E5',
  margin: '0 0 2rem 0',
}));

const Attribution = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 500,
}));

const QuoteSlide = styled(Slide)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '3rem 6rem',
}));

const ContactSlide = styled(Slide)(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: '3rem',
}));

const GradientBg = styled(Slide)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
  color: 'white',
}));

const GradientTitle = styled(SlideTitle)(({ theme }) => ({
  color: 'white',
}));

const StyledList = styled('ul')(({ theme }) => ({
  fontSize: '1.5rem',
  margin: 0,
  paddingLeft: '1.5rem',
  '& li': {
    marginBottom: '1.5rem',
  },
}));

const IconPlaceholder = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '300px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem',
}));

const NavigationControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  margin: '1rem 0',
}));

// Main component
const TeacherSlideDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  // Slide data
  const slides = [
    {
      type: 'title',
      title: 'Personal Financial Literacy',
      subtitle: 'Empowering Students for Financial Success',
      year: '2025',
    },
    {
      type: 'intro',
      title: 'About PFL Academy',
      content: 'PFL Academy is a comprehensive financial literacy education platform designed to equip students with the knowledge, skills, and confidence to make informed financial decisions.',
      highlight: 'Our curriculum aligns with all 15 standards recommended by the Council for Economic Education and the Jump$tart Coalition for Personal Financial Literacy.',
      additionalContent: 'Through our innovative two-day learning model, students build both theoretical knowledge and practical skills they can apply immediately in their own lives.',
    },
    {
      type: 'list',
      title: 'Key Platform Features',
      items: [
        'Comprehensive Curriculum - 15 standards with multiple chapters covering all aspects of financial literacy',
        'Two-Day Learning Model - Content exploration followed by hands-on learning labs',
        'Interactive Skill Builders - Real-world applications and simulations',
        'Detailed Teacher Guides - Complete lesson plans with facilitation notes',
        'Progress Tracking - Monitor student engagement and understanding',
        'Assessment Tools - Pre-built quizzes and projects with automated grading',
      ],
    },
    {
      type: 'two-day',
      title: 'Two-Day Learning Model',
      day1: {
        title: 'Day 1: Content Exploration',
        items: [
          'Core concept introduction',
          'Key vocabulary and principles',
          'Real-world examples and case studies',
          'Discussion prompts and reflection',
          'Initial skill builder introduction',
        ],
        note: '55 minutes',
        subNote: 'Structured classroom time',
      },
      day2: {
        title: 'Day 2: Learning Lab',
        items: [
          'Hands-on application stations',
          'Interactive skill builders',
          'Problem-solving activities',
          'Portfolio building exercises',
          'Real-world decision-making practice',
        ],
        note: 'Flexible timing',
        subNote: 'Adaptable to your schedule',
      },
    },
    {
      type: 'standards',
      title: 'Curriculum Standards',
      column1: [
        'Standard 1: Income & Careers',
        'Standard 2: Taxes',
        'Standard 3: Financial Services',
        'Standard 4: Banking Tools',
        'Standard 5: Saving & Investing',
        'Standard 6: Retirement Planning',
        'Standard 7: Borrowing',
        'Standard 8: Credit & Debit Cards',
      ],
      column2: [
        'Standard 9: Consumer Protection',
        'Standard 10: Housing Decisions',
        'Standard 11: Risk Management',
        'Standard 12: Gambling',
        'Standard 13: Debt Management',
        'Standard 14: Charitable Giving',
        'Standard 15: Career Readiness',
      ],
      note: 'Each standard contains multiple chapters with both Day 1 and Day 2 content',
    },
    {
      type: 'stats',
      title: 'Why Financial Literacy Matters',
      stats: [
        {
          number: '78%',
          label: 'of Americans live paycheck to paycheck',
        },
        {
          number: '42%',
          label: 'have less than $1,000 in savings',
        },
        {
          number: '87%',
          label: 'of teens lack basic financial knowledge',
        },
      ],
      caption: 'Financial literacy education changes these statistics.',
      highlight: 'Students with financial education are 3x more likely to save money and 2x more likely to invest for the future.',
    },
    {
      type: 'gradient',
      title: 'Interactive Skill Builders',
      column1: [
        'Career Path Planner',
        'FAFSA Navigator',
        'W-4 Form Guide',
        'Bank Account Simulator',
        'Budget Calculator',
        'Investment Simulator',
        'Loan Repayment Planner',
        'Credit Score Simulator',
        'Resume Builder',
        'Interview Simulator',
      ],
      column2: {
        emoji: '💻',
        caption: 'Interactive tools that simulate real-world financial scenarios',
      },
    },
    {
      type: 'quote',
      quote: '"PFL Academy has transformed how our students understand and engage with financial concepts. The interactive tools make abstract ideas concrete, and the two-day model ensures deep learning that sticks."',
      attribution: '— Jessica Donovan, High School Economics Teacher',
    },
    {
      type: 'list',
      title: 'Getting Started is Easy',
      items: [
        'Create your teacher account',
        'Set up your class and invite students',
        'Browse curriculum and select chapters',
        'Assign content to your class',
        'Use teacher guides to prepare lessons',
        'Monitor student progress',
      ],
      highlight: 'Full training and support available for teachers and administrators',
    },
    {
      type: 'contact',
      title: 'Ready to Get Started?',
      website: 'www.pflacademy.co',
      email: 'info@pflacademy.co',
      cta: 'Schedule a demo today!',
    },
  ];

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  // Render current slide based on type
  const renderSlide = (slide: any, index: number) => {
    switch (slide.type) {
      case 'title':
        return (
          <TitleSlide key={index}>
            <LogoText>PFL Academy</LogoText>
            <Typography variant="h1" sx={{ fontSize: '4rem', marginBottom: '1rem' }}>
              {slide.title}
            </Typography>
            <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 400, marginBottom: '3rem' }}>
              {slide.subtitle}
            </Typography>
            <DateText>{slide.year}</DateText>
          </TitleSlide>
        );
      
      case 'intro':
        return (
          <Slide key={index}>
            <SlideContent>
              <SlideHeader>
                <SlideTitle variant="h2">{slide.title}</SlideTitle>
              </SlideHeader>
              
              <TextLarge paragraph>{slide.content}</TextLarge>
              
              <Highlight>
                <TextLarge>{slide.highlight}</TextLarge>
              </Highlight>
              
              <TextLarge paragraph>{slide.additionalContent}</TextLarge>
              
              <SlideFooter>
                <div>PFL Academy</div>
                <div>2025</div>
              </SlideFooter>
            </SlideContent>
          </Slide>
        );
      
      case 'list':
        return (
          <Slide key={index}>
            <SlideContent>
              <SlideHeader>
                <SlideTitle variant="h2">{slide.title}</SlideTitle>
              </SlideHeader>
              
              <StyledList>
                {slide.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </StyledList>
              
              {slide.highlight && (
                <Highlight>
                  <TextLarge sx={{ textAlign: 'center', margin: 0 }}>
                    {slide.highlight}
                  </TextLarge>
                </Highlight>
              )}
              
              <SlideFooter>
                <div>PFL Academy</div>
                <div>2025</div>
              </SlideFooter>
            </SlideContent>
          </Slide>
        );
      
      case 'two-day':
        return (
          <Slide key={index}>
            <SlideContent>
              <SlideHeader>
                <SlideTitle variant="h2">{slide.title}</SlideTitle>
              </SlideHeader>
              
              <TwoColumn>
                <Column>
                  <Typography variant="h3" sx={{ fontSize: '1.75rem', color: '#4F46E5' }}>
                    {slide.day1.title}
                  </Typography>
                  <ul style={{ fontSize: '1.25rem' }}>
                    {slide.day1.items.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Typography sx={{ fontSize: '1.25rem', color: '#4F46E5', fontWeight: 600 }}>
                      {slide.day1.note}
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', color: '#6B7280' }}>
                      {slide.day1.subNote}
                    </Typography>
                  </Box>
                </Column>
                
                <Column>
                  <Typography variant="h3" sx={{ fontSize: '1.75rem', color: '#7C3AED' }}>
                    {slide.day2.title}
                  </Typography>
                  <ul style={{ fontSize: '1.25rem' }}>
                    {slide.day2.items.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Typography sx={{ fontSize: '1.25rem', color: '#7C3AED', fontWeight: 600 }}>
                      {slide.day2.note}
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', color: '#6B7280' }}>
                      {slide.day2.subNote}
                    </Typography>
                  </Box>
                </Column>
              </TwoColumn>
              
              <SlideFooter>
                <div>PFL Academy</div>
                <div>2025</div>
              </SlideFooter>
            </SlideContent>
          </Slide>
        );
      
      case 'standards':
        return (
          <Slide key={index}>
            <SlideContent>
              <SlideHeader>
                <SlideTitle variant="h2">{slide.title}</SlideTitle>
              </SlideHeader>
              
              <TwoColumn>
                <Column>
                  <ul style={{ fontSize: '1.25rem' }}>
                    {slide.column1.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Column>
                
                <Column>
                  <ul style={{ fontSize: '1.25rem' }}>
                    {slide.column2.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Column>
              </TwoColumn>
              
              <Highlight>
                <Typography sx={{ fontSize: '1.25rem', textAlign: 'center', margin: 0 }}>
                  {slide.note}
                </Typography>
              </Highlight>
              
              <SlideFooter>
                <div>PFL Academy</div>
                <div>2025</div>
              </SlideFooter>
            </SlideContent>
          </Slide>
        );
      
      case 'stats':
        return (
          <Slide key={index}>
            <SlideContent>
              <SlideHeader>
                <SlideTitle variant="h2">{slide.title}</SlideTitle>
              </SlideHeader>
              
              <StatContainer>
                {slide.stats.map((stat: any, i: number) => (
                  <Stat key={i}>
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </Stat>
                ))}
              </StatContainer>
              
              <TextLarge sx={{ textAlign: 'center', marginTop: '2rem' }}>
                {slide.caption}
              </TextLarge>
              
              <Highlight>
                <TextLarge sx={{ textAlign: 'center', margin: 0 }}>
                  {slide.highlight}
                </TextLarge>
              </Highlight>
              
              <SlideFooter>
                <div>PFL Academy</div>
                <div>2025</div>
              </SlideFooter>
            </SlideContent>
          </Slide>
        );
      
      case 'gradient':
        return (
          <GradientBg key={index}>
            <SlideContent>
              <SlideHeader>
                <GradientTitle variant="h2">{slide.title}</GradientTitle>
              </SlideHeader>
              
              <TwoColumn>
                <Column>
                  <ul style={{ fontSize: '1.25rem', color: 'white' }}>
                    {slide.column1.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Column>
                
                <Column sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <IconPlaceholder>
                    <Typography sx={{ fontSize: '5rem' }}>{slide.column2.emoji}</Typography>
                  </IconPlaceholder>
                  <Typography sx={{ fontSize: '1.25rem', textAlign: 'center', color: 'white' }}>
                    {slide.column2.caption}
                  </Typography>
                </Column>
              </TwoColumn>
              
              <SlideFooter sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                <div>PFL Academy</div>
                <div>2025</div>
              </SlideFooter>
            </SlideContent>
          </GradientBg>
        );
      
      case 'quote':
        return (
          <QuoteSlide key={index}>
            <Quote>{slide.quote}</Quote>
            <Attribution>{slide.attribution}</Attribution>
            
            <SlideFooter sx={{ width: '100%' }}>
              <div>PFL Academy</div>
              <div>2025</div>
            </SlideFooter>
          </QuoteSlide>
        );
      
      case 'contact':
        return (
          <ContactSlide key={index} sx={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: 'white' }}>
            <SlideContent>
              <Typography variant="h2" sx={{ color: 'white', fontSize: '2.5rem', marginBottom: '2rem' }}>
                {slide.title}
              </Typography>
              
              <ContactInfo>
                <Typography paragraph>Visit: <strong>{slide.website}</strong></Typography>
                <Typography paragraph>Email: <strong>{slide.email}</strong></Typography>
              </ContactInfo>
              
              <Typography sx={{ fontSize: '1.5rem' }}>{slide.cta}</Typography>
              
              <SlideFooter sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                <div>PFL Academy</div>
                <div>2025</div>
              </SlideFooter>
            </SlideContent>
          </ContactSlide>
        );
      
      default:
        return null;
    }
  };

  return (
    <SlideContainer>
      {/* Navigation controls */}
      <NavigationControls>
        <Button 
          variant="contained" 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          sx={{ backgroundColor: '#4F46E5' }}
        >
          Previous Slide
        </Button>
        <Typography variant="subtitle1">
          Slide {currentSlide + 1} of {slides.length}
        </Typography>
        <Button 
          variant="contained" 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          sx={{ backgroundColor: '#4F46E5' }}
        >
          Next Slide
        </Button>
      </NavigationControls>

      {/* Current slide */}
      {renderSlide(slides[currentSlide], currentSlide)}
      
      {/* Print view with all slides */}
      <Box sx={{ display: 'none', '@media print': { display: 'block' } }}>
        {slides.map((slide, index) => renderSlide(slide, index))}
      </Box>
    </SlideContainer>
  );
};

export default TeacherSlideDeck;