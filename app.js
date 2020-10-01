//array of images
let img1 =
 "https://i.insider.com/5dcae88e79d75759bc2e4e15?width=750&format=jpeg&auto=webp";
let img2 =
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/220px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg";
let img3 = 
"https://upload.wikimedia.org/wikipedia/en/e/eb/IG-11_Star_Wars.jpg";
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
let img10 = 
"https://upload.wikimedia.org/wikipedia/en/d/dc/The_Client.jpg";
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

let squares = document.querySelectorAll(".square");
randomImgs = () => {
    for (let i = 0; i < 28; i++) {
      let randIndex = Math.floor(Math.random() * playingImgs.length);
      let randImg = playingImgs[randIndex];
      playingImgs.splice(randIndex, 1);
      // let randIndex1 = Math.floor(Math.random() * 28);
      // let randIndex2 = Math.floor(Math.random() * 28);
      let j = i++;
      squares[i].addEventListener("click",()=>{
        squares[i].innerHTML = `<img src=${randImg} /img>`;
        if(squares[i].innerHTML === squares[j].innerHTML){
            console.log("it works")
        }
      })
      
      squares[j].addEventListener("click",()=>{
        squares[j].innerHTML = `<img src=${randImg} /img>`;
        if(squares[i].innerHTML === squares[j].innerHTML){
            console.log("it works")
        }
      })
      
    }
  };

restart = () => {
  document.querySelector(".newGame").addEventListener("click", () => {
    playingImgs = imgs.slice();
    randomImgs();
  });
};

win = () =>{
    
}



document.addEventListener("DOMContentLoaded", () => {
  randomImgs();
  restart();
});







// ------- future -------------

//if two divs clicked have the same image than keep them turned to the images side
//if two divs don't have the same image turn them back
//if all divs have images = win!
