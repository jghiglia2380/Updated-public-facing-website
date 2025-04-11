import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  TextField,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Button,
  Grid,
  Divider,
  Alert,
  Snackbar
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

const FormSection = styled(Box)(({ theme }) => ({
  marginBottom: '2rem',
}));

const Callout = styled(Paper)(({ theme }) => ({
  backgroundColor: '#EFF6FF',
  borderLeft: '4px solid #3B82F6',
  padding: '1rem',
  margin: '1rem 0',
  borderRadius: 4,
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: '1.5rem',
  width: '100%',
}));

const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
  marginBottom: '1rem',
}));

const SignatureBox = styled(Box)(({ theme }) => ({
  border: '1px dashed #D1D5DB',
  padding: '1rem',
  marginTop: '0.5rem',
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9CA3AF',
  fontStyle: 'italic',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: '1.5rem',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#4F46E5',
  color: 'white',
  '&:hover': {
    backgroundColor: '#4338CA',
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

// Form component interface
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  schoolName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  districtSize: string;
  trainingType: string[];
  trainingDetails: string;
  trainingFormat: string;
  preferredStartDate: string;
  alternateDate: string;
  timeOfDay: string[];
  duration: string;
  attendees: string;
  priorExperience: string;
  referralSource: string;
  additionalInfo: string;
  authorization: boolean;
  signatureDate: string;
  printedName: string;
}

// Main component
const CustomTrainingRequestForm: React.FC = () => {
  // Initial form state
  const initialFormState: FormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    schoolName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    districtSize: '',
    trainingType: [],
    trainingDetails: '',
    trainingFormat: '',
    preferredStartDate: '',
    alternateDate: '',
    timeOfDay: [],
    duration: '',
    attendees: '',
    priorExperience: '',
    referralSource: '',
    additionalInfo: '',
    authorization: false,
    signatureDate: '',
    printedName: '',
  };

  // Form state
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field if it exists
    if (formErrors[name as keyof FormState]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    if (name === 'authorization') {
      // For single checkbox like authorization
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      // For checkbox groups like trainingType or timeOfDay
      const currentValues = [...(formData[name as keyof FormState] as string[])];
      
      if (checked) {
        currentValues.push(value);
      } else {
        const index = currentValues.indexOf(value);
        if (index !== -1) {
          currentValues.splice(index, 1);
        }
      }
      
      setFormData({
        ...formData,
        [name]: currentValues,
      });
    }
    
    // Clear error for this field if it exists
    if (formErrors[name as keyof FormState]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  // Handle radio button changes
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field if it exists
    if (formErrors[name as keyof FormState]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof FormState, string>> = {};
    
    // Required fields
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.role) errors.role = 'Role is required';
    if (!formData.schoolName) errors.schoolName = 'School/District name is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.zipCode) errors.zipCode = 'ZIP code is required';
    if (!formData.districtSize) errors.districtSize = 'District size is required';
    if (formData.trainingType.length === 0) errors.trainingType = 'At least one training type is required';
    if (!formData.trainingFormat) errors.trainingFormat = 'Training format is required';
    if (!formData.preferredStartDate) errors.preferredStartDate = 'Preferred start date is required';
    if (formData.timeOfDay.length === 0) errors.timeOfDay = 'At least one time of day preference is required';
    if (!formData.duration) errors.duration = 'Duration is required';
    if (!formData.attendees) errors.attendees = 'Number of attendees is required';
    if (!formData.priorExperience) errors.priorExperience = 'This field is required';
    if (!formData.authorization) errors.authorization = 'You must authorize the request';
    if (!formData.signatureDate) errors.signatureDate = 'Date is required';
    if (!formData.printedName) errors.printedName = 'Printed name is required';
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^[0-9()-.\s]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after submission
        setFormData(initialFormState);
      }, 1500);
    }
  };

  // Close success message
  const handleCloseSuccessMessage = () => {
    setSubmitSuccess(false);
  };

  // Close error message
  const handleCloseErrorMessage = () => {
    setSubmitError(false);
  };

  return (
    <StyledContainer>
      <Header>
        <Logo variant="h4">PFL Academy</Logo>
        <Box>Custom Training Request Form</Box>
      </Header>
      
      <FormSection>
        <PageTitle variant="h1">Custom Training Request Form</PageTitle>
        <Typography paragraph>
          Complete this form to request custom training for your school or district. Our team will follow up 
          within 48 hours to confirm your request and provide more information.
        </Typography>
        
        <Callout elevation={0}>
          <Typography>
            <strong>Note:</strong> For immediate assistance, please contact our support team at <a href="mailto:support@pflacademy.co">support@pflacademy.co</a>.
          </Typography>
        </Callout>
      </FormSection>
      
      <form onSubmit={handleSubmit}>
        <FormSection>
          <SectionTitle variant="h2">1. Contact Information</SectionTitle>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.firstName}>
                <FormLabel htmlFor="firstName">First Name*</FormLabel>
                <TextField
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={!!formErrors.firstName}
                  helperText={formErrors.firstName}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.lastName}>
                <FormLabel htmlFor="lastName">Last Name*</FormLabel>
                <TextField
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={!!formErrors.lastName}
                  helperText={formErrors.lastName}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
          </Grid>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.email}>
                <FormLabel htmlFor="email">Email Address*</FormLabel>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.phone}>
                <FormLabel htmlFor="phone">Phone Number*</FormLabel>
                <TextField
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={!!formErrors.phone}
                  helperText={formErrors.phone}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
          </Grid>
          
          <StyledFormControl error={!!formErrors.role}>
            <FormLabel htmlFor="role">Role/Position*</FormLabel>
            <TextField
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              error={!!formErrors.role}
              helperText={formErrors.role}
              fullWidth
            />
          </StyledFormControl>
        </FormSection>
        
        <FormSection>
          <SectionTitle variant="h2">2. School/District Information</SectionTitle>
          
          <StyledFormControl error={!!formErrors.schoolName}>
            <FormLabel htmlFor="schoolName">School/District Name*</FormLabel>
            <TextField
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleInputChange}
              error={!!formErrors.schoolName}
              helperText={formErrors.schoolName}
              fullWidth
            />
          </StyledFormControl>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <StyledFormControl error={!!formErrors.address}>
                <FormLabel htmlFor="address">Address*</FormLabel>
                <TextField
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  error={!!formErrors.address}
                  helperText={formErrors.address}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StyledFormControl error={!!formErrors.city}>
                <FormLabel htmlFor="city">City*</FormLabel>
                <TextField
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  error={!!formErrors.city}
                  helperText={formErrors.city}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
          </Grid>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.state}>
                <FormLabel htmlFor="state">State*</FormLabel>
                <TextField
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  error={!!formErrors.state}
                  helperText={formErrors.state}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.zipCode}>
                <FormLabel htmlFor="zipCode">ZIP Code*</FormLabel>
                <TextField
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  error={!!formErrors.zipCode}
                  helperText={formErrors.zipCode}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
          </Grid>
          
          <StyledFormControl error={!!formErrors.districtSize}>
            <FormLabel htmlFor="districtSize">Approximate Number of Students*</FormLabel>
            <TextField
              select
              id="districtSize"
              name="districtSize"
              value={formData.districtSize}
              onChange={handleInputChange}
              error={!!formErrors.districtSize}
              helperText={formErrors.districtSize}
              fullWidth
              SelectProps={{
                native: true,
              }}
            >
              <option value="">Please select</option>
              <option value="<500">Less than 500</option>
              <option value="500-1000">500 - 1,000</option>
              <option value="1001-5000">1,001 - 5,000</option>
              <option value="5001-10000">5,001 - 10,000</option>
              <option value=">10000">More than 10,000</option>
            </TextField>
          </StyledFormControl>
        </FormSection>
        
        <PageBreak />
        
        <FormSection>
          <SectionTitle variant="h2">3. Training Request Details</SectionTitle>
          
          <StyledFormControl error={!!formErrors.trainingType}>
            <FormLabel component="legend">Type of Training Requested*</FormLabel>
            <StyledFormGroup>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.trainingType.includes('platformOverview')}
                    onChange={handleCheckboxChange}
                    name="trainingType"
                    value="platformOverview"
                  />
                }
                label="Platform Overview"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.trainingType.includes('curriculumTraining')}
                    onChange={handleCheckboxChange}
                    name="trainingType"
                    value="curriculumTraining"
                  />
                }
                label="Curriculum Training"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.trainingType.includes('adminTraining')}
                    onChange={handleCheckboxChange}
                    name="trainingType"
                    value="adminTraining"
                  />
                }
                label="Administrator Training"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.trainingType.includes('assessmentTraining')}
                    onChange={handleCheckboxChange}
                    name="trainingType"
                    value="assessmentTraining"
                  />
                }
                label="Assessment Tools Training"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.trainingType.includes('customContent')}
                    onChange={handleCheckboxChange}
                    name="trainingType"
                    value="customContent"
                  />
                }
                label="Custom Content Development"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.trainingType.includes('other')}
                    onChange={handleCheckboxChange}
                    name="trainingType"
                    value="other"
                  />
                }
                label="Other (Please specify below)"
              />
            </StyledFormGroup>
            {formErrors.trainingType && (
              <Typography color="error" variant="caption">
                {formErrors.trainingType}
              </Typography>
            )}
          </StyledFormControl>
          
          <StyledFormControl>
            <FormLabel htmlFor="trainingDetails">Please provide more details about your training needs:</FormLabel>
            <TextField
              id="trainingDetails"
              name="trainingDetails"
              value={formData.trainingDetails}
              onChange={handleInputChange}
              multiline
              rows={5}
              fullWidth
            />
          </StyledFormControl>
          
          <StyledFormControl error={!!formErrors.trainingFormat}>
            <FormLabel component="legend">Preferred Training Format*</FormLabel>
            <RadioGroup
              name="trainingFormat"
              value={formData.trainingFormat}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="virtual" control={<Radio />} label="Virtual (Zoom/Teams)" />
              <FormControlLabel value="inPerson" control={<Radio />} label="In-Person" />
              <FormControlLabel value="hybrid" control={<Radio />} label="Hybrid (Both virtual and in-person components)" />
            </RadioGroup>
            {formErrors.trainingFormat && (
              <Typography color="error" variant="caption">
                {formErrors.trainingFormat}
              </Typography>
            )}
          </StyledFormControl>
        </FormSection>
        
        <FormSection>
          <SectionTitle variant="h2">4. Schedule Preferences</SectionTitle>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.preferredStartDate}>
                <FormLabel htmlFor="preferredStartDate">Preferred Start Date*</FormLabel>
                <TextField
                  id="preferredStartDate"
                  name="preferredStartDate"
                  type="date"
                  value={formData.preferredStartDate}
                  onChange={handleInputChange}
                  error={!!formErrors.preferredStartDate}
                  helperText={formErrors.preferredStartDate}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </StyledFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledFormControl>
                <FormLabel htmlFor="alternateDate">Alternate Date</FormLabel>
                <TextField
                  id="alternateDate"
                  name="alternateDate"
                  type="date"
                  value={formData.alternateDate}
                  onChange={handleInputChange}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </StyledFormControl>
            </Grid>
          </Grid>
          
          <StyledFormControl error={!!formErrors.timeOfDay}>
            <FormLabel component="legend">Preferred Time of Day*</FormLabel>
            <StyledFormGroup>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.timeOfDay.includes('morning')}
                    onChange={handleCheckboxChange}
                    name="timeOfDay"
                    value="morning"
                  />
                }
                label="Morning (8am - 12pm)"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.timeOfDay.includes('afternoon')}
                    onChange={handleCheckboxChange}
                    name="timeOfDay"
                    value="afternoon"
                  />
                }
                label="Afternoon (12pm - 4pm)"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.timeOfDay.includes('evening')}
                    onChange={handleCheckboxChange}
                    name="timeOfDay"
                    value="evening"
                  />
                }
                label="Evening (4pm - 8pm)"
              />
            </StyledFormGroup>
            {formErrors.timeOfDay && (
              <Typography color="error" variant="caption">
                {formErrors.timeOfDay}
              </Typography>
            )}
          </StyledFormControl>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.duration}>
                <FormLabel htmlFor="duration">Expected Duration/Time Available*</FormLabel>
                <TextField
                  select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  error={!!formErrors.duration}
                  helperText={formErrors.duration}
                  fullWidth
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="">Please select</option>
                  <option value="1-2">1-2 hours</option>
                  <option value="3-4">3-4 hours</option>
                  <option value="half-day">Half-day (4 hours)</option>
                  <option value="full-day">Full-day (7-8 hours)</option>
                  <option value="multi-day">Multi-day session</option>
                </TextField>
              </StyledFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.attendees}>
                <FormLabel htmlFor="attendees">Approximate Number of Attendees*</FormLabel>
                <TextField
                  id="attendees"
                  name="attendees"
                  value={formData.attendees}
                  onChange={handleInputChange}
                  error={!!formErrors.attendees}
                  helperText={formErrors.attendees}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
          </Grid>
        </FormSection>
        
        <FormSection>
          <SectionTitle variant="h2">5. Additional Information</SectionTitle>
          
          <StyledFormControl error={!!formErrors.priorExperience}>
            <FormLabel component="legend">Have you used PFL Academy before?*</FormLabel>
            <RadioGroup
              name="priorExperience"
              value={formData.priorExperience}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {formErrors.priorExperience && (
              <Typography color="error" variant="caption">
                {formErrors.priorExperience}
              </Typography>
            )}
          </StyledFormControl>
          
          <StyledFormControl>
            <FormLabel htmlFor="referralSource">How did you hear about PFL Academy?</FormLabel>
            <TextField
              select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleInputChange}
              fullWidth
              SelectProps={{
                native: true,
              }}
            >
              <option value="">Please select</option>
              <option value="colleague">Colleague recommendation</option>
              <option value="conference">Conference/Event</option>
              <option value="email">Email</option>
              <option value="social">Social media</option>
              <option value="search">Web search</option>
              <option value="other">Other</option>
            </TextField>
          </StyledFormControl>
          
          <StyledFormControl>
            <FormLabel htmlFor="additionalInfo">Any additional information or special requests?</FormLabel>
            <TextField
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              multiline
              rows={5}
              fullWidth
            />
          </StyledFormControl>
        </FormSection>
        
        <FormSection>
          <SectionTitle variant="h2">6. Authorization</SectionTitle>
          
          <StyledFormControl error={!!formErrors.authorization}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={formData.authorization}
                  onChange={handleCheckboxChange}
                  name="authorization"
                  value="authorized"
                />
              }
              label="I am authorized to request training on behalf of my school/district and understand that submission of this form does not guarantee training on the requested dates.*"
            />
            {formErrors.authorization && (
              <Typography color="error" variant="caption">
                {formErrors.authorization}
              </Typography>
            )}
          </StyledFormControl>
          
          <StyledFormControl>
            <FormLabel htmlFor="signature">Signature*</FormLabel>
            <SignatureBox>
              <Typography variant="body2">
                By submitting this form, I confirm that the information provided is accurate and complete.
              </Typography>
            </SignatureBox>
          </StyledFormControl>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.signatureDate}>
                <FormLabel htmlFor="signatureDate">Date*</FormLabel>
                <TextField
                  id="signatureDate"
                  name="signatureDate"
                  type="date"
                  value={formData.signatureDate}
                  onChange={handleInputChange}
                  error={!!formErrors.signatureDate}
                  helperText={formErrors.signatureDate}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </StyledFormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledFormControl error={!!formErrors.printedName}>
                <FormLabel htmlFor="printedName">Printed Name*</FormLabel>
                <TextField
                  id="printedName"
                  name="printedName"
                  value={formData.printedName}
                  onChange={handleInputChange}
                  error={!!formErrors.printedName}
                  helperText={formErrors.printedName}
                  fullWidth
                />
              </StyledFormControl>
            </Grid>
          </Grid>
        </FormSection>
        
        <Callout elevation={0}>
          <Typography>
            <strong>What happens next?</strong> After submitting this form, a member of our training team will contact 
            you within 48 hours to confirm your request and provide additional details.
          </Typography>
        </Callout>
        
        <SubmitButton 
          type="submit" 
          variant="contained" 
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Submitting...' : 'Submit Training Request'}
        </SubmitButton>
      </form>
      
      <Footer>
        <Typography>© 2025 PFL Academy. All rights reserved.</Typography>
        <Typography>
          Please submit any questions to <a href="mailto:training@pflacademy.co">training@pflacademy.co</a>.
        </Typography>
      </Footer>
      
      {/* Success/Error messages */}
      <Snackbar open={submitSuccess} autoHideDuration={6000} onClose={handleCloseSuccessMessage}>
        <Alert onClose={handleCloseSuccessMessage} severity="success" sx={{ width: '100%' }}>
          Your training request has been submitted successfully! We'll contact you within 48 hours.
        </Alert>
      </Snackbar>
      
      <Snackbar open={submitError} autoHideDuration={6000} onClose={handleCloseErrorMessage}>
        <Alert onClose={handleCloseErrorMessage} severity="error" sx={{ width: '100%' }}>
          There was an error submitting your request. Please try again or contact us directly.
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default CustomTrainingRequestForm;