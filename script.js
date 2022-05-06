/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);

//
var fruits;


fruits = ['banana', 'avocado', 'pearl', 'grapes', 'orange'];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  if (!!fruits.length) {
    let new_li = document.createElement('li');
    new_li.innerText = fruits.shift();

    element_list.appendChild(new_li);
  }

});

var names;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

//facilator

var names;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


names = [];


document.getElementById('btn').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('name').value) > '') {
    names.push(getNumberOrString(document.getElementById('name').value));
  }

});

document.getElementById('rand').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('name').value) > '') {
    let element_any = document.getElementById('any');
    element_any.innerText = randomMember(names);
  }

});

/// Carousel

var images, item, array;


images = ['https://www.sciencenewsforstudents.org/wp-content/uploads/2022/01/1440_eDNA_feat.jpg', 'https://cdn.the-scientist.com/assets/articleNo/68691/aImg/41951/article-hybridization-may-2021-l.jpg', 'https://ideas.ted.com/wp-content/uploads/sites/3/2019/05/featured_art_hyena_istock.jpg?w=750', 'https://www.timeforkids.com/wp-content/uploads/2020/08/animalVoting.jpg', 'https://www.sciencenews.org/wp-content/uploads/2022/04/040922_animal-emotions_feat_extra-headline-space.jpg'];


document.getElementById('prev').addEventListener('click', (event) => {
  let element_slide = document.getElementById('slide');
  images.push(images.shift());
  element_slide.setAttribute("src", images[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_slide2 = document.getElementById('slide');
  images.unshift(images.slice(-1)[0]);
  element_slide2.setAttribute("src", images.pop());

});