import { AppConfigService } from "./AppConfigService";

const config1 = AppConfigService.getInstance();
const config2 = AppConfigService.getInstance();

console.log("config1 companyName:", config1.companyName);
console.log("config2 companyName:", config2.companyName);
console.log("Are both configs the same instance? (config1 === config2):", config1 === config2);

