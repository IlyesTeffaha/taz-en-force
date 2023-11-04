import { useEffect } from "react";
import { useState } from "react";
import Button from "../../base-components/Button/Button";
import PromoTab from "../promoTab/PromoTab";

export default function SwiperImages() {
  const imagePaths = Object.keys(import.meta.globEager('../../assets/images/*.jpg'));
  const [currentIndex, setCurrentIndex] = useState(0);

console.log(imagePaths)
console.log("hellàooo")

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagePaths.length);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
  <div>
    {imagePaths.map((path, index) => (
      <img
        key={index}
        src={path}
        alt={`Image ${index}`}
        className={`transition-opacity duration-2000 ${
          index === currentIndex ?  "opacity-100" : "opacity-0"
        } absolute top-0 left-0 w-full h-full`}
      />
    ))}
  
    <div className="absolute flex justify-between w-[180px] h-[50px] top-4 right-4">
      <Button
        bgColor="#FFFFFFB3"      
 borderRadius="50px"
        width="100px"
        height="80%" // Remove square brackets
        textColor="#505050"
      >
        Sign In
      </Button>

            <Button
        bgColor="#FFFFFFB3"
 borderRadius="50px"
        width="60px"
        height="80%" // Remove square brackets
        textColor="#505050"
        
      >
        EN
      </Button>
    </div>

          <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0.65)",
          padding: "10px",
          borderRadius: "10px",
          height:"280px",
          width:"500px"
        }}
      >
        <PromoTab />
      </div>
  </div>
  );
}
