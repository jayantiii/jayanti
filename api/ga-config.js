// Google Analytics Configuration
// Set simulateData: false to use real GA data

export const GA_CONFIG = {
  // Your GA property ID
  propertyId: "G-DV2VQCPZ98",

  // Set to false when you have real GA credentials
  simulateData: true,

  // Real GA implementation requires these environment variables:
  // GA_SERVICE_ACCOUNT_EMAIL=jayanti-portfolio@jayanti-portfolio.iam.gserviceaccount.com
  // GA_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
  // GA_VIEW_ID=your_ga_view_id_number

  // To get these values:
  // 1. Create service account in Google Cloud Console
  // 2. Download JSON key file
  // 3. Add service account email to GA property with "Viewer" role
  // 4. Get View ID from GA Admin → View Settings
};

// Simulated realistic visitor data based on typical portfolio traffic
export function getSimulatedGAData() {
  const baseUsers = 1200; // Base number of users
  const randomFactor = Math.random() * 0.3; // ±30% variation
  const timeFactor = Math.sin(Date.now() / (1000 * 60 * 60 * 24)) * 0.1; // Daily variation

  const totalUsers = Math.floor(baseUsers * (1 + randomFactor + timeFactor));
  const totalSessions = Math.floor(totalUsers * (1.2 + Math.random() * 0.3));
  const totalPageViews = Math.floor(
    totalSessions * (2.5 + Math.random() * 0.5)
  );

  return {
    totalUsers,
    totalSessions,
    totalPageViews,
    bounceRate: (75 + Math.random() * 10).toFixed(1),
    avgSessionDuration: Math.floor(120 + Math.random() * 60), // 2-3 minutes
    lastUpdated: new Date().toISOString(),
    dataSource: "simulated_ga",
  };
}
