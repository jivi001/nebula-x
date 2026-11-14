import { useState } from 'react';
import { ArrowRight, Moon, Radio, Rocket, Telescope, Volume2 } from 'lucide-react';

const planets = [
  { id: 'Moon', label: 'The Moon', icon: Moon, count: 9, note: 'Apollo, Surveyor, and Soviet explorers' },
  { id: 'Mars', label: 'Mars', icon: Rocket, count: 8, note: 'Landers, rovers, and one helicopter' },
  { id: 'Deep Space', label: 'Deep space', icon: Telescope, count: 6, note: 'The travelers still moving outward' },
];

const solarBodies = [
  { id: 'Sun', label: 'Sun', type: 'star', description: 'The anchor of our planetary system.' },
  { id: 'Earth', label: 'Earth', type: 'earth', description: 'Home base, with one natural satellite.', chapter: 'Moon' },
  { id: 'Moon', label: 'Moon', type: 'moon', description: 'Our nearest neighbor and the first world we explored.', chapter: 'Moon' },
  { id: 'Mars', label: 'Mars', type: 'mars', description: 'The red planet, one step beyond Earth.', chapter: 'Mars' },
];

export default function PlanetSelector({ selectedBody, onSelect }) {
  const [isNarrating, setIsNarrating] = useState(false);
  const [selectedObject, setSelectedObject] = useState(selectedBody === 'Mars' ? 'Mars' : 'Moon');

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

  const handleBodySelect = (body) => {
    setSelectedObject(body.id);
    if (body.chapter) onSelect(body.chapter);
  };

  const selected = solarBodies.find((body) => body.id === selectedObject) || solarBodies[2];

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

      <section className="solar-system" aria-labelledby="solar-system-heading">
        <div className="solar-system-heading">
          <div>
            <p className="hero-kicker">Interactive map</p>
            <h2 id="solar-system-heading">Choose a world</h2>
          </div>
          <p>Drag your attention outward: the Moon circles Earth, Earth circles the Sun, and Mars waits next door.</p>
        </div>
        <div className="solar-stage">
          <div className="solar-orbit solar-orbit-earth" aria-hidden="true" />
          <div className="solar-orbit solar-orbit-mars" aria-hidden="true" />
          <button type="button" className={`celestial-body body-sun ${selectedObject === 'Sun' ? 'selected' : ''}`} onClick={() => handleBodySelect(solarBodies[0])} aria-label="Select the Sun" aria-pressed={selectedObject === 'Sun'}><span /></button>
          <button type="button" className={`celestial-body body-earth ${selectedObject === 'Earth' ? 'selected' : ''}`} onClick={() => handleBodySelect(solarBodies[1])} aria-label="Select Earth" aria-pressed={selectedObject === 'Earth'}><span /></button>
          <div className="moon-orbit"><button type="button" className={`celestial-body body-moon ${selectedObject === 'Moon' ? 'selected' : ''}`} onClick={() => handleBodySelect(solarBodies[2])} aria-label="Select the Moon" aria-pressed={selectedObject === 'Moon'}><span /></button></div>
          <button type="button" className={`celestial-body body-mars ${selectedObject === 'Mars' ? 'selected' : ''}`} onClick={() => handleBodySelect(solarBodies[3])} aria-label="Select Mars" aria-pressed={selectedObject === 'Mars'}><span /></button>
          <div className="body-label label-sun">Sun</div>
          <div className="body-label label-earth">Earth</div>
          <div className="body-label label-moon">Moon</div>
          <div className="body-label label-mars">Mars</div>
        </div>
        <div className="solar-selection" aria-live="polite">
          <span className={`selection-dot dot-${selected.type}`} aria-hidden="true" />
          <div><strong>{selected.label}</strong><span>{selected.description}</span></div>
          <span className="selection-hint">Select a body to explore</span>
        </div>
      </section>

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
              onClick={() => { setSelectedObject(id === 'Mars' ? 'Mars' : 'Moon'); onSelect(id); }}
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
