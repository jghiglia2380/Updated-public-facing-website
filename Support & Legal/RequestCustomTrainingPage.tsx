
export default function RequestCustomTrainingPage() {
  return (
    <div className="bg-white">
      <div dangerouslySetInnerHTML={ __html: `<body>
 <div class="header">
  <div class="logo">
   PFL Academy
  </div>
  <div>
   Custom Training Request Form
  </div>
 </div>
 <div class="section">
  <h1>
   Custom Training Request Form
  </h1>
  <p>
   Complete this form to request custom training for your school or district. Our team will follow up within 48 hours to confirm your request and provide more information.
  </p>
  <div class="callout">
   <strong>
    Note:
   </strong>
   For immediate assistance, please contact our support team at
   <a href="mailto:support@pflacademy.co">
    support@pflacademy.co
   </a>
   .
  </div>
 </div>
 <div class="section">
  <h2>
   1. Contact Information
  </h2>
  <div class="form-group">
   <div class="input-group">
    <div>
     <label for="firstName">
      First Name*
     </label>
     <input id="firstName" name="firstName" type="text"/>
    </div>
    <div>
     <label for="lastName">
      Last Name*
     </label>
     <input id="lastName" name="lastName" type="text"/>
    </div>
   </div>
  </div>
  <div class="form-group">
   <div class="input-group">
    <div>
     <label for="email">
      Email Address*
     </label>
     <input id="email" name="email" type="email"/>
    </div>
    <div>
     <label for="phone">
      Phone Number*
     </label>
     <input id="phone" name="phone" type="tel"/>
    </div>
   </div>
  </div>
  <div class="form-group">
   <label for="role">
    Role/Position*
   </label>
   <input id="role" name="role" type="text"/>
  </div>
 </div>
 <div class="section">
  <h2>
   2. School/District Information
  </h2>
  <div class="form-group">
   <label for="schoolName">
    School/District Name*
   </label>
   <input id="schoolName" name="schoolName" type="text"/>
  </div>
  <div class="form-group">
   <div class="input-group">
    <div>
     <label for="address">
      Address*
     </label>
     <input id="address" name="address" type="text"/>
    </div>
    <div>
     <label for="city">
      City*
     </label>
     <input id="city" name="city" type="text"/>
    </div>
   </div>
  </div>
  <div class="form-group">
   <div class="input-group">
    <div>
     <label for="state">
      State*
     </label>
     <input id="state" name="state" type="text"/>
    </div>
    <div>
     <label for="zipCode">
      ZIP Code*
     </label>
     <input id="zipCode" name="zipCode" type="text"/>
    </div>
   </div>
  </div>
  <div class="form-group">
   <label for="districtSize">
    Approximate Number of Students*
   </label>
   <select id="districtSize" name="districtSize">
    <option value="">
     Please select
    </option>
    <option value="&lt;500">
     Less than 500
    </option>
    <option value="500-1000">
     500 - 1,000
    </option>
    <option value="1001-5000">
     1,001 - 5,000
    </option>
    <option value="5001-10000">
     5,001 - 10,000
    </option>
    <option value="&gt;10000">
     More than 10,000
    </option>
   </select>
  </div>
 </div>
 <div class="section">
  <h2>
   3. Training Request Details
  </h2>
  <div class="form-group">
   <label>
    Type of Training Requested*
   </label>
   <div class="checkbox-group">
    <div class="checkbox-item">
     <input id="platformOverview" name="trainingType" type="checkbox" value="platformOverview"/>
     <label for="platformOverview">
      Platform Overview
     </label>
    </div>
    <div class="checkbox-item">
     <input id="curriculumTraining" name="trainingType" type="checkbox" value="curriculumTraining"/>
     <label for="curriculumTraining">
      Curriculum Training
     </label>
    </div>
    <div class="checkbox-item">
     <input id="adminTraining" name="trainingType" type="checkbox" value="adminTraining"/>
     <label for="adminTraining">
      Administrator Training
     </label>
    </div>
    <div class="checkbox-item">
     <input id="assessmentTraining" name="trainingType" type="checkbox" value="assessmentTraining"/>
     <label for="assessmentTraining">
      Assessment Tools Training
     </label>
    </div>
    <div class="checkbox-item">
     <input id="customContent" name="trainingType" type="checkbox" value="customContent"/>
     <label for="customContent">
      Custom Content Development
     </label>
    </div>
    <div class="checkbox-item">
     <input id="other" name="trainingType" type="checkbox" value="other"/>
     <label for="other">
      Other (Please specify below)
     </label>
    </div>
   </div>
  </div>
  <div class="form-group">
   <label for="trainingDetails">
    Please provide more details about your training needs:
   </label>
   <textarea id="trainingDetails" name="trainingDetails" rows="5"></textarea>
  </div>
  <div class="form-group">
   <label>
    Preferred Training Format*
   </label>
   <div class="radio-group">
    <div class="radio-item">
     <input id="virtual" name="trainingFormat" type="radio" value="virtual"/>
     <label for="virtual">
      Virtual (Zoom/Teams)
     </label>
    </div>
    <div class="radio-item">
     <input id="inPerson" name="trainingFormat" type="radio" value="inPerson"/>
     <label for="inPerson">
      In-Person
     </label>
    </div>
    <div class="radio-item">
     <input id="hybrid" name="trainingFormat" type="radio" value="hybrid"/>
     <label for="hybrid">
      Hybrid (Both virtual and in-person components)
     </label>
    </div>
   </div>
  </div>
 </div>
 <div class="page-break">
 </div>
 <div class="section">
  <h2>
   4. Schedule Preferences
  </h2>
  <div class="form-group">
   <label for="preferredStartDate">
    Preferred Start Date*
   </label>
   <input id="preferredStartDate" name="preferredStartDate" type="date"/>
  </div>
  <div class="form-group">
   <label for="alternateDate">
    Alternate Date
   </label>
   <input id="alternateDate" name="alternateDate" type="date"/>
  </div>
  <div class="form-group">
   <label>
    Preferred Time of Day*
   </label>
   <div class="checkbox-group">
    <div class="checkbox-item">
     <input id="morning" name="timeOfDay" type="checkbox" value="morning"/>
     <label for="morning">
      Morning (8am - 12pm)
     </label>
    </div>
    <div class="checkbox-item">
     <input id="afternoon" name="timeOfDay" type="checkbox" value="afternoon"/>
     <label for="afternoon">
      Afternoon (12pm - 4pm)
     </label>
    </div>
    <div class="checkbox-item">
     <input id="evening" name="timeOfDay" type="checkbox" value="evening"/>
     <label for="evening">
      Evening (4pm - 8pm)
     </label>
    </div>
   </div>
  </div>
  <div class="form-group">
   <label for="duration">
    Expected Duration/Time Available*
   </label>
   <select id="duration" name="duration">
    <option value="">
     Please select
    </option>
    <option value="1-2">
     1-2 hours
    </option>
    <option value="3-4">
     3-4 hours
    </option>
    <option value="half-day">
     Half-day (4 hours)
    </option>
    <option value="full-day">
     Full-day (7-8 hours)
    </option>
    <option value="multi-day">
     Multi-day session
    </option>
   </select>
  </div>
  <div class="form-group">
   <label for="attendees">
    Approximate Number of Attendees*
   </label>
   <input id="attendees" name="attendees" type="text"/>
  </div>
 </div>
 <div class="section">
  <h2>
   5. Additional Information
  </h2>
  <div class="form-group">
   <label>
    Have you used PFL Academy before?*
   </label>
   <div class="radio-group">
    <div class="radio-item">
     <input id="experienceYes" name="priorExperience" type="radio" value="yes"/>
     <label for="experienceYes">
      Yes
     </label>
    </div>
    <div class="radio-item">
     <input id="experienceNo" name="priorExperience" type="radio" value="no"/>
     <label for="experienceNo">
      No
     </label>
    </div>
   </div>
  </div>
  <div class="form-group">
   <label>
    How did you hear about PFL Academy?
   </label>
   <select id="referralSource" name="referralSource">
    <option value="">
     Please select
    </option>
    <option value="colleague">
     Colleague recommendation
    </option>
    <option value="conference">
     Conference/Event
    </option>
    <option value="email">
     Email
    </option>
    <option value="social">
     Social media
    </option>
    <option value="search">
     Web search
    </option>
    <option value="other">
     Other
    </option>
   </select>
  </div>
  <div class="form-group">
   <label for="additionalInfo">
    Any additional information or special requests?
   </label>
   <textarea id="additionalInfo" name="additionalInfo" rows="5"></textarea>
  </div>
 </div>
 <div class="section">
  <h2>
   6. Authorization
  </h2>
  <div class="form-group">
   <div class="checkbox-item">
    <input id="authorization" name="authorization" type="checkbox" value="authorized"/>
    <label for="authorization">
     I am authorized to request training on behalf of my school/district and understand that submission of this form does not guarantee training on the requested dates.*
    </label>
   </div>
  </div>
  <div class="form-group">
   <label for="signature">
    Signature*
   </label>
   <div class="signature-box">
    Sign here
   </div>
  </div>
  <div class="form-group">
   <div class="input-group">
    <div>
     <label for="signatureDate">
      Date*
     </label>
     <input id="signatureDate" name="signatureDate" type="date"/>
    </div>
    <div>
     <label for="printedName">
      Printed Name*
     </label>
     <input id="printedName" name="printedName" type="text"/>
    </div>
   </div>
  </div>
 </div>
 <div class="callout">
  <p>
   <strong>
    What happens next?
   </strong>
   After submitting this form, a member of our training team will contact you within 48 hours to confirm your request and provide additional details.
  </p>
 </div>
 <footer>
  <p>
   © 2025 PFL Academy. All rights reserved.
  </p>
  <p>
   Please submit this form via email to
   <a href="mailto:training@pflacademy.co">
    training@pflacademy.co
   </a>
   .
  </p>
 </footer>
</body>
` } />
    </div>
  );
}
