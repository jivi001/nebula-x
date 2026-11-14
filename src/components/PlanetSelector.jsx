import { useState } from 'react';
import { ArrowRight, Moon, Radio, Rocket, Telescope, Volume2 } from 'lucide-react';

const planets = [
  { id: 'Moon', label: 'The Moon', icon: Moon, count: 9, note: 'Apollo, Surveyor, and Soviet explorers' },
  { id: 'Mars', label: 'Mars', icon: Rocket, count: 8, note: 'Landers, rovers, and one helicopter' },
  { id: 'Deep Space', label: 'Deep space', icon: Telescope, count: 6, note: 'The travelers still moving outward' },
];

export default function PlanetSelector({ selectedBody, onSelect }) {
  const [isNarrating, setIsNarrating] = useState(false);

  const handleIntroNarration = () => {
    if (!('speechSynthesis' in window)) return;
    const synth = window.speechSynthesis;
    if (isNarrating) {
      synth.cancel();
      setIsNarrating(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance('Abandoned, not forgotten. Meet the machines that made discoveries on the Moon, Mars, and beyond.');
    utterance.rate = 0.9;
    utterance.onend = () => setIsNarrating(false);
    synth.speak(utterance);
    setIsNarrating(true);
  };

  return (
    <header className="explorer">
      <div className="hero">
        <div className="hero-copy">
          <div className="hero-kicker"><Radio size={14} aria-hidden="true" /> NASA Space Apps Challenge</div>
          <h1>They went farther than we could.<br /><em>They stayed.</em></h1>
          <p className="hero-lede">Meet the machines that made history on the Moon, Mars, and beyond. Their missions ended. Their discoveries did not.</p>
          <div className="hero-note">
            <Volume2 size={16} aria-hidden="true" />
            <span>Every story is readable and ready to hear.</span>
            <button type="button" className="sr-only" onClick={handleIntroNarration} aria-label={isNarrating ? 'Stop introduction narration' : 'Play introduction narration'}>{isNarrating ? 'Stop' : 'Play'}</button>
          </div>
        </div>

        <div className="orbit-visual" aria-label="Illustration of the Moon with an explorer marker">
          <div className="orbit-ring" aria-hidden="true" />
          <div className="orbit-glow" aria-hidden="true" />
          <div className="orbit-marker" aria-hidden="true" />
          <div className="orbit-label"><strong>Quiet surface</strong>Still collecting clues</div>
        </div>
      </div>

      <div className="selector-wrap">
        <div className="selector-heading">
          <h2>Choose a chapter</h2>
          <p>Start close to home, follow the red dust, or go where the signal gets faint.</p>
        </div>
        <nav className="planet-tabs" aria-label="Choose a destination">
          {planets.map(({ id, label, icon: Icon, count, note }) => (
            <button
              type="button"
              key={id}
              className={`planet-tab ${selectedBody === id ? 'active' : ''}`}
              onClick={() => onSelect(id)}
              aria-pressed={selectedBody === id}
              title={`${note}. ${count} artifacts.`}
            >
              <Icon size={17} aria-hidden="true" />
              <span>{label}</span>
              <span aria-hidden="true">{count}</span>
            </button>
          ))}
        </nav>
        <p className="sr-only">{isNarrating ? 'Introduction narration is playing.' : ''}</p>
      </div>
    </header>
  );
}
