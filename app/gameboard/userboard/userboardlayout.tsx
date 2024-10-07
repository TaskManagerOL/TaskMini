import React from "react";
import { DataItem } from "../gameboardlayout";

interface UserBoardLayoutProps {
  children: React.ReactNode;
  maindata: DataItem[][]; 
}

export default function UserBoardLayout({
  children,
  maindata,
}: Readonly<UserBoardLayoutProps>) {
  return (
      <div className="w-4/5 h-1/5">
        {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ maindata: DataItem[][] }>, { maindata });
        }
          return child;
        })}
      </div>
  );
}