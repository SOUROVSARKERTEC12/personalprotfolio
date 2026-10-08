"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Play, RotateCcw } from 'lucide-react';
import './TypingRacingGame.css';

type GameState = 'waiting' | 'countdown' | 'playing' | 'finished';

interface Car {
  id: string;
  name: string;
  progress: number;
  speed: number;
  type: 'monster' | 'speedster' | 'racerx' | 'yellowcoupe' | 'redracer';
}

interface TypingRacingGameProps {
  onClose?: () => void;
}

const SAMPLE_TEXTS = [
  "Wow, the weight of the ant is so small compared to an elephant.",
  "The quick brown fox jumps over the lazy dog in the middle of the night.",
  "Web development requires a solid understanding of HTML, CSS, and JavaScript.",
  "React makes it painless to create interactive UIs with simple views for each state.",
  "Artificial intelligence is transforming the way we interact with technology today."
];

const INITIAL_CARS: Car[] = [
  { id: 'bot1', name: 'Monster', progress: 0, speed: 0.12, type: 'monster' },
  { id: 'bot2', name: 'Speedster', progress: 0, speed: 0.22, type: 'speedster' },
  { id: 'bot3', name: 'Racer X', progress: 0, speed: 0.17, type: 'racerx' },
  { id: 'bot4', name: 'Smooth Cruiser', progress: 0, speed: 0.14, type: 'yellowcoupe' },
  { id: 'user', name: 'You', progress: 0, speed: 0, type: 'redracer' },
];

/* SVG Cars - All facing right towards finish line */
const RedRacer = () => (
  <svg width="58" height="24" viewBox="0 0 60 26" fill="none" className="car-svg">
    <path d="M4 17L10 17L14 10L36 10L45 15L56 16L57 19L52 20L8 20Z" fill="#ff3b30" />
    <path d="M16 10L23 5L36 5L42 10Z" fill="#0f172a" />
    <path d="M24 6L35 6L39 10L20 10Z" fill="#7dd3fc" opacity="0.85" />
    <path d="M6 14L4 8L10 8L9 14Z" fill="#b91c1c" />
    <line x1="3" y1="8" x2="11" y2="8" stroke="#111" strokeWidth="1.5" />
    <path d="M54 16L58 17L54 18Z" fill="#facc15" />
    <circle cx="15" cy="20" r="5" fill="#111" stroke="#94a3b8" strokeWidth="1.5" />
    <circle cx="15" cy="20" r="2" fill="#fff" />
    <circle cx="46" cy="20" r="5" fill="#111" stroke="#94a3b8" strokeWidth="1.5" />
    <circle cx="46" cy="20" r="2" fill="#fff" />
  </svg>
);

const MonsterTruck = () => (
  <svg width="58" height="26" viewBox="0 0 60 28" fill="none" className="car-svg">
    <rect x="10" y="8" width="38" height="10" rx="3" fill="#2563eb" />
    <path d="M14 8L20 2L34 2L38 8Z" fill="#1d4ed8" />
    <path d="M21 3L33 3L36 7L17 7Z" fill="#bfdbfe" opacity="0.85" />
    <path d="M48 13L54 14L48 16Z" fill="#cbd5e1" />
    <circle cx="16" cy="21" r="6.5" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
    <circle cx="16" cy="21" r="2.5" fill="#94a3b8" />
    <circle cx="42" cy="21" r="6.5" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
    <circle cx="42" cy="21" r="2.5" fill="#94a3b8" />
  </svg>
);

const Speedster = () => (
  <svg width="58" height="22" viewBox="0 0 60 24" fill="none" className="car-svg">
    <path d="M2 15L12 15L20 8L38 8L48 13L58 15L58 18L50 19L6 19Z" fill="#0284c7" />
    <path d="M22 8L28 4L38 4L44 8Z" fill="#0c4a6e" />
    <path d="M29 5L37 5L41 8L25 8Z" fill="#bae6fd" opacity="0.85" />
    <path d="M4 12L2 7L8 7L7 12Z" fill="#0369a1" />
    <circle cx="14" cy="19" r="4.5" fill="#111827" stroke="#e0f2fe" strokeWidth="1.5" />
    <circle cx="14" cy="19" r="1.5" fill="#38bdf8" />
    <circle cx="47" cy="19" r="4.5" fill="#111827" stroke="#e0f2fe" strokeWidth="1.5" />
    <circle cx="47" cy="19" r="1.5" fill="#38bdf8" />
  </svg>
);

const RacerX = () => (
  <svg width="58" height="22" viewBox="0 0 60 24" fill="none" className="car-svg">
    <path d="M3 15L10 15L18 8L37 8L46 13L57 15L57 18L50 19L7 19Z" fill="#f1f5f9" />
    <path d="M12 15L48 15L47 17L10 17Z" fill="#10b981" />
    <path d="M20 8L27 4L37 4L43 8Z" fill="#334155" />
    <path d="M28 5L36 5L40 8L23 8Z" fill="#6ee7b7" opacity="0.85" />
    <circle cx="14" cy="19" r="4.5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
    <circle cx="14" cy="19" r="1.5" fill="#10b981" />
    <circle cx="46" cy="19" r="4.5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
    <circle cx="46" cy="19" r="1.5" fill="#10b981" />
  </svg>
);

const YellowCoupe = () => (
  <svg width="58" height="22" viewBox="0 0 60 24" fill="none" className="car-svg">
    <path d="M4 15L11 15L17 9L36 9L44 14L56 15L56 18L50 19L8 19Z" fill="#eab308" />
    <path d="M19 9L25 5L36 5L41 9Z" fill="#713f12" />
    <path d="M26 6L35 6L38 9L22 9Z" fill="#fef08a" opacity="0.8" />
    <path d="M6 13L5 7L10 7L9 13Z" fill="#ca8a04" />
    <circle cx="15" cy="19" r="4.5" fill="#18181b" stroke="#fef08a" strokeWidth="1.5" />
    <circle cx="15" cy="19" r="1.5" fill="#ffffff" />
    <circle cx="45" cy="19" r="4.5" fill="#18181b" stroke="#fef08a" strokeWidth="1.5" />
    <circle cx="45" cy="19" r="1.5" fill="#ffffff" />
  </svg>
);

const renderCarGraphic = (type: Car['type']) => {
  switch (type) {
    case 'monster': return <MonsterTruck />;
    case 'speedster': return <Speedster />;
    case 'racerx': return <RacerX />;
    case 'yellowcoupe': return <YellowCoupe />;
    case 'redracer':
    default:
      return <RedRacer />;
  }
};

const Speedometer: React.FC<{ wpm: number }> = ({ wpm }) => {
  const clampedWpm = Math.min(Math.max(wpm, 0), 160);
  const angle = -120 + (clampedWpm / 160) * 180;

  return (
    <div className="speedometer-container">
      <svg width="86" height="86" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="#0d212d" stroke="#1e455c" strokeWidth="4" />
        <path
          d="M 18.9 68 A 40 40 0 1 1 81.1 68"
          fill="none"
          stroke="#1b3d52"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 18.9 68 A 40 40 0 1 1 81.1 68"
          fill="none"
          stroke="#00ffcc"
          strokeWidth="4"
          strokeDasharray="210"
          strokeDashoffset={210 - (clampedWpm / 160) * 210}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.2s ease' }}
        />
        {[0, 30, 60, 90, 120, 150, 180].map((deg, i) => {
          const rad = ((deg - 210) * Math.PI) / 180;
          const x1 = 50 + 36 * Math.cos(rad);
          const y1 = 50 + 36 * Math.sin(rad);
          const x2 = 50 + 40 * Math.cos(rad);
          const y2 = 50 + 40 * Math.sin(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 2 === 0 ? "#00ffcc" : "#6c8ea3"}
              strokeWidth={i % 2 === 0 ? "2" : "1"}
            />
          );
        })}
        <circle cx="50" cy="50" r="6" fill="#00ffcc" />
        <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: '50px 50px', transition: 'transform 0.2s ease-out' }}>
          <line x1="50" y1="50" x2="50" y2="16" stroke="#ff3b30" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="50" cy="50" r="3.5" fill="#ff3b30" />
        </g>
        <text x="50" y="82" textAnchor="middle" fill="#8bb2c9" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
          {wpm} WPM
        </text>
      </svg>
    </div>
  );
};

const TypingRacingGame: React.FC<TypingRacingGameProps> = ({ onClose }) => {
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [countdown, setCountdown] = useState(3);
  const [targetText, setTargetText] = useState(SAMPLE_TEXTS[0]);
  const [typedText, setTypedText] = useState("");
  const [cars, setCars] = useState<Car[]>(INITIAL_CARS);
  const [winner, setWinner] = useState<Car | null>(null);
  const [currentWpm, setCurrentWpm] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  
  const botInterval = useRef<NodeJS.Timeout | null>(null);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  const startTime = useRef<number>(0);

  const startGame = () => {
    setTargetText(SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)]);
    setTypedText("");
    setCars(INITIAL_CARS);
    setWinner(null);
    setCurrentWpm(0);
    setElapsedTime(0);
    setGameState('countdown');
    setCountdown(3);
  };

  // Countdown logic
  useEffect(() => {
    if (gameState === 'countdown') {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => {
          setGameState('playing');
          startTime.current = Date.now();
        }, 0);
      }
    }
  }, [gameState, countdown]);

  // Bot movement and WPM/Time update logic
  useEffect(() => {
    if (gameState === 'playing') {
      botInterval.current = setInterval(() => {
        setCars(prevCars => {
          const updatedCars = prevCars.map(car => {
            if (car.id !== 'user') {
              const speedVariance = car.speed * (0.8 + Math.random() * 0.4);
              const newProgress = Math.min(100, car.progress + speedVariance);
              return { ...car, progress: newProgress };
            }
            return car;
          });

          const finishingBot = updatedCars.find(car => car.progress >= 100 && car.id !== 'user');
          if (finishingBot) {
             setWinner(finishingBot);
             setTimeout(() => setGameState('finished'), 0);
          }

          return updatedCars;
        });

      }, 50);

      timerInterval.current = setInterval(() => {
        if (startTime.current) {
          setElapsedTime(Math.floor((Date.now() - startTime.current) / 1000));
        }
      }, 1000);
    }

    return () => {
      if (botInterval.current) clearInterval(botInterval.current);
      if (timerInterval.current) clearInterval(timerInterval.current);
    };
  }, [gameState]);

  // Keyboard logic
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState === 'waiting' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        startGame();
        return;
      }
      if (gameState === 'finished' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        startGame();
        return;
      }

      if (gameState !== 'playing') return;
      
      // Ignore meta keys, control, alt, shift, etc.
      if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'Meta' || e.key === 'Backspace' || e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }
      
      setTypedText(prev => {
        if (prev === targetText) return prev;
        const expectedChar = targetText[prev.length];
        
        if (e.key === expectedChar) {
          const newTyped = prev + e.key;
          const newProgress = (newTyped.length / targetText.length) * 100;
          
          setCars(prevCars => prevCars.map(car => 
            car.id === 'user' ? { ...car, progress: newProgress } : car
          ));

          if (startTime.current) {
             const timeInMinutes = (Date.now() - startTime.current) / 60000;
             if (timeInMinutes > 0) {
                const words = newTyped.length / 5;
                setCurrentWpm(Math.round(words / timeInMinutes));
             }
          }

          if (newTyped === targetText) {
            setWinner({ id: 'user', name: 'You', progress: 100, speed: 0, type: 'redracer' });
            setTimeout(() => setGameState('finished'), 0);
          }

          return newTyped;
        }
        return prev;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, targetText]); 

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="typeracer-container">
      {/* Scenery & Top Bar Header */}
      <div className="typeracer-header">
        <div className="typeracer-topbar">
          <div className="typeracer-wpm-badge">
            <span className="wpm-val">{currentWpm}</span>
            <span className="wpm-lbl">WPM</span>
          </div>

          <div className="typeracer-topbar-right">
            <div className="typeracer-timer-badge">
              {formatTime(elapsedTime)}
            </div>
            {onClose && (
              <button className="game-close-btn" onClick={onClose} aria-label="Close modal">
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Skyline Backdrop */}
        <div className="scenery-backdrop">
          <svg className="scenery-silhouette" viewBox="0 0 800 50" preserveAspectRatio="none">
            <rect x="80" y="20" width="30" height="30" fill="#14532d" />
            <rect x="85" y="10" width="20" height="10" fill="#14532d" />
            <line x1="95" y1="2" x2="95" y2="10" stroke="#14532d" strokeWidth="2" />
            
            <rect x="220" y="15" width="45" height="35" fill="#14532d" />
            <circle cx="242" cy="15" r="14" fill="#14532d" />
            
            <rect x="380" y="24" width="60" height="26" fill="#14532d" />
            <rect x="400" y="6" width="20" height="18" fill="#14532d" />
            
            <rect x="560" y="18" width="35" height="32" fill="#14532d" />
            <path d="M660 35 L700 15 L740 35 Z" fill="#14532d" />
            <line x1="0" y1="36" x2="800" y2="36" stroke="#14532d" strokeWidth="1.5" strokeDasharray="6 3" />
          </svg>
          <div className="track-curb-strip"></div>
        </div>
      </div>

      {/* Race Track */}
      <div className="typeracer-track-area">
        {/* Starting Line Gate Marker */}
        <div className="start-line-marker"></div>

        {/* Authentic Checkered Finish Line Column */}
        <div className="finish-line-checker">
          <div className="finish-line-light"></div>
        </div>

        {/* 5 Equal Racing Lanes */}
        {cars.map((car) => {
          // Progress mapped smoothly from start line (10px) to finish line
          // Car wrapper travels across track cleanly without overflowing
          return (
            <div key={car.id} className="typeracer-lane">
              <div className="typeracer-lane-line"></div>
              <div 
                className={`typeracer-car-wrapper ${car.id === 'user' ? 'user-car-wrapper' : ''}`}
                style={{ 
                  left: `calc(15px + ${car.progress * 0.76}%)` 
                }}
              >
                <div className="car-name-tag">
                  {car.name}
                  {car.id === 'user' && <span className="you-indicator">⭐</span>}
                </div>
                <div className="car-graphic-container">
                  {renderCarGraphic(car.type)}
                </div>
              </div>
            </div>
          );
        })}

        {/* Waiting State Overlay */}
        {gameState === 'waiting' && (
          <div className="track-state-overlay">
            <div className="state-card">
              <h2 className="race-title">TypeRacer Speed Challenge</h2>
              <p className="race-desc">Type fast to speed up your red racecar and beat the opponents!</p>
              <button className="start-btn pulse-button" onClick={startGame}>
                <Play size={18} fill="currentColor" /> Play Now (or Enter)
              </button>
            </div>
          </div>
        )}

        {/* Countdown Light Overlay */}
        {gameState === 'countdown' && (
          <div className="track-state-overlay countdown-overlay">
            <div className="traffic-lights">
              <div className={`light red-light ${countdown === 3 ? 'active' : ''}`}></div>
              <div className={`light yellow-light ${countdown === 2 ? 'active' : ''}`}></div>
              <div className={`light green-light ${countdown === 1 || countdown === 0 ? 'active' : ''}`}></div>
            </div>
            <div className="countdown-number">{countdown > 0 ? countdown : 'GO!'}</div>
          </div>
        )}

        {/* Finished / Results Overlay */}
        {gameState === 'finished' && (
          <div className="track-state-overlay results-overlay">
            <div className="results-card">
              <h3 className="results-title">
                {winner?.id === 'user' ? '🏆 Victory! You Won! 🏆' : `🏁 ${winner?.name} Finished First! 🏁`}
              </h3>
              <div className="final-stats-row">
                <div className="stat-pill">
                  <span className="stat-label">Your Typing Speed</span>
                  <span className="stat-val">{currentWpm} WPM</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-label">Time Elapsed</span>
                  <span className="stat-val">{formatTime(elapsedTime)}</span>
                </div>
              </div>
              <button className="start-btn" onClick={startGame}>
                <RotateCcw size={18} /> Race Again
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Typing Console ("The Face") */}
      <div className="typeracer-typing-area">
        <div className="text-display-container">
          <div className="speedometer-wrapper">
            <Speedometer wpm={currentWpm} />
          </div>

          <div className="text-display-wrapper">
            <div className="text-display">
              {targetText.split('').map((char, index) => {
                let charClass = 'text-char ';
                if (index < typedText.length) {
                  charClass += 'text-char-correct';
                } else if (index === typedText.length) {
                  charClass += 'text-char-current';
                } else {
                  charClass += 'text-char-upcoming';
                }
                return (
                  <span key={index} className={charClass}>
                    {index === typedText.length && gameState === 'playing' && (
                      <span className="typing-caret">|</span>
                    )}
                    {char}
                  </span>
                );
              })}
            </div>
            <div className="typing-hint">
              {gameState === 'playing' 
                ? 'Type the text above as fast and accurately as you can!' 
                : 'Click Play Now or press Enter to start typing!'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TypingRacingGame };
export default TypingRacingGame;
