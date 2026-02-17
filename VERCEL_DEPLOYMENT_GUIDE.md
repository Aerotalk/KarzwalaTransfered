# 🚀 Vercel Deployment Configuration Guide

## ✅ What's Already Done

1. ✅ Frontend `.env.local` updated to use Railway backend
2. ✅ Backend health check verified - responding correctly
3. ✅ Backend CORS already configured to accept all `.vercel.app` domains

## 📋 Next Steps: Configure Vercel Environment Variables

### Step 1: Add Environment Variable to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: `karzwala-transfered`

2. **Navigate to Settings**
   - Click on **Settings** tab
   - Click on **Environment Variables** in the left sidebar

3. **Add New Environment Variable**
   - Click **Add New** button
   - Enter the following:
     - **Name**: `NEXT_PUBLIC_API_URL`
     - **Value**: `https://loaninneed-backend-production-c5a2.up.railway.app`
     - **Environment**: Check all three boxes:
       - ✅ Production
       - ✅ Preview
       - ✅ Development
   - Click **Save**

### Step 2: Redeploy Your Frontend

After adding the environment variable, you need to trigger a new deployment:

**Option A: Redeploy from Vercel Dashboard**
1. Go to the **Deployments** tab
2. Click the three dots (⋮) on the latest deployment
3. Click **Redeploy**
4. Confirm the redeployment

**Option B: Push to Git Repository**
1. Make any small change to your repository (or just push)
2. Vercel will automatically deploy

### Step 3: Verify Production Deployment

Once deployment is complete:

1. **Visit your deployed site**: https://karzwala-transfered.vercel.app/

2. **Test the following pages**:
   - **Register Page** (`/register`):
     - Enter a phone number
     - Request OTP
     - Verify OTP code is received
     - Complete registration
   
   - **Login Page** (`/login`):
     - Enter registered phone number
     - Request OTP
     - Verify OTP code is received
     - Complete login
   
   - **Apply Now Page** (`/apply-now`):
     - Fill out the complete application form
     - Submit the application
     - Verify success message

3. **Check Browser Console**:
   - Press F12 to open Developer Tools
   - Go to **Console** tab
   - Look for any errors (especially CORS errors)
   - Go to **Network** tab
   - Verify API calls are going to `loaninneed-backend-production-c5a2.up.railway.app`

## 🧪 Local Testing (Optional)

You can test locally first before deploying to Vercel:

```bash
cd Frontend
npm run dev
```

Then visit:
- http://localhost:3000/register
- http://localhost:3000/login
- http://localhost:3000/apply-now

All API calls will now go to the Railway backend instead of localhost.

## ✅ Verification Checklist

- [ ] Environment variable added to Vercel
- [ ] Frontend redeployed on Vercel
- [ ] Register page works on production
- [ ] Login page works on production
- [ ] Apply Now page works on production
- [ ] No CORS errors in browser console
- [ ] API calls going to Railway backend (check Network tab)

## 🔍 Troubleshooting

### Issue: CORS Error
**Solution**: The backend is already configured to accept all `.vercel.app` domains. If you see CORS errors, verify the backend URL is correct.

### Issue: API calls still going to localhost
**Solution**: 
1. Verify environment variable is set in Vercel
2. Ensure you redeployed after adding the variable
3. Clear browser cache and hard refresh (Ctrl + Shift + R)

### Issue: 404 Not Found on API endpoints
**Solution**: Check that the Railway backend URL is correct and the backend is running. Test the health endpoint: https://loaninneed-backend-production-c5a2.up.railway.app/

## 📊 Backend Health Check

You can always verify the backend is running by visiting:
https://loaninneed-backend-production-c5a2.up.railway.app/

Expected response:
```json
{
  "status": "healthy",
  "message": "LoanInNeed Backend is up and running!",
  "timestamp": "2026-02-17T18:14:34.226Z"
}
```
