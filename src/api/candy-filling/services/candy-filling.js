'use strict';

/**
 * candy-filling service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::candy-filling.candy-filling');
