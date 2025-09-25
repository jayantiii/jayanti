# ✅ Google Analytics Setup Checklist

## Your Service Account Details:

- **Email**: `jayanti-portfolio@jayanti-portfolio.iam.gserviceaccount.com`
- **GA Property**: `G-DV2VQCPZ98`

## 📋 Next Steps:

### **Step 1: Add Service Account to Google Analytics**

- [ ] Go to [Google Analytics](https://analytics.google.com/)
- [ ] Select property `G-DV2VQCPZ98`
- [ ] Go to **Admin** → **Property access management**
- [ ] Click **"Add users"**
- [ ] **Email**: `jayanti-portfolio@jayanti-portfolio.iam.gserviceaccount.com`
- [ ] **Role**: **"Viewer"**
- [ ] Click **"Add"**

### **Step 2: Get Your View ID**

- [ ] In GA Admin → **View Settings**
- [ ] Copy the **View ID** (looks like: `123456789`)
- [ ] Save this number for environment variables

### **Step 3: Download Service Account Key**

- [ ] Go to [Google Cloud Console](https://console.cloud.google.com/)
- [ ] Find your service account: `jayanti-portfolio@jayanti-portfolio.iam.gserviceaccount.com`
- [ ] Click on it → **Keys** tab
- [ ] Click **"Add Key" → "Create new key"**
- [ ] Choose **JSON** format
- [ ] Download the JSON file
- [ ] **Keep this file secure!**

### **Step 4: Set Environment Variables in Vercel**

- [ ] Go to [Vercel Dashboard](https://vercel.com/dashboard)
- [ ] Select your portfolio project
- [ ] Go to **Settings** → **Environment Variables**
- [ ] Add these variables:

```
GA_SERVICE_ACCOUNT_EMAIL = jayanti-portfolio@jayanti-portfolio.iam.gserviceaccount.com
GA_PRIVATE_KEY = [Copy private key from JSON file]
GA_VIEW_ID = [Your View ID from Step 2]
```

### **Step 5: Install Package**

- [ ] Run: `npm install googleapis`

### **Step 6: Enable Real GA Data**

- [ ] Open `api/ga-config.js`
- [ ] Change `simulateData: true` to `simulateData: false`
- [ ] Uncomment the real GA code in `api/visitors.js`

### **Step 7: Deploy**

- [ ] Commit and push changes
- [ ] Vercel will auto-deploy
- [ ] Test: Visit your site and check visitor counter

## 🎯 Expected Result:

Your visitor counter will show real global visitor data from Google Analytics!

## 🔍 Testing:

```bash
# Test API endpoint
curl https://your-domain.vercel.app/api/visitors
```

## 📞 Need Help?

Check the full guide in `GA_SETUP_GUIDE.md` for detailed instructions.
