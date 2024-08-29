import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


function Rough() {

  const boxRef = useRef(null);
  useEffect(() => {
    gsap.from(boxRef.current, { opacity: 0,x:100, y: 50, });
  }, []);

  return (
    <>
    <div className="flex justify-center items-center min-h-screen ">
    <div
      ref={boxRef}
      className="w-32 h-32 bg-blue-500 text-black flex justify-center items-center rounded-lg shadow-lg"
    >
      GSAP
    </div>
  </div>
  <div className="flex justify-center items-center min-h-screen ">
  <p>Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (NSAttributedString on iOS, SpannableString on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.</p>
   
  </div>
  
  
  </>
  )
}

export default Rough