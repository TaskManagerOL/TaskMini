'use client';
import { DataItem } from "../gameboardlayout";

function TouchComponent() {
  const handleTouchStart = () => {
    console.log('触摸开始');
  };

  const handleTouchMove = () => {
    console.log('触摸移动');
  };

  const handleTouchEnd = () => {
    console.log('触摸结束');
  };

  const handleTouchCancel = () => {
    console.log('触摸取消');
  };
  
  return{
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchCancel
  }
}

export default function UserBoardPage({maindata}) {
  const Touch = TouchComponent()
  console.log(maindata);

  return (
    <main className="w-full h-full bg-[#f2f2f2] border-[2px] border-[green]">
      {maindata.map((row,rowIndex)=>(
        <div key={rowIndex} className="w-full h-1/2 flex">
          {row.map((item, colIndex)=> (
            <div key={colIndex} className="flex flex-1 justify-center items-center border-[1px] select-none" onTouchStart={Touch.handleTouchStart}>
              {item.id}
            </div>
        ))}
        </div>
      ))}
    </main>
  );
}