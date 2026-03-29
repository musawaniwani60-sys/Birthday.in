import { useState, useEffect } from 'react';
import { Heart, Music, Volume2, VolumeX, Gift, Sparkles, Cake } from 'lucide-react';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [candlesLit, setCandlesLit] = useState(true);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [audioElement] = useState(() => new Audio('https://www.bensound.com/bensound-music/bensound-happyrock.mp3'));

  const photos = [
    { url: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Beautiful Memories' },
    { url: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Precious Moments' },
    { url: 'https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Forever Young' },
    { url: 'https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Shine Bright' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos.length]);

  useEffect(() => {
    audioElement.loop = true;
    return () => {
      audioElement.pause();
    };
  }, [audioElement]);

  const toggleMusic = () => {
    if (musicPlaying) {
      audioElement.pause();
    } else {
      audioElement.play().catch(err => console.log('Audio play failed:', err));
    }
    setMusicPlaying(!musicPlaying);
  };

  const toggleCandles = () => {
    setCandlesLit(!candlesLit);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 overflow-hidden">
      <div className="particles-container"></div>

      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 glass-button p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        {musicPlaying ? <Volume2 className="text-pink-600" size={24} /> : <VolumeX className="text-pink-600" size={24} />}
      </button>

      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="floating-balloons"></div>

        <div className="text-center z-10">
          <h1 className="glowing-text text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-slide-up">
            Beautiful Soul 🎉
          </h2>

          <div className="confetti-container absolute inset-0 pointer-events-none"></div>

          <Sparkles className="inline-block text-yellow-300 animate-spin-slow" size={48} />
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <div className="text-white text-sm">Scroll Down</div>
          <div className="text-white text-2xl">↓</div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white text-center mb-16">
            ✨ Precious Moments ✨
          </h2>

          <div className="glass-card p-8 rounded-3xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentPhoto ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover photo-zoom"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-xl md:text-2xl font-semibold">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhoto(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentPhoto ? 'bg-pink-500 w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full text-center">
          <Heart className="inline-block text-pink-500 mb-8 animate-pulse-heart" size={64} />

          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              A Special Message For You 💖
            </h2>

            <div className="text-white text-lg md:text-xl leading-relaxed space-y-4 mb-8">
              <p className="animate-fade-in-up">Happy Birthday to the most amazing girl! 🎂✨</p>
              <p className="animate-fade-in-up animation-delay-200">May your day be filled with love, laughter, and endless happiness.</p>
              <p className="animate-fade-in-up animation-delay-400">You deserve all the success, joy, and beautiful moments in life.</p>
              <p className="animate-fade-in-up animation-delay-600">Keep shining and smiling always. 💖🌸</p>
              <p className="text-2xl md:text-3xl font-bold animate-fade-in-up animation-delay-800">Have a magical birthday!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-16">
            🎁 Special Surprise 🎁
          </h2>

          {!showSurprise ? (
            <button
              onClick={() => setShowSurprise(true)}
              className="surprise-button group"
            >
              <Gift className="inline-block mr-3 group-hover:rotate-12 transition-transform" size={32} />
              Click to Reveal Your Surprise
              <Sparkles className="inline-block ml-3 group-hover:rotate-12 transition-transform" size={24} />
            </button>
          ) : (
            <div className="glass-card p-8 md:p-12 rounded-3xl animate-scale-in">
              <div className="text-white space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">🌟 You Are Special! 🌟</h3>
                <p className="text-xl md:text-2xl leading-relaxed">
                  Today is all about celebrating YOU! Your kindness, your smile, your beautiful spirit -
                  everything that makes you uniquely wonderful. May this year bring you countless reasons
                  to smile, dream big, and achieve everything your heart desires. You light up every room
                  you enter, and the world is brighter because you're in it! 🌈✨
                </p>
                <div className="text-6xl animate-bounce mt-8">🎊🎉🎈</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-16">
            🎂 Make A Wish! 🎂
          </h2>

          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="relative inline-block">
              <Cake className="text-pink-500 cake-icon" size={120} />

              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`candle-flame ${candlesLit ? 'lit' : 'out'}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    🕯️
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={toggleCandles}
              className="mt-12 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:scale-110 transition-transform shadow-lg glow-button"
            >
              {candlesLit ? '💨 Blow Out The Candles' : '🔥 Light The Candles'}
            </button>

            <p className="text-white text-xl mt-8">
              {candlesLit ? 'Close your eyes and make a wish! 🌠' : 'Your wish will come true! ✨'}
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-white">
        <p className="text-lg">Made with 💖 for the most wonderful birthday girl</p>
        <p className="text-sm mt-2 opacity-75">May all your dreams come true!</p>
      </footer>
    </div>
  );
}

export default App;
