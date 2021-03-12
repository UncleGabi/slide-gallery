let imgStore = [
  (bear = {
    id: "bear",
    title: "Bear",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium perspiciatis ex sequi, ut eius aperiam omnis, dicta consectetur quam fugiat fugit modi id, natus quidem! Id nihil dolores provident perspiciatis?",
    src: "./images/bear.jpg",
  }),
  (bird = {
    id: "bird",
    title: "Bird",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi tenetur vitae voluptatibus ut consequatur veritatis ullam assumenda atque nulla sed esse consequuntur itaque laboriosam, ipsam quaerat deleniti cupiditate vero rerum.",
    src: "./images/bird.jpg",
  }),
  (birds = {
    id: "birds",
    title: "Hummingbird",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptates minima voluptatibus error beatae ex ratione adipisci voluptas, quidem laborum natus numquam? Non temporibus nisi blanditiis expedita voluptatem eveniet hic.",
    src: "./images/birds.jpg",
  }),
  (elephant = {
    id: "elephant",
    title: "Elephant",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ex eos aut nam, dolorem soluta laudantium enim repellendus odit culpa ipsum molestiae cupiditate modi sunt blanditiis a voluptatum voluptate. Laboriosam!",
    src: "./images/elephant.jpg",
  }),
  (fox = {
    id: "fox",
    title: "Fox?",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vitae. Earum aut laudantium in magnam nulla, error, soluta obcaecati natus adipisci commodi a eaque. Dolores magnam reiciendis non id consequatur?",
    src: "./images/fox.jpg",
  }),
  (koala = {
    id: "koala",
    title: "Koala",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur in, impedit alias harum laborum voluptates quisquam nobis deleniti, debitis voluptas accusantium. Maxime deserunt inventore consectetur nam eum necessitatibus dolorum.",
    src: "./images/koala.jpg",
  }),
  (safari = {
    id: "safari",
    title: "Safari",
    desc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, rerum a nesciunt officiis, ad excepturi consequatur vero voluptatum sint provident, debitis rem ea. Dicta laboriosam ducimus aperiam dolore quam deserunt.",
    src: "./images/safari.png",
  }),
  (snowCat = {
    id: "snowCat",
    title: "Snow cat",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias eveniet porro laborum voluptatibus rem cupiditate sapiente ex quas atque minus consequuntur facere, doloribus voluptatem consequatur facilis recusandae pariatur? Error?",
    src: "./images/snow-cat.jpg",
  }),
  (squirrel = {
    id: "squirrel",
    title: "Squirrel",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque numquam laudantium excepturi quod repudiandae tempore sequi minima, eius libero rem, quia nesciunt iure suscipit tempora officiis eum. Consequuntur, deleniti!",
    src: "./images/squirrel.jpg",
  }),
  (swan = {
    id: "swan",
    title: "Swan",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quasi voluptate ex dicta molestias cum veritatis, facilis quia fugiat magnam quidem voluptatem voluptatum enim, accusantium ad ea aliquam sequi incidunt.",
    src: "./images/swan.jpg",
  }),
];

console.log();

let currentImg = 0;

function imgPicker() {
  $(".photos").attr("src", imgStore[currentImg].src);
  $("#pic-title").text(imgStore[currentImg].title);
  $("#pic-desc").text(imgStore[currentImg].desc);
}

// Sets the width of the gray-container according to the pic's width
function resizeDesc() {
  let picWidth = $(".photos").css("width");
  $("#gray-container").css("width", picWidth);
}

$(".photos").attr("src", imgStore[currentImg].src);
$("#pic-title").text(imgStore[currentImg].title);
$("#pic-desc").text(imgStore[currentImg].desc);

resizeDesc();

imgStore.map(function (item, index) {
  $(`#${item.id}`).click(() => {
    $(".photos").attr("src", `${item.src}`);
    $("#pic-title").text(`${item.title}`);
    $("#pic-desc").text(`${item.desc}`);
    currentImg = index;
    resizeDesc();
  });
});

$("#right-arrow").click(() => {
  currentImg = currentImg == imgStore.length - 1 ? 0 : currentImg + 1;
  imgPicker();
  resizeDesc();
});

$("#left-arrow").click(() => {
  currentImg = currentImg == 0 ? imgStore.length - 1 : currentImg - 1;
  imgPicker();
  resizeDesc();
});

$("body").keyup(function (e) {
  var key = e.which;
  if (key == 39) {
    // right arrow
    $("#right-arrow").click();
    return false;
  } else if (key == 37) {
    // left arrow
    $("#left-arrow").click();
    return false;
  }
});
