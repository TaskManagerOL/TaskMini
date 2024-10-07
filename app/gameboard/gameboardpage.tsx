'use client';

import EnemyBoardPage from "./enemyboard/enemyboardpage";
import EnemyBoardLayout from "./enemyboard/enemyboardlayout";
import UserBoardPage from "./userboard/userboardpage";
import UserBoardLayout from "./userboard/userboardlayout";

import { DataItem } from "./gameboardlayout";

export default function GameBoardPage(props) {
  const maindata = props.maindata
  const enemyData = maindata.slice(0,8)
  const userData = maindata.slice(8)
  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="w-full h-[94vh] flex flex-col justify-center items-center">
        <EnemyBoardLayout maindata={enemyData}>
          <EnemyBoardPage maindata={enemyData} />
        </EnemyBoardLayout>
        <UserBoardLayout maindata={userData}>
          <UserBoardPage maindata={userData} />
        </UserBoardLayout>
      </div>
    </main>
  );
}
