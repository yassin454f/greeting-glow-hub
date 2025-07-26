import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Heart, Star, Sun, Moon, Coffee, Sparkles } from "lucide-react";

const GreetingHub = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userName, setUserName] = useState("");
  const [selectedGreeting, setSelectedGreeting] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const greetings = [
    { text: "Good Morning!", icon: Sun, time: "morning" },
    { text: "Good Afternoon!", icon: Coffee, time: "afternoon" },
    { text: "Good Evening!", icon: Moon, time: "evening" },
    { text: "Have a wonderful day!", icon: Heart, time: "general" },
    { text: "You're amazing!", icon: Star, time: "general" },
    { text: "Keep shining bright!", icon: Sparkles, time: "general" },
  ];

  const getTimeBasedGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return greetings.find(g => g.time === "morning");
    if (hour < 17) return greetings.find(g => g.time === "afternoon");
    return greetings.find(g => g.time === "evening");
  };

  const timeBasedGreeting = getTimeBasedGreeting();

  return (
    <div className="min-h-screen bg-background mobile-container py-8">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="relative">
            <h1 className="text-4xl font-bold gradient-warm bg-clip-text text-transparent">
              Greeting Glow
            </h1>
            <div className="absolute -top-2 -right-2 text-2xl animate-pulse">✨</div>
          </div>
          <p className="text-muted-foreground">
            {currentTime.toLocaleTimeString()}
          </p>
        </div>

        {/* Name Input */}
        <Card className="gradient-card p-6 shadow-card border-0">
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">
              What's your name?
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
            />
          </div>
        </Card>

        {/* Time-based Greeting */}
        {timeBasedGreeting && (
          <Card className="gradient-card p-6 shadow-card border-0">
            <div className="flex items-center space-x-3">
              <timeBasedGreeting.icon className="w-8 h-8 text-accent" />
              <div>
                <h3 className="font-semibold text-lg">
                  {timeBasedGreeting.text}
                  {userName && ` ${userName}!`}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hope you're having a great {timeBasedGreeting.time}!
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Selected Greeting Display */}
        {selectedGreeting && (
          <Card className="gradient-warm p-6 shadow-glow border-0">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                {selectedGreeting}
                {userName && ` ${userName}!`}
              </h2>
              <p className="text-primary-foreground/80">
                Spread the positivity! 🌟
              </p>
            </div>
          </Card>
        )}

        {/* Greeting Buttons */}
        <div className="space-y-3">
          <h3 className="font-semibold text-center text-foreground">
            Choose a greeting to brighten someone's day:
          </h3>
          <div className="grid gap-3">
            {greetings.map((greeting, index) => {
              const IconComponent = greeting.icon;
              return (
                <Button
                  key={index}
                  variant={selectedGreeting === greeting.text ? "glow" : "outline"}
                  size="mobile"
                  onClick={() => setSelectedGreeting(greeting.text)}
                  className="justify-start"
                >
                  <IconComponent className="w-5 h-5" />
                  {greeting.text}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Share Actions */}
        {selectedGreeting && (
          <div className="space-y-3">
            <Button
              variant="secondary"
              size="mobile"
              className="w-full"
              onClick={() => {
                const message = `${selectedGreeting}${userName ? ` ${userName}!` : ""} 🌟`;
                if (navigator.share) {
                  navigator.share({
                    title: 'Greeting Glow',
                    text: message,
                  });
                } else {
                  navigator.clipboard?.writeText(message);
                }
              }}
            >
              Share This Greeting
            </Button>
            
            <Button
              variant="ghost"
              size="mobile"
              className="w-full"
              onClick={() => setSelectedGreeting("")}
            >
              Choose Another Greeting
            </Button>
          </div>
        )}

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 inline text-red-500" /> for spreading joy
          </p>
        </div>

      </div>
    </div>
  );
};

export default GreetingHub;