import React from "react";

export type TypeDetail = {
  type:string;
  num?:number;
}

export type DataItem = {
  id: number;
  type: TypeDetail;
  hp?: number;
  special?: string;
};

function mainborad(params) {
  const maindata: DataItem[][] = Array.from({ length: 10 }, (_, i) => (
    Array.from({ length: 5 }, (_, j) => ({
      id: i * 5 + j + 1,
      type: {
        type:"blank"
      }
    }))
  ));
  
  return maindata
}

export default function GameBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const maindata = mainborad()

  return (
      <div className="w-[100vw] h-[100vh]">
        {React.Children.map(children, child => {
          return React.cloneElement(child, { maindata });
        })}
      </div>
  );
}