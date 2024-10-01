/**
 * @format
 */

import {AppRegistry} from 'react-native';
import index from './src/index';
import {name as appName} from './app.json';
import 'react-native-reanimated';


AppRegistry.registerComponent(appName, () => index);
