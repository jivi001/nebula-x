import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Pause, Play, Volume2, X } from 'lucide-react';

const typeLabels = {
  rover: 'Rover', lander: 'Lander', 'descent-stage': 'Descent stage', aircraft: 'Aircraft',
  probe: 'Probe', telescope: 'Telescope', 'science-package': 'Science package',
};

export default function ArtifactDetail({ artifact, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechAvailable, setSpeechAvailable] = useState(true);
  const spokenText = useMemo(() => `${artifact.name}. ${artifact.mission}. ${artifact.narrative} What we learned: ${artifact.facts.join('. ')}`, [artifact]);

  useEffect(() => {
    setSpeechAvailable('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window);
    window.speechSynthesis?.cancel();
    setIsPlaying(false);
    return () => window.speechSynthesis?.cancel();
  }, [artifact]);

  const toggleNarration = () => {
    if (!speechAvailable) return;
    const synth = window.speechSynthesis;
    if (isPlaying) {
      synth.pause();
      setIsPlaying(false);
      return;
    }
    if (synth.paused) {
      synth.resume();
      setIsPlaying(true);
      return;
    }
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(spokenText);
    utterance.lang = 'en-US';
    utterance.rate = .88;
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    synth.speak(utterance);
    setIsPlaying(true);
  };

  const stopNarration = () => {
    window.speechSynthesis?.cancel();
    setIsPlaying(false);
  };

  return (
    <aside className="detail-panel" aria-label={`${artifact.name} story`}>
      <button type="button" className="detail-close" onClick={() => { stopNarration(); onClose(); }} aria-label="Close story"><X size={19} /></button>
      <div className="detail-type">{typeLabels[artifact.type] || 'Artifact'} / {artifact.body}</div>
      <h3>{artifact.name}</h3>
      <p className="detail-mission">{artifact.mission}</p>

      <div className="story">
        <p className="story-label">The mission, in its own words</p>
        <p>{artifact.narrative}</p>
      </div>

      <ul className="facts">
        {artifact.facts.slice(0, 4).map((fact) => <li key={fact}>{fact}</li>)}
      </ul>

      {speechAvailable ? (
        <button type="button" className={`narrate ${isPlaying ? 'is-playing' : ''}`} onClick={toggleNarration} aria-pressed={isPlaying}>
          {isPlaying ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
          {isPlaying ? 'Pause narration' : 'Hear this story'}
        </button>
      ) : <p className="source">Voice narration is not supported in this browser. The full story is always available to read.</p>}

      <a className="source" href={artifact.sourceUrl} target="_blank" rel="noreferrer">Read NASA source <ArrowUpRight size={12} aria-hidden="true" /></a>
    </aside>
  );
}
