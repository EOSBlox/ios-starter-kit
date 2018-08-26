/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      :host {
        --header-bg-color: #FFFFFF;
        --header-color: #62676F;
        --border-color-1: #EBEBEB;
        --app-primary-color: #4285f4;
        --app-secondary-color: black;
        display: block;
      }
      h2 {
        padding-top: 30px;
        font-size: 22px;
        margin:0;
      }
      a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        color: #4079B0;
        text-decoration: none;
        font-weight: 600;
      }
      p {
        font-size: 14px;
        line-height: 20px;
        padding-bottom: 25px;
        color: #868990;
      }
      input {
        -webkit-appearance: none;
        line-height: 19px;
        border: 1px solid #CACCCF;
        border-radius: 2px;
        font-size: 13px;
        background: #FEFEFE;
        color: #393D4D;
        padding: 7px 8px;
        background: #F0F1F3;
        display: block;
        margin-bottom: 14px;
        width: 100%;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .02);
        border-color: #C9CCD0 #CFD2D6 #CFD2D6;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    button {
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        font-weight: bold;
        padding: 0 12px;
        line-height: 36px;
        font-size: 14px;
        border: 1px solid;
        border-radius: 3px;
        color: #5A616F;
        text-shadow: 0 1px 0 #FFF;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        border-color: #d1d3d6 #d2d3d5 #bdbec0;
        background: #F4F4F5;
        background: -webkit-linear-gradient(top, #FFF, #F6F7F8);
        background: -ms-linear-gradient(top, #FFFFFF, #f9f9f9);
        background: -moz-linear-gradient(top, #FFFFFF, #f9f9f9);
        background: -o-linear-gradient(top, #FFFFFF, #f9f9f9);
        filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF', endColorstr='#f9f9f9');
    }
    .container {
      padding: 0px 20px 8px;
    }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
