import Header from "./Header";
import HardChoices from "./HardChoices";
import Modal from "./Modal";
import HardGameChoice from "./HardGameChoice";

import { useState, useEffect } from "react";

function HardMode() {
  const [score, setScore] = useState<number>(0);
  const [playerChoice, setPlayerChoice] = useState<string>("");
  const [cpu, setCpu] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(choice);
    const cpuChoices = ["rock", "paper", "scissors", "spock", "lizard"];
    const random = Math.floor(Math.random() * cpuChoices.length);
    const cpuChoice = cpuChoices[random];
    setCpu(cpuChoice);
    setGameStarted(true);
  };

  useEffect(() => {
    if (
      (playerChoice === "rock" && cpu === "scissors") ||
      (playerChoice === "paper" && cpu === "rock") ||
      (playerChoice === "scissors" && cpu === "paper") ||
      (playerChoice === "rock" && cpu === "lizard") ||
      (playerChoice === "paper" && cpu === "spock") ||
      (playerChoice === "scissors" && cpu === "lizard") ||
      (playerChoice === "spock" && cpu === "rock") ||
      (playerChoice === "spock" && cpu === "scissors") ||
      (playerChoice === "lizard" && cpu === "spock") ||
      (playerChoice === "lizard" && cpu === "paper"
    )
    
    ) {
      setResult("You win!");
      setScore((prevsocre) => prevsocre + 1);
    } else if (playerChoice === cpu) {
      setResult("Draw!");
    } else {
      setResult("You lose!");
      setScore((prevscore) => prevscore - 1);
    }
  }, [playerChoice, cpu]);

  const handlePlayAgain = () => {
    setPlayerChoice("");
    setCpu("");
    setResult("");
    setGameStarted(false);
  };

  return (
    <div className="mx-auto  flex h-screen max-w-screen-lg flex-col items-center justify-start px-5">
      <Header score={score} />

      {gameStarted ? (
        <HardGameChoice

          playerChoice={playerChoice}
          cpu={cpu}
          result={result}
          handlePlayAgain={handlePlayAgain}
        />
      ) : (
        <>
        <HardChoices handlePlayerChoice={handlePlayerChoice} />
        <Modal />
        </>
      )}

 




    </div>
  );
}

export default HardMode;
