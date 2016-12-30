"use strict";

/**
 * Database settings
 */

module.exports = {

	// redis connection string
	REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",

	// mongo connection string
	MONGO_URL: process.env.MONGO_URL || "mongodb://localhost/thanos-dev"
};
//# sourceMappingURL=database.js.map
