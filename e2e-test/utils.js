exports.getBaseUrl = () => {
    if (process.env.APP_BASE_URL) {
        console.log(`Using APP_BASE_URL ${process.env.APP_BASE_URL}`);
    return process.env.APP_BASE_URL;

} else {
    console.log("Using Local URL");
    return "http://localhost:3000";
    }
};