import 'normalize.css';
import './styles/app.css';
import './styles/social.css';

// =============================================================================

import React from 'react';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import isogram from 'isogram';

import App from './containers/App';
import stateTree from './stateTree';

// Output our own cheeky Google Analytics code
const isograms = [
  '$_π',
  'Aloha',
  'atihow',
  '안녕하세요',
  'ciao',
  'HaLlO',
  'HeLlO',
  'hey',
  'hola',
  'howdy',
  'IsOgRaM',
  'ISOGRAM',
  'こんにちは',
  'margosi',
  'MaRgOsI',
  'mulibwa',
  'salut',
  'trackme',
  'WelcomE',
  'whatsup',
];
const randomIsogram = Math.floor(Math.random() * isograms.length);
const isogramScript = isogram(isograms[randomIsogram], {
  id: 'UA-77741908-1',
});
document.write(`<script>${isogramScript}</script>`);

// Render the application
const RootedApp = root(stateTree, App);
render(<RootedApp />, document.getElementById('app'));
