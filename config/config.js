
const config = {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
    GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
    GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    PORT:process.env.PORT,
    // CLUSTER2_PASSWORD:process.env.CLUSTER2_PASSWORD
    BASE_URL:process.env.BASE_URL
}

module.exports = config;