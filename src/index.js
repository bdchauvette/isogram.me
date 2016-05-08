import React from 'react';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import isogram from 'isogram';

import App from './containers/App';
import stateTree from './stateTree';

// Output our own cheeky Google Analytics code
const isograms = [
  /* aloha          */ ['A', 'l', 'o', 'h', 'a'],
  /* annyeonghaseyo */ ['안', '녕', '하', '세', '요'],
  /* ciao           */ ['c', 'i', 'a', 'o'],
  /* hallo          */ ['h', 'a', 'l', 'L', 'o'],
  /* hello          */ ['h', 'e', 'l', 'L', 'o'],
  /* hey            */ ['h', 'e', 'y'],
  /* hola           */ ['h', 'o', 'l', 'a'],
  /* howdy          */ ['h', 'o', 'w', 'd', 'y'],
  /* konnichiwa     */ ['こ', 'ん', 'に', 'ち', 'は'],
  /* muli bwa       */ ['m', 'u', 'l', 'i', 'b', 'w', 'a'],
  /* salut          */ ['s', 'a', 'l', 'u', 't'],
  /* welcome        */ ['w', 'e', 'l', 'c', 'o', 'm', 'E'],
  /* whatsup        */ ['w', 'h', 'a', 't', 's', 'u', 'p'],
];
const randomIsogram = Math.floor(Math.random() * isograms.length);
const isogramScript = isogram(isograms[randomIsogram].join(''));
document.write(`<script>${isogramScript}</script>`);

// Render the application
const RootedApp = root(stateTree, App);
render(<RootedApp />, document.getElementById('app'));
