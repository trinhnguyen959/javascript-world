/*
 * HTML DOM
 * 1. Element
 *  - Id
 *  - class
 *  - tag
 *  - css selector
 *  - html collection
 * 2. Attribute
 * 3. Text
 * */

// id -> object
let headingId = document.getElementById('heading');
console.log('getElementById', { headingId });

// class -> html collection
let headingClasses = document.getElementsByClassName('heading');
console.log('getElementsByClassName', headingClasses);

// tag -> html collection
let headingTag = document.getElementsByTagName('h1');
console.log('heading tag', headingTag);

// css selector -> object
let headingCss = document.querySelector('.heading');
console.log('querySelector', { headingCss });
let heading2Css = document.querySelector('.box .heading-2');
console.log({ heading2Css });
// node list
let headingNodeList = document.querySelectorAll('.heading');
console.log('querySelectorAll', headingNodeList);

// form
let firstForm = document.forms['form-1'];
console.log('1st way query form', { firstForm });
let thirdForm = document.forms.thirdForm;
console.log('2st way query form', { thirdForm });

// anchors -> Deprecated
let anchors = document.anchors;
console.log('anchors', anchors);

// select thong thuong
let elementNode = document.querySelectorAll('.box-1 li');
console.log('elementNode', elementNode);

// cong viec 1: su dung boxNode
let boxNode = document.querySelector('.box-1');
console.log('boxNode', { boxNode });
// cong viec 2: su dung li la con cua boxNode
console.log('all li boxNode', boxNode.querySelectorAll('li'));
console.log('get all p', boxNode.querySelector('p'));
