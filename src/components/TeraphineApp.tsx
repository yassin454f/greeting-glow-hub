import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Sparkles, Gem, Star, Moon } from "lucide-react";
import TeraphineCharacter from "./TeraphineCharacter";

const TeraphineApp = () => {
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [fortune, setFortune] = useState("");
  const [isRevealing, setIsRevealing] = useState(false);

  // Track typing state
  useEffect(() => {
    const hasContent = userName.length > 0 || birthDate.length > 0 || favoriteColor.length > 0;
    setIsTyping(hasContent);
  }, [userName, birthDate, favoriteColor]);

  const generateFortune = () => {
    if (!userName || !birthDate || !favoriteColor) return;

    setIsRevealing(true);
    
    // Play mystical sound effect (placeholder - user would need to add audio files)
    try {
      const audio = new Audio('/mystical-reveal.mp3');
      audio.play().catch(() => {
        // Fallback if audio file doesn't exist
        console.log('🔮 Mystical sound would play here');
      });
    } catch (error) {
      console.log('🔮 Audio not available');
    }

    setTimeout(() => {
      const birth = new Date(birthDate);
      const birthMonth = birth.getMonth() + 1;
      const birthDay = birth.getDate();
      
      const fortunes = [
        `${userName}, the stars align in your favor! Your connection to ${favoriteColor} reveals a soul seeking harmony. The number ${birthDay} brings you luck this month.`,
        `Mystical energies surround you, ${userName}. Born in month ${birthMonth}, you possess hidden talents waiting to bloom. Your ${favoriteColor} aura attracts positive transformation.`,
        `The cosmic winds whisper secrets, dear ${userName}. Your birth date reveals a path of wisdom, while ${favoriteColor} guides your intuition toward new adventures.`,
        `Ancient magic flows through you, ${userName}. The celestial dance of month ${birthMonth} and day ${birthDay} grants you protective powers. ${favoriteColor} is your spiritual shield.`,
        `Behold, ${userName}! The mystical realm sees great potential in your future. Your affinity for ${favoriteColor} connects you to elemental forces. Expect magical moments ahead!`
      ];
      
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortune(randomFortune);
      setIsRevealing(false);
    }, 3000);
  };

  const resetReading = () => {
    setFortune("");
    setUserName("");
    setBirthDate("");
    setFavoriteColor("");
    setIsTyping(false);
  };

  const playBackgroundMusic = () => {
    try {
      const audio = new Audio('/mystical-background.mp3');
      audio.loop = true;
      audio.volume = 0.3;
      audio.play().catch(() => {
        console.log('🎵 Background music would play here');
      });
    } catch (error) {
      console.log('🎵 Audio not available');
    }
  };

  useEffect(() => {
    playBackgroundMusic();
  }, []);

  const colorOptions = [
    "Purple", "Blue", "Red", "Green", "Yellow", "Orange", "Pink", "Black", "White", "Silver", "Gold"
  ];

  return (
    <div className="min-h-screen bg-background mobile-container py-6 relative overflow-hidden">
      {/* Magical background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-16 w-1 h-1 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-60 right-8 w-1 h-1 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-md mx-auto space-y-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-mystic bg-clip-text text-transparent">
            Teraphine
          </h1>
          <p className="text-lg text-accent font-medium">The Mystic Fortune Teller</p>
          <div className="flex justify-center space-x-2 text-primary/60">
            <Gem className="w-4 h-4 animate-glow-pulse" />
            <Star className="w-4 h-4 animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
            <Moon className="w-4 h-4 animate-glow-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Teraphine Character */}
        <TeraphineCharacter 
          isTyping={isTyping} 
          isRevealing={isRevealing}
          userName={userName}
        />

        {!fortune ? (
          <>
            {/* Input Form */}
            <Card className="gradient-card p-6 shadow-card border border-primary/20 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <p className="text-foreground/80 text-sm">
                    ✨ Share your essence, and I shall reveal your destiny ✨
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-foreground/90 mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your mystical name..."
                      className="w-full h-12 px-4 rounded-xl border border-primary/30 bg-background/50 backdrop-blur text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground/90 mb-2 block">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-primary/30 bg-background/50 backdrop-blur text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground/90 mb-2 block">
                      Favorite Color
                    </label>
                    <select
                      value={favoriteColor}
                      onChange={(e) => setFavoriteColor(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-primary/30 bg-background/50 backdrop-blur text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Choose your mystical color...</option>
                      {colorOptions.map((color) => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </Card>

            {/* Reveal Button */}
            <Button
              variant="mystic"
              size="mobile"
              className="w-full"
              onClick={generateFortune}
              disabled={!userName || !birthDate || !favoriteColor || isRevealing}
            >
              <Sparkles className="w-5 h-5" />
              {isRevealing ? "Consulting the Stars..." : "Reveal My Fortune"}
            </Button>
          </>
        ) : (
          /* Fortune Result */
          <div className="space-y-6">
            <Card className="gradient-fortune p-6 shadow-mystic border border-primary/40 backdrop-blur">
              <div className="text-center space-y-4">
                <div className="flex justify-center space-x-2 text-accent mb-4">
                  <Gem className="w-6 h-6 animate-glow-pulse" />
                  <Star className="w-6 h-6 animate-glow-pulse" style={{ animationDelay: '0.3s' }} />
                  <Gem className="w-6 h-6 animate-glow-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
                
                <h3 className="text-xl font-bold text-accent mb-4">Your Mystical Fortune</h3>
                
                <p className="text-foreground leading-relaxed text-base">
                  {fortune}
                </p>
                
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-sm text-accent/80">
                    ✨ The universe has spoken ✨
                  </p>
                </div>
              </div>
            </Card>

            <Button
              variant="outline"
              size="mobile"
              className="w-full"
              onClick={resetReading}
            >
              Seek Another Reading
            </Button>
          </div>
        )}

        {/* Footer */}
        <div className="text-center pt-6">
          <p className="text-xs text-muted-foreground">
            The stars guide those who believe ✨
          </p>
        </div>

      </div>
    </div>
  );
};

export default TeraphineApp;