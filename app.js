let imgOfRose =
  "https://img.elo7.com.br/product/original/1DCCA20/lirio-permanente-buque-c-5-lirios-flor-artificial-azul-azul.jpg";
let numberOfClicks = 0;
let matched = false;
//array of images
let img1 =
  "https://www.thespruce.com/thmb/8_i_RDBPCc5ml3W0RJUTcbpBazQ=/2044x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hibiscus-586eb5513df78c17b6760bbd.jpg";
let img2 =
  "https://www.thespruce.com/thmb/unLiNwpESH_09GThbbUXeRXZs2A=/1878x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bromeliad-586fdf533df78c17b6f5d364.jpg";
let img3 = "https://www.thespruce.com/thmb/tEfHoiSPk27bqQYnEZMkieqybYg=/2048x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/clivia-58711f155f9b584db3d44b8e.jpg";
let img4 =
  "https://www.thespruce.com/thmb/QBRY605wi3wnSLR01bEej2L7mbM=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ChenillePlant-GettyImages-1025411834-4215f67bd6db48cd9e53f9b184adc27f.jpg";
let img5 =
  "https://www.thespruce.com/thmb/9Q2ixsTbzYsYpdWgaqedE1Ls4XY=/2127x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Orchids-GettyImages-952048542-de44c19be534406e92448caf7b7a6567.jpg";
let img6 =
  "https://www.thespruce.com/thmb/k52E5E9kPiVBxd7Y71M5slixXP4=/1501x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/jasmineplant-5872a9ed5f9b584db3c99bbb.jpg";
let img7 =
  "https://www.thespruce.com/thmb/UMjya7CAK4P3Wv5i3Gy98TNUye0=/1618x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ginger-578c30055f9b584d2042a359.jpg";
let img8 = "https://www.thespruce.com/thmb/BZzkNAfUsxCQyTIPpk2PtTqDovY=/1385x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/protea-5872f2f83df78c17b6e67b04.jpg";
let img9 =
  "https://www.thespruce.com/thmb/NFucu23bdyARGTAXUbIKp3PhXXQ=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bougainvilleavine-5872f7425f9b584db32bfb54.jpg";
let img10 =
 "https://www.thespruce.com/thmb/dvk8wIyYIFQNd69Mp6BD-p_xOYo=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/anthurium-5873afc53df78c17b6bf7ec5.jpg";
let img11 =
  "https://www.thespruce.com/thmb/sAiVb9Wp1nttAx64FoJ84BY5esQ=/2116x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Medinilla-GettyImages-496543228-4d2b58e5acaa40b5b6f87543e6047f29.jpg";
let img12 =
  "https://www.thespruce.com/thmb/yNj3z-6h8ACnPp5HIwxx2Mniy94=/1686x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pentaflowrs-GettyImages-154359473-f2dd80432110463590a3dbfd43c62f5b.jpg";
let img13 =
  "https://www.thespruce.com/thmb/V37HQnjVoxEf4qufbPllgSoX6hg=/1650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Cannalily-GettyImages-960214120-ae600ae8e85c4b6987631b428a52a2e7.jpg";
let img14 =
  "https://www.thespruce.com/thmb/R9Rjq--YFa4GUTCmuKisah2-Pdg=/2119x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AngelsTrumpet-GettyImages-613334802-8e6f97d9c45a4b2a89cb43c4ea9ce4e4.jpg";
let imgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

let playingImgs = imgs.slice();
let randomArray = [
  1,
  19,
  13,
  2,
  5,
  16,
  7,
  0,
  20,
  26,
  3,
  6,
  22,
  15,
  27,
  11,
  14,
  23,
  21,
  17,
  4,
  25,
  12,
  24,
  9,
  18,
  10,
  8,
];
let square = document.querySelectorAll(".square");
let squares = [...square];
let playingSquares = squares.slice();
randomImgs = () => {
  for (let i = 0; i < randomArray.length; i++) {
    let randIndex = Math.floor(Math.random() * playingImgs.length);
    let randImg = playingImgs[randIndex];
    playingImgs.splice(randIndex, 1);
    let j = i++;

    squares[randomArray[i]].addEventListener("click", () => {
      squares[randomArray[i]].innerHTML = `<img src=${randImg} /img>`;
      numberOfClicks++;
      if(numberOfClicks === 1){
        event.currentTarget.classList.add("clicked1")
      }
      if (numberOfClicks === 2) {
          numberOfClicks = 0
          event.currentTarget.classList.add("clicked2")
          let square1 = document.querySelector(".clicked1")
          let square2 = document.querySelector(".clicked2")
          if(square1.innerHTML === square2.innerHTML){
             square1.classList.remove("clicked1")
             square2.classList.remove("clicked2")
          } else if (square1.innerHTML !== square2.innerHTML){
            setTimeout(()=>{
               square1.innerHTML = `<img src=${imgOfRose} /img>`
               square2.innerHTML = `<img src=${imgOfRose} /img>`
            },500)
            square1.classList.remove("clicked1")
            square2.classList.remove("clicked2")
          }

      }
    });

    squares[randomArray[j]].addEventListener("click", () => {
      squares[randomArray[j]].innerHTML = `<img src=${randImg} /img>`;
      numberOfClicks++;
      if(numberOfClicks === 1){
        event.currentTarget.classList.add("clicked1")
      }
      if (numberOfClicks === 2) { 
          numberOfClicks = 0
          event.currentTarget.classList.add("clicked2")
          let square1 = document.querySelector(".clicked1")
          let square2 = document.querySelector(".clicked2")
          if(square1.innerHTML === square2.innerHTML){
             square1.classList.remove("clicked1")
             square2.classList.remove("clicked2")
          } else if (square1.innerHTML !== square2.innerHTML){
            setTimeout(()=>{
               square1.innerHTML = `<img src=${imgOfRose} /img>`
               square2.innerHTML = `<img src=${imgOfRose} /img>`
            },500)
            square1.classList.remove("clicked1")
            square2.classList.remove("clicked2")
          }
      }
    });
  }
};
restart = () => {
  document.querySelector(".newGame").addEventListener("click", () => {
    playingImgs = imgs.slice();
    randomImgs();
    for (square of squares) {
      square.innerHTML = `<img src=${imgOfRose} /img>`;
    
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  randomImgs();
  restart();
});

// ------- future -------------

//if two divs clicked have the same image than keep them turned to the images side
//if two divs don't have the same image turn them back
//if all divs have images = win!

