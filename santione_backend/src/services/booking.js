/**
 * BookingService - handles business logic for bookings.
 */
module.exports = {
  async list() { return []; },
  async get(id) { return null; },
  async create(b) { return b; },
  async update(id, b) { return b; },
  async remove(id) { return true; },
};
