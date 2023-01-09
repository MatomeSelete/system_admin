'use strict';

/**
 * admin-dashboard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admin-dashboard.admin-dashboard');
