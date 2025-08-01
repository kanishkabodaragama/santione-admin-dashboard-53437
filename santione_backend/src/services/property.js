/**
 * PropertyService - handles business logic for properties.
 */

module.exports = {
  // PUBLIC_INTERFACE
  async list() { return []; },
  // PUBLIC_INTERFACE
  async get(id) { return null; },
  // PUBLIC_INTERFACE
  async create(prop) { return prop; },
  // PUBLIC_INTERFACE
  async update(id, prop) { return prop; },
  // PUBLIC_INTERFACE
  async remove(id) { return true; },
};
