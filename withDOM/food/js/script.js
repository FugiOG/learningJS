'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          card = require('./modules/card'),
          calc = require('./modules/calc'),
          slider = require('./modules/slider'),
          forms = require('./modules/forms');

    tabs();
    modal();
    timer();
    card();
    calc();
    slider();
    forms();
    
});