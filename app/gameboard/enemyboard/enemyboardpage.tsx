'use client';
import React from 'react';
import { DataItem } from "../gameboardlayout";

function EnemyBoardPage({maindata}:{maindata:DataItem[][]}) {
  return (
    <main className="w-full h-full bg-[#f2f2f2] border-[2px] border-[red]">
      {maindata.map((row,rowIndex)=>(
        <div key={rowIndex} className="w-full h-[12.5%] flex">
          {row.map((item, colIndex)=> (
            <div key={colIndex} className="flex flex-1 justify-center items-center border-[1px]">
              {item.id}
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}

export default EnemyBoardPage;