/**
 * Dashboard KPI aggregation endpoint.
 */
const DashboardService = require('../services/dashboard');

// PUBLIC_INTERFACE
exports.kpi = async (req, res) => {
  const kpis = await DashboardService.getKPIs();
  res.json(kpis);
};
