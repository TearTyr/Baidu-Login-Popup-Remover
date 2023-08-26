// ==UserScript==
// @name        Login reminder remover
// @namespace   Violentmonkey Scripts
// @match       https://tieba.baidu.com/*
// @grant       none
// @version     1.0
// @author      L
// @description 8/26/2023, 5:28:37 PM
// ==/UserScript==

(function() {
  'use strict';

  function removeElementById(id) {
      const element = document.getElementById(id);
      if (element) {
          element.remove();
      }
  }

  removeElementById('tiebaCustomPassLogin');
})();
