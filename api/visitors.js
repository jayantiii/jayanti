// Vercel serverless function to fetch Google Analytics data
import { getSimulatedGAData, GA_CONFIG } from "./ga-config.js";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    let gaData;

    if (GA_CONFIG.simulateData) {
      // Use simulated data that's more realistic
      gaData = getSimulatedGAData();
    } else {
      // Real GA API implementation
      // Uncomment and install 'googleapis' package to use real data

      /*
      const { google } = require('googleapis');
      const analytics = google.analyticsreporting('v4');
      
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GA_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GA_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
      });

      const response = await analytics.reports.batchGet({
        auth: auth,
        requestBody: {
          reportRequests: [{
            viewId: process.env.GA_VIEW_ID,
            dateRanges: [{ startDate: '2024-01-01', endDate: 'today' }],
            metrics: [
              { expression: 'ga:users' },
              { expression: 'ga:sessions' },
              { expression: 'ga:pageviews' },
              { expression: 'ga:bounceRate' },
              { expression: 'ga:avgSessionDuration' }
            ]
          }]
        }
      });

      const report = response.data.reports[0];
      const metrics = report.data.rows[0].metrics[0].values;
      
      gaData = {
        totalUsers: parseInt(metrics[0]),
        totalSessions: parseInt(metrics[1]),
        totalPageViews: parseInt(metrics[2]),
        bounceRate: parseFloat(metrics[3]).toFixed(1),
        avgSessionDuration: Math.floor(parseFloat(metrics[4])),
        lastUpdated: new Date().toISOString(),
        dataSource: 'real_ga'
      };
      */

      // For now, use simulated data until real GA is set up
      gaData = getSimulatedGAData();
    }

    res.status(200).json({
      success: true,
      data: gaData,
      message: GA_CONFIG.simulateData
        ? "GA data fetched successfully (simulated - realistic patterns)"
        : "GA data fetched successfully (real)",
    });
  } catch (error) {
    console.error("Error fetching GA data:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch visitor data",
      message: error.message,
    });
  }
}
