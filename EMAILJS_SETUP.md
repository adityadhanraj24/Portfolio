# Email Setup Guide for Contact Form

Your contact form is now integrated with EmailJS! Follow these steps to enable email sending:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Set Up Your Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Service Name**: `gmail` (or your choice)
   - **Provider**: Select **Gmail**
4. Click **Create Service**
5. Follow the instructions to connect your Gmail account:
   - You'll be redirected to Gmail for authorization
   - Allow EmailJS to access your Gmail account

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set template name as: `contact_form`
4. Use this template structure:

```
From: {{from_email}}
Subject: New Contact Form Submission - {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

5. Click **Save**
6. Copy your **Template ID** (appears at the top, format: `template_xxxxxxxxx`)

## Step 4: Get Your Credentials

You need 2 credentials to complete the setup:

1. **Public Key**:
   - Go to **Account** → **API Keys**
   - Copy your **Public Key** (format: `xxxxxxxxxxxxxxxxxxxxxxxx`)

2. **Service ID**:
   - Go to **Email Services**
   - Your service appears with its **Service ID** (format: `service_xxxxxxxxx`)

## Step 5: Update Your Code

Open [src/components/Contact.tsx](src/components/Contact.tsx) and replace these placeholders:

```tsx
// Line 16 - Replace with Your PUBLIC KEY
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// Lines 25-27 - Replace with Your IDs
await emailjs.send(
  "YOUR_SERVICE_ID_HERE",           // Your Gmail service ID
  "YOUR_TEMPLATE_ID_HERE",          // Template ID you created
  {
    // ... rest stays the same
  }
);
```

## Example (after filling in):

```tsx
emailjs.init("px1a2b3c4d5e6f7g8h9i0j1k2l");

await emailjs.send(
  "service_abc123def456",
  "template_xyz789",
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
    to_email: "dhanrajaditya743@email.com",
  }
);
```

## Step 6: Test It!

1. Run your development server: `npm run dev`
2. Go to your portfolio's contact section
3. Fill in the form and submit
4. Check your email inbox for the message
5. The form will show "Message Sent! ✓" on success

## Troubleshooting

- **Messages not arriving?**
  - Verify Service ID and Template ID are correct
  - Check your email spam folder
  - Ensure Gmail service is connected in EmailJS dashboard

- **"Failed to send message" error?**
  - Check browser console for detailed error
  - Verify all 3 credentials (Public Key, Service ID, Template ID) are correct
  - Make sure your email variables match the template

- **Rate limits?**
  - EmailJS free tier allows 200 emails/month
  - Upgrade to Pro for more emails

## Variables Reference

Your template can use these variables:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - The message content
- `{{to_email}}` - Your email (dhanrajaditya743@email.com)

That's it! Your contact form emails are now live! 🎉
