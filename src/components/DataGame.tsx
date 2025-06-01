
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, X } from 'lucide-react';

interface DataGameProps {
  onComplete: () => void;
}

const DataGame = ({ onComplete }: DataGameProps) => {
  const [gameData, setGameData] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const questions = [
    { data: [10, 25, 15, 30, 20], question: "What's the average?", answer: 20 },
    { data: [100, 200, 150, 250, 300], question: "What's the maximum value?", answer: 300 },
    { data: [5, 10, 5, 15, 5], question: "What's the median?", answer: 5 },
    { data: [2, 4, 6, 8, 10], question: "What's the next number in sequence?", answer: 12 }
  ];

  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers([]);
  };

  const handleAnswer = (answer: number) => {
    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);

    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameFinished(true);
    }
  };

  const finishGame = () => {
    onComplete();
  };

  if (!gameStarted) {
    return (
      <Card className="w-96 bg-slate-800 border-slate-700 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Data Challenge
          </CardTitle>
          <p className="text-slate-400">Test your analytical skills!</p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-slate-300">
            Solve data analysis questions to unlock the portfolio
          </p>
          <Button 
            onClick={startGame}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
          >
            Start Challenge
          </Button>
          <Button 
            variant="outline" 
            onClick={onComplete}
            className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Skip Game
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (gameFinished) {
    return (
      <Card className="w-96 bg-slate-800 border-slate-700 text-white">
        <CardHeader className="text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <CardTitle className="text-2xl text-cyan-400">Challenge Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-xl">Score: {score}/{questions.length}</p>
          <p className="text-slate-400">
            {score === questions.length ? "Perfect! You're a data wizard!" :
             score >= questions.length / 2 ? "Great job! Strong analytical skills!" :
             "Good effort! Keep practicing!"}
          </p>
          <Button 
            onClick={finishGame}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
          >
            Enter Portfolio
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <Card className="w-96 bg-slate-800 border-slate-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg text-cyan-400">
            Question {currentQuestion + 1}/{questions.length}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onComplete}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-slate-300 mb-4">{currentQ.question}</p>
          <div className="bg-slate-700 p-4 rounded-lg mb-4">
            <div className="flex justify-center space-x-2">
              {currentQ.data.map((value, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-8 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t"
                    style={{ height: `${(value / Math.max(...currentQ.data)) * 80}px` }}
                  ></div>
                  <span className="text-xs text-slate-400">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {[...new Set([...currentQ.data, currentQ.answer])]
            .sort((a, b) => a - b)
            .slice(0, 4)
            .map((option, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleAnswer(option)}
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-500"
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataGame;
