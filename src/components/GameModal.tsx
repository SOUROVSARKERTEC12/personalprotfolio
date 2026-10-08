"use client";

import React, { useEffect } from 'react';
import './GameModal.css';
import TypingRacingGame from '@/components/TypingRacingGame';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="game-modal-overlay" onClick={onClose}>
      <div className="game-modal-content" onClick={(e) => e.stopPropagation()}>
        <TypingRacingGame onClose={onClose} />
      </div>
    </div>
  );
};

export default GameModal;
