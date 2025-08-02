import './mad.css';
import React, { useState } from 'react';
import "./bear.css"

function MadGame() {

  const [moveUp, setMoveUp] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [hand, sethand] = useState(false);
  const [paw, setPaw] = useState(false);
  const [anger, setAnger] = useState(0);
  const [reply, setReply] = useState(false)



  const handleCheckboxChange = () => {
    setIsChecked(true); // Immediately set isChecked to true

    setTimeout(() => {


      if (anger === 0) {
        sethand(true)
      } else {
        setMoveUp(true)
        sethand(true)
      }
      if (anger >= 3) {
        setReply(true)
      }

      setTimeout(() => {
        setPaw(true);// Call moveImage again
      }, 280);

      setTimeout(() => {
        setPaw(false);
        setIsChecked(false); // Set isChecked to false after 0.5 second
        setMoveUp(false);
        sethand(false)
        setReply(false)
      }, 500); // 0.5 second delay
      setAnger(anger + 1)
    }, 500); // 1 second delay
  };

  return (
    <>
     

      

      <div className=" h-screen bg-black flex items-center justify-center ">

      <div className='h-[500px] w-[350px] bg-transparent flex items-center justify-center absolute'>
<div className='head justify-center items-center mt-12 absolute'>
        <h1 className='font-bold text-2xl text-white'>DON'T CLICK!</h1>
      </div>

      {reply ? (
        <div className='message'>
          <svg width="150px" height="150px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>{`.cls-1 { fill: none; stroke: #FFFFFF; stroke-linecap: round; stroke-linejoin: round; stroke-width: 0.2px; }`}</style>
            </defs>
            <g id="ic-contact-message">
              <path
                className="cls-1"
                d="M19.89,3.25H4.11a2,2,0,0,0-2,2v9.06a2,2,0,0,0,2,2H5.75l2.31,4a.85.85,0,0,0,1.48,0l2.32-4h8a2,2,0,0,0,2-2V5.25A2,2,0,0,0,19.89,3.25Z"
              />
              <text x="12" y="14" fontSize="3" fill="white" textAnchor="middle">?!$&**@&</text>
            </g>
          </svg>

        </div>
      ) : (null)}


      <label className="switch">
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
              <span className="slider round"></span>
            </label>
          <div className="App">
            <div className="image-container">
              {anger > 3 ? (
                <img
                  src="b2.svg"
                  alt="b2.svg"
                  className={`animated-image ${moveUp ? 'move-up' : ''}`}
                />
              ) : (
                <img
                  src="b1.svg"
                  alt="b1.svg"
                  className={`animated-image ${moveUp ? 'move-up' : ''}`}
                />
              )}
            </div>
          </div>

          {/* Paw */}
          <div>
            <img src="p.svg" alt="p.svg" className={`paw ${paw ? 'block' : 'hidden'}`} />
          </div>


          <div >

            <img src="h.svg" alt="h.svg" className={`image-h-container ${hand ? 'move-right' : ''}`} />
          </div>

 
            
        </div>
      </div>
    </>
  );
}





export default MadGame;
