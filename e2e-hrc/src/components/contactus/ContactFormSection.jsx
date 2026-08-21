import { useState, useRef } from 'react';
import { FiMapPin, FiClock, FiGlobe } from 'react-icons/fi';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import dropIcon from '../../assets/about us images/drop icon.png';
import { submitContactEnquiry } from '../../services/contactUs/contactUsService';
import { useContactUsData } from '../../hooks/contactUs/useContactUsData';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    role: '',
    subject: '',
    message: '',
  });

  const [attachment, setAttachment] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  // Fetch dynamic Head Office and Contact Card data
  const { headOffice, contactCard } = useContactUsData();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error/success messages when user starts typing
    if (errorMessage || successMessage) {
      setErrorMessage('');
      setSuccessMessage('');
    }
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      setAttachment(file);
    }
  }

  function handleDropZoneClick() {
    fileInputRef.current?.click();
  }

  // Map frontend role values to backend iam values
  function mapRoleToIam(role) {
    const roleMap = {
      employer: 'employer',
      employee: 'job_seeker',
      partner: 'recruitment_partner',
      other: 'other',
    };
    return roleMap[role] || role;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Clear previous messages
    setErrorMessage('');
    setSuccessMessage('');

    // Basic validation
    if (!formData.firstName.trim()) {
      setErrorMessage('First name is required.');
      return;
    }

    if (!formData.lastName.trim()) {
      setErrorMessage('Last name is required.');
      return;
    }

    if (!formData.company.trim()) {
      setErrorMessage('Company is required.');
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage('Email is required.');
      return;
    }

    // Basic email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.role) {
      setErrorMessage('Please select an option for "I AM...".');
      return;
    }

    if (!formData.subject.trim()) {
      setErrorMessage('Subject is required.');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Message is required.');
      return;
    }

    try {
      setIsSubmitting(true);

      // Create FormData object
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName.trim());
      submitData.append('lastName', formData.lastName.trim());
      submitData.append('company', formData.company.trim());
      submitData.append('email', formData.email.trim());
      submitData.append('iam', mapRoleToIam(formData.role));
      submitData.append('subject', formData.subject.trim());
      submitData.append('message', formData.message.trim());

      // Add attachment only if a file is selected
      if (attachment) {
        submitData.append('attachment', attachment);
      }

      // Submit to backend
      const response = await submitContactEnquiry(submitData);

      if (response.success) {
        setSuccessMessage(response.message || 'Your enquiry has been submitted successfully.');

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          role: '',
          subject: '',
          message: '',
        });
        setAttachment(null);

        // Clear file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setErrorMessage(response.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMsg = error.response?.data?.message || 'Something went wrong. Please try again.';
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-[#F6F3F2] contact-section" style={{ padding: '64px 0' }}>
      <div
        className="mx-auto flex flex-col lg:flex-row contact-container"
        style={{ maxWidth: '1312px', gap: '77px', padding: '0 16px' }}
      >
        {/* LEFT COLUMN: FORM CARD */}
        <div
          className="w-full bg-white form-card"
          style={{
            maxWidth: '772px',
            flex: 1,
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '40px',
              letterSpacing: '-0.32px',
              color: '#1B1C1C',
              margin: 0,
            }}
          >
            Send Us A Message
          </h2>

          {successMessage && (
            <div
              style={{
                marginTop: '24px',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: '#D4EDDA',
                border: '1px solid #C3E6CB',
                color: '#155724',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
              }}
            >
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div
              style={{
                marginTop: '24px',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: '#F8D7DA',
                border: '1px solid #F5C6CB',
                color: '#721C24',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
              }}
            >
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ marginTop: '32px' }}>
            {/* Row 1: First Name / Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6" style={{ gap: '24px 24px' }}>
              <div>
                <label
                  htmlFor="firstName"
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0.96px',
                    textTransform: 'uppercase',
                    color: '#424752',
                    marginBottom: '11px',
                  }}
                >
                  FIRST NAME
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white placeholder-[#6B7280]"
                  style={{
                    padding: '13px 16px',
                    height: '44px',
                    border: '1px solid #F1F2F9',
                    borderRadius: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '23px',
                    color: '#1B1C1C',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0.96px',
                    textTransform: 'uppercase',
                    color: '#424752',
                    marginBottom: '11px',
                  }}
                >
                  LAST NAME
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white placeholder-[#6B7280]"
                  style={{
                    padding: '13px 16px',
                    height: '44px',
                    border: '1px solid #F1F2F9',
                    borderRadius: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '23px',
                    color: '#1B1C1C',
                  }}
                />
              </div>
            </div>

            {/* Row 2: Company / Email */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px', marginTop: '36px' }}>
              <div>
                <label
                  htmlFor="company"
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0.96px',
                    textTransform: 'uppercase',
                    color: '#424752',
                    marginBottom: '11px',
                  }}
                >
                  COMPANY
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Enter company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white placeholder-[#6B7280]"
                  style={{
                    padding: '13px 16px',
                    height: '44px',
                    border: '1px solid #F1F2F9',
                    borderRadius: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '23px',
                    color: '#1B1C1C',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0.96px',
                    textTransform: 'uppercase',
                    color: '#424752',
                    marginBottom: '11px',
                  }}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white placeholder-[#6B7280]"
                  style={{
                    padding: '13px 16px',
                    height: '44px',
                    border: '1px solid #F1F2F9',
                    borderRadius: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '23px',
                    color: '#1B1C1C',
                  }}
                />
              </div>
            </div>

            {/* Row 3: I am a... / Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px', marginTop: '36px' }}>
              <div>
                <label
                  htmlFor="role"
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0.96px',
                    textTransform: 'uppercase',
                    color: '#424752',
                    marginBottom: '11px',
                  }}
                >
                  I AM A...
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-white"
                  style={{
                    padding: '10px 16px',
                    border: '1px solid #F1F2F9',
                    borderRadius: '16px',
                    outline: 'none',
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#1B1C1C',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">Employer Looking for Talent</option>
                  <option value="employer">Employer Looking for Talent</option>
                  <option value="employee">Job Seeker / Candidate</option>
                  <option value="partner">Recruitment Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0.96px',
                    textTransform: 'uppercase',
                    color: '#424752',
                    marginBottom: '11px',
                  }}
                >
                  SUBJECT
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Executive Search Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white placeholder-[#6B7280]"
                  style={{
                    padding: '13px 16px',
                    height: '44px',
                    border: '1px solid #F1F2F9',
                    borderRadius: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '23px',
                    color: '#1B1C1C',
                  }}
                />
              </div>
            </div>

            {/* Row 4: Your Message */}
            <div style={{ marginTop: '36px' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '0.96px',
                  textTransform: 'uppercase',
                  color: '#424752',
                  marginBottom: '11px',
                }}
              >
                YOUR MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help your business grow?"
                value={formData.message}
                onChange={handleChange}
                  className="w-full bg-white resize-none placeholder-[#6B7280]"
                style={{
                  padding: '16px 16px 88px',
                  height: '128px',
                  border: '1px solid #F1F2F9',
                  borderRadius: '16px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#1B1C1C',
                  overflow: 'hidden',
                }}
              />
            </div>

            {/* Row 5: Attach Resume / Brief */}
            <div style={{ marginTop: '36px' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '0.96px',
                  textTransform: 'uppercase',
                  color: '#424752',
                  marginBottom: '11px',
                }}
              >
                ATTACH RESUME / BRIEF (OPTIONAL)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <div
                className="flex flex-col items-center justify-center w-full cursor-pointer"
                onClick={handleDropZoneClick}
                style={{
                  border: '2px dashed #F1F2F9',
                  borderRadius: '16px',
                  height: '123px',
                  padding: '32px',
                  gap: '15px',
                  boxSizing: 'border-box',
                }}
              >
                {attachment ? (
                  <>
                    <img src={dropIcon} alt="" width={22} height={16} />
                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '24px',
                        color: '#004CA5',
                        margin: 0,
                        textAlign: 'center',
                      }}
                    >
                      ✓ {attachment.name}
                    </p>
                  </>
                ) : (
                  <>
                    <img src={dropIcon} alt="" width={22} height={16} />
                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#424752',
                        margin: 0,
                        textAlign: 'center',
                      }}
                    >
                      Click to upload or drag and drop
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Row 6: Submit Button */}
            <div style={{ marginTop: '32px' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white border-none cursor-pointer"
                style={{
                  background: isSubmitting ? '#999999' : '#004CA5',
                  borderRadius: '16px',
                  height: '44px',
                  padding: '16px 0',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '28px',
                  boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => !isSubmitting && (e.target.style.background = '#003b82')}
                onMouseLeave={(e) => !isSubmitting && (e.target.style.background = '#004CA5')}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: INFO SIDE */}
        <div className="w-full lg:w-[464px] shrink-0 flex flex-col info-side" style={{ gap: '32px' }}>
          {/* Head Office Birmingham Card */}
          <div
            className="w-full bg-white info-card"
            style={{
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '28px',
                color: '#004CA5',
                margin: 0,
              }}
            >
              {headOffice?.title || 'Head Office Birmingham'}
            </h3>

            <div className="flex flex-col" style={{ gap: '24px', marginTop: '24px' }}>
              <div className="flex gap-4 items-start">
                <FiMapPin size={16} color="#004CA5" className="shrink-0" style={{ marginTop: '2px' }} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#1B1C1C',
                  }}
                >
                  {headOffice
                    ? `${headOffice.address_line}, ${headOffice.city}, ${headOffice.state}, ${headOffice.postal_code}`
                    : '1204B Stratford Road, Hall Green, Birmingham, West Midlands, B28 8AS'}
                </span>
              </div>

              <div className="flex gap-4 items-start">
                <FiClock size={20} color="#004CA5" className="shrink-0" />
                <div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#1B1C1C',
                    }}
                  >
                    {headOffice?.opening_hours_title || 'Opening Hours'}
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#424752',
                    }}
                  >
                    {headOffice?.opening_hours ? headOffice.opening_hours.split('\\n')[0] : 'Monday – Friday: 09:00 – 18:00'}
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#424752',
                    }}
                  >
                    {headOffice?.opening_hours ? headOffice.opening_hours.split('\\n')[1] : 'Saturday – Sunday: Closed'}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FiGlobe size={20} color="#004CA5" className="shrink-0" />
                <div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#1B1C1C',
                    }}
                  >
                    {headOffice?.global_inquiries_title || 'Global Inquiries'}
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#424752',
                    }}
                  >
                    {headOffice?.global_inquiries_description ||
                      'Available via virtual consultation in GMT, GST, and IST time zones.'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Connect Card */}
          <div
            className="w-full bg-white ready-connect-card"
            style={{
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '28px',
                color: '#000000',
                margin: 0,
              }}
            >
             
              {contactCard?.title || "Ready to Connect? Contact Us Today"}
            </h3>

            <div className="flex flex-col" style={{ gap: '16px', marginTop: '32px' }}>
              <div
                className="bg-white contact-action-btn"
                style={{
                  border: '1px solid rgba(228,226,225,0.5)',
                  borderRadius: '24px',
                  padding: '29px 32px',
                  boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0,54,121,0.1)',
                  }}
                >
                  <FaPhoneAlt size={18} color="#004CA5" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '15px',
                      lineHeight: '28px',
                      color: '#1B1C1C',
                      margin: 0,
                    }}
                  >
                   {contactCard?.phone_title || "Call Us"} 
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#424752',
                      margin: 0,
                    }}
                  >
                    {contactCard?.phone_number || '+44 121 778 2400'}
                  </p>
                </div>
              </div>

              <div
                className="bg-white contact-action-btn"
                style={{
                  border: '1px solid rgba(228,226,225,0.5)',
                  borderRadius: '24px',
                  padding: '29px 32px',
                  boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0,54,121,0.1)',
                  }}
                >
                  <FaEnvelope size={18} color="#004CA5" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '15px',
                      lineHeight: '28px',
                      color: '#1B1C1C',
                      margin: 0,
                    }}
                  >
                  {contactCard?.email_title || "Email Us"}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#424752',
                      margin: 0,
                    }}
                  >
                    {contactCard?.email_address || 'info@e2ehrc.co.uk'}
                  </p>
                </div>
              </div>

              <div
                className="bg-white contact-action-btn"
                style={{
                  border: '1px solid rgba(228,226,225,0.5)',
                  borderRadius: '24px',
                  padding: '29px 32px',
                  boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0,54,121,0.1)',
                  }}
                >
                  <FaMapMarkerAlt size={18} color="#004CA5" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '15px',
                      lineHeight: '28px',
                      color: '#1B1C1C',
                      margin: 0,
                    }}
                  >
                    {contactCard?.office_title || "Visit Office"}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#424752',
                      margin: 0,
                    }}
                  >
                    {contactCard?.office_address || 'Birmingham, B28 8AS'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

