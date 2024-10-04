import React from "react";

export default function UserBoardLayout({
  children,
  maindata,
}: Readonly<{
  children: React.ReactNode;
  maindata: DataItem[][];
}>) {
  return (
      <div className="w-4/5 h-1/5">
        {React.Children.map(children, child => {
          return React.cloneElement(child, { maindata });
        })}
      </div>
  );
}