import React from "react";
import { DataItem } from "../gameboardlayout";

interface EnemyBoardLayoutProps {
  children: React.ReactNode; 
  maindata: DataItem[][];
}

export default function EnemyBoardLayout({
  children,
  maindata
}: Readonly<EnemyBoardLayoutProps>) {
  
  return (
    <div className="w-4/5 h-4/5">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ maindata: DataItem[][] }>, { maindata });
        }
        return child;
      })}
    </div>
  );
}