let imgOfRose =
  "https://img.elo7.com.br/product/original/1DCCA20/lirio-permanente-buque-c-5-lirios-flor-artificial-azul-azul.jpg";
let numberOfClicks = 0;
let matched = false;
//array of images
let img1 =
  "https://i.insider.com/5dcae88e79d75759bc2e4e15?width=750&format=jpeg&auto=webp";
let img2 =
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/220px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg";
let img3 = "https://upload.wikimedia.org/wikipedia/en/e/eb/IG-11_Star_Wars.jpg";
let img4 =
  "https://i.pinimg.com/originals/5d/34/52/5d34520bb701296787fc8df6188714a7.png";
let img5 =
  "https://vignette.wikia.nocookie.net/starwars/images/0/0c/The_Armorer.png/revision/latest?cb=20200321220255";
let img6 =
  "https://vignette.wikia.nocookie.net/starwars/images/b/b0/MoffGideon-TMS01E07.jpg/revision/latest?cb=20191227221641";
let img7 =
  "https://geeksinaction.com.br/wp-content/uploads/2020/09/star-wars-mandalorian-greef-karga-carl-weathers-1235789-1280x0-1-752x440.jpeg";
let img8 = "https://upload.wikimedia.org/wikipedia/en/3/3c/Kuiil_Star_Wars.jpg";
let img9 =
  "https://i.pinimg.com/originals/55/f7/b2/55f7b283ba09c42ab47a181e30a5f385.png";
let img10 = "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Client.jpg";
let img11 =
  "https://vignette.wikia.nocookie.net/starwars/images/8/85/Paz_Vizla.png/revision/latest?cb=20191123193811";
let img12 =
  "https://upload.wikimedia.org/wikipedia/en/b/bf/Mayfeld_Star_Wars.jpg";
let img13 =
  "https://vignette.wikia.nocookie.net/starwars/images/5/5e/RanzarMalk.png/revision/latest?cb=20191214012204";
let img14 =
  "https://static.tvmaze.com/uploads/images/medium_portrait/230/575384.jpg";
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

        // console.log(playingSquares)
        // let randDiv2 = event.currentTarget
        // let indexOfRandDiv2 = playingSquares.indexOf(randDiv2)
        // console.log(randDiv2)
        // playingSquares.splice(indexOfRandDiv2, 1);
        // console.log(playingSquares);
        // numberOfClicks = 0;
        // console.log("1");
        // let element2 = event.currentTarget.innerHTML;
        // for (let r = 0; r < playingSquares.length; r++) {
        //   if (playingSquares[r].innerHTML === element2) {
        //     console.log("working");
        //     playingSquares.splice(indexOfRandDiv2, 0, randDiv2);
        //     break
        //   }
        // }
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
          
          
          
          
          
          
          
          
          
          
          
          
          
          //   console.log(playingSquares)
        //   let randDiv = event.currentTarget
        //   let indexOfRandDiv = playingSquares.indexOf(randDiv)
        //   console.log(randDiv)
        //  playingSquares.splice(indexOfRandDiv, 1);
        //   console.log(playingSquares);
        //  numberOfClicks = 0;
        //  console.log(2);
        //  let element = event.currentTarget.innerHTML;
        
        
        
        
        
        
        
        
        
        
        
        
        
        // for (let u = 0; u < playingSquares.length; u++) { 
        //   if (playingSquares[u].innerHTML === element) {
        //     console.log("it works");
        //     console.log("Playing Squares:",playingSquares[u].innerHTML)
        //     console.log("element:",element)
        //     matched = true
        //   } else if (playingSquares[u] !== element){
        //     playingSquares.splice(indexOfRandDiv, 0, randDiv);
            
        //   }
        // }
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

