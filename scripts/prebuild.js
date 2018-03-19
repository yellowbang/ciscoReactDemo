import constants from '../src/constants';
const path = require('path');
const rimraf = require('rimraf');
const fs = require('fs');

// Remove build folder
rimraf.sync(path.resolve('./build'));
console.log('Build folder deleted');

// Add the APP_ID value defined in constants to app.json aci template
const appConfPath = path.resolve(__dirname, '../public/aci_app_template/app.json');
let appConfData = JSON.parse(fs.readFileSync(appConfPath, 'utf8'));
appConfData.appid = constants.APP_ID;
fs.writeFileSync(appConfPath, JSON.stringify(appConfData, null, 4), 'utf8');

console.log(`APP_ID value '${constants.APP_ID}' copied to ACI app.json file ('${appConfPath}')`);
