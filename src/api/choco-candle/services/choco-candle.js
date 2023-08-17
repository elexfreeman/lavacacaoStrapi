'use strict';

/**
 * choco-candle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::choco-candle.choco-candle');
