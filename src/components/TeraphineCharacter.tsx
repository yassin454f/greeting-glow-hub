import { useState, useEffect } from "react";

interface TeraphineCharacterProps {
  isTyping: boolean;
  isRevealing: boolean;
  userName?: string;
}

const TeraphineCharacter = ({ isTyping, isRevealing, userName }: TeraphineCharacterProps) => {
  const [showSmile, setShowSmile] = useState(false);

  useEffect(() => {
    if (isRevealing) {
      setShowSmile(true);
      const timer = setTimeout(() => setShowSmile(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isRevealing]);

  return (
    <div className="relative w-64 h-64 mx-auto mb-8 animate-float">
      {/* Background magical aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-violet-500/30 to-purple-600/20 animate-glow-pulse blur-xl"></div>
      
      {/* Main character container */}
      <div className="relative w-full h-full rounded-full gradient-card border-2 border-primary/30 shadow-mystic overflow-hidden">
        
        {/* Hair */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-24 rounded-full bg-gradient-to-b from-purple-800 to-purple-900 shadow-lg"></div>
        
        {/* Face */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-28 rounded-full bg-gradient-to-b from-amber-100 to-amber-200 shadow-inner">
          
          {/* Eyes */}
          <div className="absolute top-8 left-3 w-4 h-4 bg-purple-600 rounded-full shadow-lg">
            <div className="absolute top-1 left-1 w-2 h-2 bg-purple-800 rounded-full">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
            </div>
            {/* Blinking animation */}
            {isTyping && (
              <div className="absolute inset-0 bg-amber-100 rounded-full animate-blink origin-center"></div>
            )}
          </div>
          
          <div className="absolute top-8 right-3 w-4 h-4 bg-purple-600 rounded-full shadow-lg">
            <div className="absolute top-1 left-1 w-2 h-2 bg-purple-800 rounded-full">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
            </div>
            {/* Blinking animation */}
            {isTyping && (
              <div className="absolute inset-0 bg-amber-100 rounded-full animate-blink origin-center"></div>
            )}
          </div>
          
          {/* Nose */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-amber-300 rounded-full shadow-sm"></div>
          
          {/* Mouth */}
          <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            showSmile ? 'animate-mysterious-smile' : ''
          }`}>
            {showSmile ? (
              <div className="w-6 h-3 border-b-2 border-purple-600 rounded-b-full"></div>
            ) : (
              <div className="w-3 h-1 bg-purple-400 rounded-full"></div>
            )}
          </div>
        </div>
        
        {/* Mystical accessories */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
        
        {/* Robe/Clothing */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-32 bg-gradient-to-b from-purple-700 to-purple-900 rounded-t-full border-t-2 border-primary/40"></div>
      </div>
      
      {/* Floating magical particles */}
      <div className="absolute top-4 left-4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-12 left-8 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-8 right-4 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Speaking indicator */}
      {userName && showSmile && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-accent animate-glow-pulse">
            ✨ {userName}, your destiny awaits... ✨
          </p>
        </div>
      )}
    </div>
  );
};

export default TeraphineCharacter;