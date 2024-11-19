// import React, { useEffect, useState } from 'react';
// // import '../styles/Typewriter.css'; // Add necessary styles

// const Typewriter = ({ dataText, period }) => {
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [delta, setDelta] = useState(200 - Math.random() * 100);

//   useEffect(() => {
//     const handleTick = () => {
//       const i = loopNum % dataText.length;
//       const fullText = dataText[i];

//       setText((prev) => (isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)));

//       if (!isDeleting && text === fullText) {
//         setTimeout(() => setIsDeleting(true), period);
//       } else if (isDeleting && text === '') {
//         setIsDeleting(false);
//         setLoopNum((prev) => prev + 1);
//       }

//       const newDelta = isDeleting ? delta / 2 : delta;
//       setDelta(newDelta);
//     };

//     const ticker = setTimeout(handleTick, delta);

//     return () => clearTimeout(ticker);
//   }, [text, isDeleting, delta, dataText, loopNum, period]);

//   return (
//     <h6 className="photo-name typewrite">
//     <span
//       className="wrap"
//       style={{
//         borderRight: '0.08em solid #fff', 
//       }}
//     >
//       {text}
//     </span>
//   </h6>
//   );
// };

// export default Typewriter;



import React, { useEffect, useState } from 'react';

const Typewriter = ({ dataText, period }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1); // Controls the typing speed

  useEffect(() => {
    const handleTick = () => {
      const i = loopNum % dataText.length;
      const fullText = dataText[i];

      // Handle typing and deleting logic
      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      // Switch from typing to deleting
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period); // Wait before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to next iteration
      }

      // Adjust typing speed while typing/deleting
      const newDelta = isDeleting ? delta / 2 : delta;
      setDelta(newDelta);
    };

    const ticker = setTimeout(handleTick, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta, dataText, loopNum, period]);

  return (
    <h6 className="photo-name typewrite">
      <span
        className="wrap"
        style={{
          borderRight: '0.08em solid #fff',
        }}
      >
        {text}
      </span>
    </h6>
  );
};

export default Typewriter;
