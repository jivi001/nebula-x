import { ArrowUpRight, Bot, CircleDot, Radio, Telescope, Volume2 } from 'lucide-react';

const typeLabels = {
  rover: 'Rover',
  lander: 'Lander',
  'descent-stage': 'Descent stage',
  aircraft: 'Aircraft',
  probe: 'Probe',
  telescope: 'Telescope',
  'science-package': 'Science package',
};

const typeIcons = {
  rover: Bot,
  lander: CircleDot,
  'descent-stage': Radio,
  aircraft: Bot,
  probe: Radio,
  telescope: Telescope,
  'science-package': CircleDot,
};

export default function PlanetGrid({ artifacts, selectedId, onSelect }) {
  return (
    <div className="artifact-grid" aria-live="polite">
      {artifacts.map((artifact) => {
        const Icon = typeIcons[artifact.type] || CircleDot;
        const isSelected = selectedId === artifact.id;
        return (
          <button
            type="button"
            className={`artifact-card ${isSelected ? 'selected' : ''}`}
            key={artifact.id}
            onClick={() => onSelect(artifact.id)}
            aria-pressed={isSelected}
            aria-label={`Read the story of ${artifact.name}`}
          >
            <div className="card-meta">
              <span><Icon size={13} aria-hidden="true" />&nbsp; {typeLabels[artifact.type] || 'Artifact'}</span>
              <span>{new Date(artifact.landingDate).getFullYear()}</span>
            </div>
            <h3>{artifact.name}</h3>
            <p className="mission">{artifact.mission}</p>
            <p className="teaser">{artifact.narrative.split('. ')[0]}.</p>
            <ArrowUpRight className="card-arrow" size={18} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
