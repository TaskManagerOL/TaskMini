'use client';
import GameBoardLayout from './gameboard/gameboardlayout';
import GameBoardPage from './gameboard/gameboardpage';

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <GameBoardLayout >
        <GameBoardPage/>
      </GameBoardLayout>
    </main>
  );
}
