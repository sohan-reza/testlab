const fs = require('fs');

// Replace 'your-json-file.json' with the actual path to your JSON file
const jsonFilePath = 'file.json';

try {
  const data = fs.readFileSync(jsonFilePath, 'utf8');
  const jsonData = JSON.parse(data);
  // Handle the parsed JSON data here
  console.log(jsonData);
} catch (error) {
  console.error('Error reading or parsing JSON file:', error);
}

