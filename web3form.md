# Web3Form Integration Guide

## Overview

Web3Form is a free, simple form backend service that handles contact form submissions and sends emails directly to your inbox. No backend server needed!

---

## Step 1: Create a Web3Form Account

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click **"Start Free"** button
3. Sign up with your email address
4. Verify your email
5. Log in to your dashboard

---

## Step 2: Generate Your Access Key

1. After logging in, go to your **Dashboard**
2. Look for **"Access Key"** or **"API Key"** section
3. Click **"Create"** or **"Generate New Key"** button
4. Copy the generated access key (keep it safe!)
5. Your access key will look like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

---

## Step 3: Verify Your Email

1. In the Web3Form dashboard, go to **"Domains & Emails"**
2. Add your email address where you want to receive form submissions
3. Web3Form will send a verification email
4. Click the verification link in the email
5. Your email is now verified and active

---

## Step 4: Update Your Contact Form

The contact form has already been updated to use Web3Form. Here's what was changed:

### Updated Contact.jsx Implementation:

The form now:

- Sends submissions to Web3Form's API endpoint
- Includes your access key in the request
- Sends emails to your verified email address
- Shows success/error feedback to users
- Resets the form after successful submission

### Environment Variable Setup:

1. Open `.env` file in your project root
2. Replace `YOUR_ACCESS_KEY_HERE` with your actual Web3Form access key:
   ```
   VITE_WEB3FORMS_KEY=your_actual_access_key_here
   ```
3. Save the file
4. The form will automatically use this key from the environment variable

### How It Works:

The Contact.jsx reads the key from environment variables:

```jsx
const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

// The form now uses this key to submit:
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    access_key: accessKey, // Uses environment variable
    from_name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  }),
});
```

### Security:

- The `.env` file is already added to `.gitignore`
- Your access key will NOT be committed to Git
- The key is only loaded in your local environment
- Safe for production deployment

---

## Step 5: Add Your Access Key to the .env File

1. Open `.env` file in your project root
2. Find the line: `VITE_WEB3FORMS_KEY=YOUR_ACCESS_KEY_HERE`
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual Web3Form access key
4. Example:
   ```
   VITE_WEB3FORMS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```

---

## Step 6: Test Your Form

1. Save your changes
2. Go to your portfolio website
3. Scroll to the "Get In Touch" / Contact section
4. Fill out the contact form with test data:
   - Name: "Test User"
   - Email: "test@example.com"
   - Subject: "Test Message"
   - Message: "This is a test message"
5. Click "Send Message"
6. Check your verified email inbox for the submission
7. You should receive an email within a few seconds

---

## Security Best Practices

### Option A: Frontend Access Key (Current - For Portfolio)

- Good for public portfolios and websites
- Your access key is visible in browser (but restricted to submissions only)
- Web3Form protects against abuse with rate limiting
- **This is fine for portfolio contact forms**

### Option B: Backend Access Key (For Production Apps)

- Store access key on your backend server
- More secure for high-traffic applications
- Only submit forms to your own server, which forwards to Web3Form

### Rate Limiting

- Web3Form includes free rate limiting
- Default: 50 submissions per day (free tier)
- Premium plans have higher limits

---

## Customization Options

### Email Recipient

To send emails to a different address:

```jsx
body: JSON.stringify({
  access_key: "YOUR_ACCESS_KEY",
  from_name: formData.name,
  email: formData.email,
  subject: formData.subject,
  message: formData.message,
  to_email: "your-email@example.com", // Add this line
});
```

### Email Subject in Inbox

To customize the subject line in your inbox:

```jsx
body: JSON.stringify({
  access_key: "YOUR_ACCESS_KEY",
  from_name: formData.name,
  email: formData.email,
  subject: `New Portfolio Inquiry from ${formData.name}`,
  message: formData.message,
});
```

### Auto-Reply to User

To send an auto-reply to the form submitter:

```jsx
body: JSON.stringify({
  access_key: "YOUR_ACCESS_KEY",
  from_name: formData.name,
  email: formData.email,
  subject: formData.subject,
  message: formData.message,
  redirect: "https://yourwebsite.com/thank-you", // Redirect after submit
});
```

---

## Troubleshooting

### Problem: "Error sending message"

**Solution:**

- Verify your access key is correct
- Check that your email is verified in Web3Form dashboard
- Check browser console for more details (F12 > Console tab)

### Problem: Not receiving emails

**Solution:**

- Confirm email is verified in Web3Form dashboard
- Check spam/junk folder
- Verify the email address in the contact form

### Problem: CORS errors

**Solution:**

- This is normal for frontend submissions
- Web3Form handles CORS automatically
- No additional configuration needed

### Problem: Rate limit exceeded

**Solution:**

- You've exceeded the free tier limit
- Wait for the next day or upgrade to premium plan
- Web3Form shows current usage in dashboard

---

## Dashboard Features

In your Web3Form dashboard, you can:

1. **View Submissions**: See all form submissions with timestamps
2. **Download Reports**: Export submission data as CSV
3. **Analytics**: Track submission trends
4. **Email Verification**: Manage verified email addresses
5. **Settings**: Configure auto-replies and redirects
6. **API Keys**: Manage and rotate access keys
7. **Pricing**: View usage and upgrade if needed

---

## Free vs Premium Pricing

### Free Tier

- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Access to submissions log
- ✅ Basic email verification
- ✅ Perfect for portfolio websites

### Premium Tier (Optional)

- ✅ Unlimited submissions
- ✅ Advanced analytics
- ✅ Custom email templates
- ✅ Multiple forms support
- ✅ Priority support

---

## Next Steps

1. ✅ Create Web3Form account
2. ✅ Generate access key
3. ✅ Verify your email
4. ✅ Add access key to `.env` file
5. ✅ Test the form
6. ✅ Deploy to production

---

## Important: .env File Setup

The `.env` file is already created with a placeholder. You just need to:

1. Open `.env` in your project root
2. Replace `YOUR_ACCESS_KEY_HERE` with your actual Web3Form access key
3. Save and reload your dev server
4. The form will automatically use the key from the environment variable

**Do NOT commit the `.env` file to Git!** It's already in `.gitignore` to protect your access key.

---

## Useful Links

- **Web3Form Website**: https://web3forms.com
- **Documentation**: https://docs.web3forms.com
- **API Reference**: https://docs.web3forms.com/api-reference
- **Dashboard**: https://web3forms.com/dashboard
- **Support**: https://web3forms.com/contact

---

## Summary

Your portfolio contact form is now fully functional with Web3Form backend! Users can:

- Fill out the contact form
- Send messages directly to your email
- Get instant feedback on submission status
- You receive their contact information and message

No backend server needed, completely free, and ready for production! 🚀
