import React from "react";

export default function EnemyBoardLayout({
  children,
  maindata,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="w-4/5 h-4/5">
        {React.Children.map(children, child => {
          return React.cloneElement(child, { maindata });
        })}
      </div>
  );
}