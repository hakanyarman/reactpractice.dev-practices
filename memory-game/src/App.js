import MemoryGame from "./components/MemoryGame";
const _ = require("lodash");


const imagesArray = [
  "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
  "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
  "https://images.unsplash.com/photo-1520763185298-1b434c919102",
  "https://images.unsplash.com/photo-1442458017215-285b83f65851",
  "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
  "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
];

let shuffledSingleArray = _.shuffle(imagesArray);

const doubledImagesArrayy = doubleArrayElements(shuffledSingleArray);


function doubleArrayElements(arr) {
  return arr.flatMap(item => [item, item]);
}


let shuffledImagesArray = _.shuffle(doubledImagesArrayy);

function App() {
  return (
    <>
      <MemoryGame
        images={shuffledImagesArray}
      />
    </>
  );
}

export default App;
