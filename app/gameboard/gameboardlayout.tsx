import React from "react";

export type DataItem = {
  id: number;
  type: string;
  hp: number;
  special: string;
};

function mainborad(params: number): DataItem[][] {
  const maindata: DataItem[][] = Array.from({ length: 10 }, (_, i) =>
    Array.from({ length: 5 }, (_, j) => ({
      id: i * 5 + j + 1,
      type: "blank",
      hp: -1,
      special: "null"
    }))
  );

  return maindata;
}

interface GameBoardLayoutProps {
  children: React.ReactNode;
}

export default function GameBoardLayout({
  children,
}: Readonly<GameBoardLayoutProps>) {
  const maindata = mainborad(0);

  return (
    <div className="w-[100vw] h-[100vh]">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ maindata: DataItem[][] }>, { maindata });
        }
        return child;
      })}
    </div>
  );
}
