'use client';
import GameBoardLayout from './gameboard/layout';
import GameBoardPage from './gameboard/page';

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <GameBoardLayout>
        <GameBoardPage />
      </GameBoardLayout>
    </main>
  );
}
