import { useEffect, useState } from "react";
export default function Progressbar({value}) {

const percent = Math.min(value,100)

  return (
    <>
      <div>Progress bar</div>
      <div className="progressbar">
        <span>{percent}%</span>
         <div className="progressbarstatus" style={{width:`${percent}%`}}>

         </div>
      </div>
    </>
  );
}
 