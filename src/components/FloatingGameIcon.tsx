"use client";

import React, { useState, useRef } from 'react';
import { Gamepad2 } from 'lucide-react';
import './FloatingGameIcon.css';
import GameModal from '@/components/GameModal';

const FloatingGameIcon = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Offset from bottom right
  const [isDragging, setIsDragging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    hasMoved.current = false;
    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY
    };
    if (iconRef.current) {
        iconRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      hasMoved.current = true;
    }

    setPosition(prev => ({
      x: prev.x - dx,
      y: prev.y - dy
    }));

    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    if (iconRef.current) {
        iconRef.current.releasePointerCapture(e.pointerId);
    }
    if (!hasMoved.current) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div 
        ref={iconRef}
        className={`floating-game-icon ${isDragging ? 'dragging' : ''}`}
        style={{ 
          right: `calc(20px + ${position.x}px)`, 
          bottom: `calc(20px + ${position.y}px)`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <Gamepad2 size={24} />
      </div>

      <GameModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingGameIcon;
