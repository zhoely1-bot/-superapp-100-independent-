const fs   = require('fs');
const path = require('path');

const STORE_FILE = path.join(__dirname, 'feed.store.json');

function readStore() {
  if (!fs.existsSync(STORE_FILE)) return [];
  return JSON.parse(fs.readFileSync(STORE_FILE, 'utf8'));
}

function writeStore(data) {
  fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2));
}

module.exports = { readStore, writeStore };

