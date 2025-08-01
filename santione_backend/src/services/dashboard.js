/**
 * DashboardService - aggregates KPIs for dashboard endpoint.
 */
module.exports = {
  // PUBLIC_INTERFACE
  async getKPIs() {
    // Return dummy KPIs for now
    return {
      properties: 0,
      bookings: 0,
      guests: 0,
      revenue: 0,
      tasks_open: 0,
      occupancy_rate: 0.0,
      // Populate with more KPIs as needed
    };
  },
};
