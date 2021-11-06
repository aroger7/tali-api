const config = {};

config.environment = process.env.IS_OFFLINE || process.env.IS_LOCAL 
  ? "local"
  : process.env.NODE_ENV;

config.aws = {};
config.db = {};

config.aws.ormLayerPath = process.env.ORM_LAYER_PATH;

config.db.secretName = process.env.DB_SECRET_NAME;

module.exports = config;