# Contact Form Integration - Quick Guide

## What Changed

### 1. Service Function Added
**File:** `src/services/contactUs/contactUsService.js`

```javascript
// NEW FUNCTION ADDED ✅
export const submitContactEnquiry = async (formData) => {
  const response = await apiClient.post('/api/v1/contact-enquiries', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

// EXISTING FUNCTION UNCHANGED ✅
export const getContactUsSection = async () => { ... }
```

---

### 2. Component Updated
**File:** `src/components/contactus/ContactFormSection.jsx`

#### New Imports:
```javascript
import { useState, useRef } from 'react';
import { submitContactEnquiry } from '../../services/contactUs/contactUsService';
```

#### New State Management:
```javascript
const [attachment, setAttachment] = useState(null);
const [isSubmitting, setIsSubmitting] = useState(false);
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const fileInputRef = useRef(null);
```

#### New Handlers:
```javascript
// File upload
const handleFileChange = (e) => { ... }
const handleDrop = (e) => { ... }
const handleDragOver = (e) => { ... }

// Form submission with API call
const handleSubmit = async (e) => {
  // Validation
  // Create FormData with backend field names
  // Call submitContactEnquiry()
  // Handle success/error
}
```

#### New UI Elements:
```jsx
{/* Success Message Box - GREEN */}
{successMessage && (
  <div style={{ backgroundColor: '#D1FAE5', ... }}>
    {successMessage}
  </div>
)}

{/* Error Message Box - RED */}
{errorMessage && (
  <div style={{ backgroundColor: '#FEE2E2', ... }}>
    {errorMessage}
  </div>
)}

{/* Hidden File Input */}
<input ref={fileInputRef} type="file" style={{ display: 'none' }} />

{/* File Drop Zone with Drag/Drop Support */}
<div onClick={() => fileInputRef.current?.click()}
     onDrop={handleDrop}
     onDragOver={handleDragOver}>
  {attachment ? `File: ${attachment.name}` : 'Click to upload...'}
</div>

{/* Submit Button with Loading State */}
<button disabled={isSubmitting}
        style={{ background: isSubmitting ? '#b0b3b8' : '#004CA5' }}>
  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
</button>
```

---

## Form Data Mapping

Frontend field names → Backend field names:

| Frontend | Backend |
|----------|---------|
| firstName | first_name |
| lastName | last_name |
| company | company |
| email | email |
| role | inquiry_type |
| subject | subject |
| message | message |
| attachment (file) | attachment |

---

## API Flow

```
User clicks Submit
  ↓
handleSubmit() called
  ↓
Form validation
  ↓
Create FormData with mapped fields
  ↓
submitContactEnquiry(formData)
  ↓
apiClient.post('/api/v1/contact-enquiries', formData)
  ↓
Backend processes
  ↓
Returns: { success, message, data: { reference_number } }
  ↓
Success: Show message + reference number + reset form
  OR
  Error: Show error message + keep form data
```

---

## UI States

### Normal State
- Form fields visible
- File zone shows "Click to upload or drag and drop"
- Submit button shows "Submit Inquiry"
- Submit button is blue (#004CA5)
- No messages visible

### While Submitting
- Form fields disabled? No - user can read
- File zone shows file name if selected
- Submit button shows "Submitting..."
- Submit button is disabled
- Submit button grayed out
- No messages visible yet

### After Success
- Success message appears (green box)
- Shows reference number
- Form fields cleared
- File zone reset
- Submit button back to normal

### After Error
- Error message appears (red box)
- Form fields retain data (user can fix)
- File still selected
- Submit button back to normal
- User can try again

---

## No Changes To

✅ Form layout
✅ Form spacing
✅ Colors and styling
✅ Typography
✅ Button design
✅ Input design
✅ Labels
✅ Responsive design
✅ Contact info section
✅ Footer
✅ Navbar
✅ Any other pages
✅ Any other components

---

## What Users See

### When Submitting Valid Form
```
┌─────────────────────────────────────┐
│ Form Section                        │
├─────────────────────────────────────┤
│ First Name: John                    │
│ Last Name: Doe                      │
│ Company: ABC Ltd                    │
│ Email: john@example.com             │
│ I Am A: Employer Looking for Talent │
│ Subject: Need Help                  │
│ Message: [long message...]          │
│ File: resume.pdf                    │
│ [SUBMITTING... button - disabled]   │
└─────────────────────────────────────┘
```

### After Successful Submission
```
┌─────────────────────────────────────┐
│ Form Section                        │
├─────────────────────────────────────┤
│ ✓ Your enquiry has been submitted   │
│   successfully. Reference Number:   │
│   ENQ-20260820-0001                 │
│                                     │
│ First Name: [CLEARED]               │
│ Last Name: [CLEARED]                │
│ Company: [CLEARED]                  │
│ Email: [CLEARED]                    │
│ I Am A: [CLEARED]                   │
│ Subject: [CLEARED]                  │
│ Message: [CLEARED]                  │
│ File: [CLEARED]                     │
│ [Submit Inquiry button - normal]    │
└─────────────────────────────────────┘
```

### On Validation Error
```
┌─────────────────────────────────────┐
│ Form Section                        │
├─────────────────────────────────────┤
│ ✗ Email is required                 │
│                                     │
│ First Name: John [KEPT]             │
│ Last Name: Doe [KEPT]               │
│ Company: [KEPT]                     │
│ Email: [EMPTY] ← ERROR HERE         │
│ I Am A: [KEPT]                      │
│ Subject: [KEPT]                     │
│ Message: [KEPT]                     │
│ File: [KEPT]                        │
│ [Submit Inquiry button - normal]    │
└─────────────────────────────────────┘
```

---

## Testing Steps

1. **Visit Contact Us page**
   - Everything should look the same
   - No layout changes

2. **Fill form with valid data**
   - All fields accept input normally
   - File drag/drop zone works

3. **Click Submit**
   - Button becomes "Submitting..."
   - Button disabled (can't click again)
   - No page navigation

4. **After ~1-2 seconds**
   - Green success message appears
   - Reference number shows
   - Form clears
   - Button back to normal

5. **Try invalid submission**
   - Clear email field
   - Click Submit
   - Red error message "Email is required"
   - Other form data still there
   - Button never disabled (failed at validation)

6. **Try with error**
   - Simulate network error or invalid form
   - Red error message appears
   - Form data stays
   - Click Submit again after fixing
   - Submission succeeds

---

## File Upload Details

### How to Use
1. Click the drop zone
2. Select file from browser dialog
OR
1. Drag file from desktop
2. Drop on drop zone
3. File name displays
4. Submit form

### Supported Files
- PDF documents
- Microsoft Word (.doc, .docx)
- Images (png, jpg, jpeg, gif, webp)
- Max size: 5MB

### What Happens
- File stored in component state
- On submit, added to FormData as "attachment"
- Backend receives multipart request
- File stored to cloud/S3
- URL returned and saved to database

---

## Key Code Patterns

### Form Data Creation
```javascript
const submitFormData = new FormData();
submitFormData.append('first_name', formData.firstName.trim());
submitFormData.append('last_name', formData.lastName.trim());
// ... more fields
if (attachment) {
  submitFormData.append('attachment', attachment);
}
```

### API Call
```javascript
const response = await submitContactEnquiry(submitFormData);
if (response.success) {
  // Handle success
} else {
  // Handle error
}
```

### Error Handling
```javascript
try {
  // Submit
} catch (error) {
  if (error.response?.data?.message) {
    setErrorMessage(error.response.data.message);
  } else {
    setErrorMessage('Something went wrong...');
  }
} finally {
  setIsSubmitting(false);
}
```

---

## Environment Setup

No new environment variables needed.

Existing setup continues to work:
```
VITE_API_BASE_URL=http://localhost:3000
```

For production:
```
VITE_API_BASE_URL=https://api.yourdomain.com
```

---

## Summary

✅ Form now submits to API
✅ Shows success message with reference number
✅ Shows error messages on failure
✅ Handles file uploads
✅ Prevents duplicate submissions
✅ Validates required fields
✅ Resets form after success
✅ Preserves form on error
✅ All styling unchanged
✅ Ready for production

**Total Changes:**
- 2 files modified
- No files deleted
- No dependencies added
- No breaking changes
