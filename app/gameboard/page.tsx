'use client';
import EnemyBoardPage from "./enemyboard/page";
import EnemyBoardLayout from "./enemyboard/layout";
import UserBoardPage from "./userboard/page";
import UserBoardLayout from "./userboard/layout";

export default function GameBoardPage({maindata}) {
  const enemyData = maindata.slice(0,8)
  const userData = maindata.slice(8)
  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="w-full h-[94vh] flex flex-col justify-center items-center">
        {/* {maindata.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((item, colIndex) => (
            <div key={colIndex}>
              <p>ID: {item.id}</p>
              <p>HP: {item.hp}</p>
              <p>Special: {item.special}</p>
            </div>
          ))}
        </div>
      ))} */}
        <EnemyBoardLayout maindata={enemyData}>
          <EnemyBoardPage />
        </EnemyBoardLayout>
        <UserBoardLayout maindata={userData}>
          <UserBoardPage />
        </UserBoardLayout>
      </div>
    </main>
  );
}
