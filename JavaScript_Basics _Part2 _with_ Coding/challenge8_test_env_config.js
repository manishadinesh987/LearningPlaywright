//Environments: dev, staging, qa, production/prod. 
// Each has different base URL, API key prefix, timeout, and description.
//Environment: STAGING 
// Base URL: https://staging-api.testingacademy.com 
// API Key: stg_key_xxxx-xxxx 
// Timeout: 8000ms 
// Description: Staging - Pre-production mirror

const envName = "prod";
const DOMAIN = "tetsingacademy.com"

let baseUrl,apiKey,timeout,desc;

switch (envName.toLowerCase()) {
    case "dev":
        baseUrl = `https://dev-api.${DOMAIN}`;
        apiKey = "dev_key_1234-5678";
        timeout = 5000;
        desc = "Development - Sandbox for feature testing";
        break;

    case "qa":
        baseUrl = `https://qa-api.${DOMAIN}`;
        apiKey = "qa_key_9876-5432";
        timeout = 6000;
        description = "QA - Dedicated environment for manual/automation testing";
        break;

    case "staging":
        baseUrl = `https://staging-api.${DOMAIN}`;
        apiKey = "stg_key_xxxx-xxxx";
        timeout = 8000;
        description = "Staging - Pre-production mirror";
        break;

    case "prod":
    case "production": // Example of case-stacking (works for both)
        baseUrl = `https://api.${DOMAIN}`;
        apiKey = "prod_key_secure-live";
        timeout = 10000;
        description = "Production - Live customer environment";
        break;

    default:
        console.error("❌ Error: Unknown Environment provided!");
        baseUrl = "N/A";
    
}


if (baseUrl !== "N/A") {
    console.log(`Environment: ${envName.toUpperCase()}`);
    console.log(`Base URL: ${baseUrl}`);
    console.log(`API Key: ${apiKey}`);
    console.log(`Timeout: ${timeout}ms`);
    console.log(`Description: ${desc}`);
}