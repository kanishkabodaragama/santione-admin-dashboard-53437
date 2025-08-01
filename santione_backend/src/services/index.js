/**
 * Central export for all services - scaffolding for logic layer.
 */

// Example: You should fill in with actual DB logic per below (these are stubs).
module.exports = {
  PropertyService: require('./property'),
  BookingService: require('./booking'),
  GuestService: require('./guest'),
  StaffService: require('./staff'),
  RevenueService: require('./revenue'),
  TaskService: require('./task'),
  SmartLockService: require('./smartlock'),
  CameraService: require('./camera'),
  ParkingService: require('./parking'),
  ContractService: require('./contract'),
  ReportService: require('./report'),
  NotificationService: require('./notification'),
  AuthService: require('./auth'),
};
