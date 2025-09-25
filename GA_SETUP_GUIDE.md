# 🚀 Google Analytics Real Data Setup Guide

This guide will help you connect your portfolio to real Google Analytics data for accurate visitor counting.

## 📋 Prerequisites

- Google account with access to Google Analytics
- Your GA property ID: `G-DV2VQCPZ98`
- Vercel account (for deployment)

## 🔧 Step-by-Step Setup

### **Step 1: Create Google Cloud Project**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. **Project Name**: `Portfolio Analytics`
4. Click "Create"

### **Step 2: Enable Google Analytics Reporting API**

1. In your new project, go to **"APIs & Services" → "Library"**
2. Search for **"Google Analytics Reporting API"**
3. Click on it and press **"Enable"**

### **Step 3: Create Service Account**

1. Go to **"APIs & Services" → "Credentials"**
2. Click **"Create Credentials" → "Service Account"**
3. Fill in:
   - **Service account name**: `portfolio-analytics`
   - **Service account ID**: `portfolio-analytics@your-project.iam.gserviceaccount.com`
   - **Description**: `Service account for portfolio visitor tracking`
4. Click **"Create and Continue"**
5. Skip roles (click **"Continue"**)
6. Click **"Done"**

### **Step 4: Generate Service Account Key**

1. Find your service account in the credentials list
2. Click on the service account email
3. Go to **"Keys" tab**
4. Click **"Add Key" → "Create new key"**
5. Choose **"JSON"** format
6. Click **"Create"** - This downloads a JSON file
7. **Save this file securely** - you'll need it for environment variables

### **Step 5: Add Service Account to Google Analytics**

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property (`G-DV2VQCPZ98`)
3. Click **"Admin"** (gear icon)
4. In **"Property"** column:
   - Click **"Property access management"**
   - Click **"Add users"**
   - **Email**: `jayanti-portfolio@jayanti-portfolio.iam.gserviceaccount.com`
   - **Role**: **"Viewer"** (read-only access)
   - Click **"Add"**

### **Step 6: Get Your GA View ID**

1. In Google Analytics Admin:
   - Go to **"View"** column
   - Click **"View Settings"**
   - **Copy the "View ID"** (looks like: `123456789`)

### **Step 7: Set Up Environment Variables in Vercel**

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your portfolio project
3. Go to **"Settings" → "Environment Variables"**
4. Add these variables:

```
GA_SERVICE_ACCOUNT_EMAIL = jayanti-portfolio@jayanti-portfolio.iam.gserviceaccount.com
GA_PRIVATE_KEY = -----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n
GA_VIEW_ID = 123456789
```

**Note**: For `GA_PRIVATE_KEY`, copy the entire private key from your JSON file, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` parts.

### **Step 8: Install Required Package**

Add this to your `package.json` dependencies:

```bash
npm install googleapis
```

### **Step 9: Enable Real GA Data**

1. Open `api/ga-config.js`
2. Change `simulateData: true` to `simulateData: false`
3. Uncomment the real GA code in `api/visitors.js`

### **Step 10: Deploy**

1. Commit your changes
2. Push to your repository
3. Vercel will automatically redeploy

## ✅ Verification

After setup, your visitor counter will show:

- **Real unique visitor count** from Google Analytics
- **Data source**: "Google Analytics API"
- **Accurate global visitor numbers**

## 🔍 Troubleshooting

### **Common Issues:**

1. **"Permission denied"**: Make sure service account has "Viewer" role in GA
2. **"Invalid credentials"**: Check environment variables are set correctly
3. **"View not found"**: Verify GA_VIEW_ID is correct
4. **"API not enabled"**: Ensure Google Analytics Reporting API is enabled

### **Testing Locally:**

```bash
# Test the API endpoint
curl http://localhost:3000/api/visitors
```

## 📊 What You'll Get

- **Total Unique Users**: Real global visitor count
- **Total Sessions**: Number of visits
- **Total Page Views**: All page views
- **Bounce Rate**: Percentage of single-page sessions
- **Average Session Duration**: Time spent on site

## 🎯 Next Steps

Once set up, your visitor counter will automatically update with real data from Google Analytics, showing accurate global visitor statistics for your portfolio!
