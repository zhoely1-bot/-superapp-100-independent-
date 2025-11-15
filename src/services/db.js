import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const db = SQLite.openDatabase({
  name: 'superapp.db',
  location: 'default',
});

export const initDB = async () => {
  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fromId TEXT,
      toId TEXT,
      body TEXT,
      timestamp TEXT,
      delivered INTEGER DEFAULT 0
    );
  `);
};

export const insertMessage = async (fromId, toId, body) => {
  const timestamp = new Date().toISOString();
  await db.executeSql(
    'INSERT INTO messages (fromId, toId, body, timestamp) VALUES (?, ?, ?, ?)',
    [fromId, toId, body, timestamp]
  );
};

export const getMessages = async () => {
  const [results] = await db.executeSql('SELECT * FROM messages ORDER BY timestamp ASC');
  return results.rows.raw();
};
