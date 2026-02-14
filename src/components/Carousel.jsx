import imageOne from "../../src/assets/imageOne.png";
import imageTwo from "../../src/assets/imageTwo.png";
import imageThree from "../../src/assets/imageThree.png";
import { useEffect, useState } from "react";

const carouselData = [
  {
    id: 1,
    image: imageOne,
    title: "Image 1",
    description: "Description 1",
  },
  {
    id: 1,
    image: imageTwo,
    title: "Image 1",
    description: "Description 1",
  },
  {
    id: 1,
    image: imageThree,
    title: "Image 1",
    description: "Description 1",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prev) => (prev - 2 + carouselData.length) % carouselData.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % carouselData.length);
  };

  //auto scroll after five seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Carousel component</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={handlePrevious}>Prev</button>
        <div>
          <h2>{carouselData[index].title}</h2>

          <img
            src={carouselData[index].image}
            alt={carouselData[0].description}
            width={400}
            height={400}
          />

          <p>{carouselData[index].description}</p>
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
      {carouselData.map((_, i) => (
        <button key={i} onClick={() => setIndex(i)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}
