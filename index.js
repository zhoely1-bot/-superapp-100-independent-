/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import { startWSServer } from './src/services/websocket-server';
import { initDB } from './src/services/db';

// Lance la BDD + le serveur WebSocket
initDB().then(() => {
  startWSServer();
});
