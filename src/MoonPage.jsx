import { useMemo, useState } from 'react';
import { getArtifactsByBody, getArtifactById } from './data/artifacts';
import PlanetGrid from './components/PlanetGrid';
import ArtifactDetail from './components/ArtifactDetail';

export default function MoonPage() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const artifacts = useMemo(() => getArtifactsByBody('Moon'), []);
  return <PlanetChapter title="Moon" eyebrow="Chapter 01" description="Since 1966, landers, rovers, and science stations have been left on the lunar surface. Each one helped us understand our nearest neighbor." artifacts={artifacts} selectedArtifact={selectedArtifact} setSelectedArtifact={setSelectedArtifact} />;
}

export function PlanetChapter({ title, eyebrow, description, artifacts, selectedArtifact, setSelectedArtifact }) {
  const artifact = selectedArtifact ? getArtifactById(selectedArtifact) : null;
  return (
    <section className="selector-wrap" aria-labelledby={`${title}-heading`}>
      <div className="selector-heading">
        <div><p className="hero-kicker">{eyebrow}</p><h2 id={`${title}-heading`}>{title}</h2></div>
        <p>{description}</p>
      </div>
      <div className="artifact-layout">
        <PlanetGrid artifacts={artifacts} selectedId={selectedArtifact} onSelect={setSelectedArtifact} />
        {artifact ? <ArtifactDetail artifact={artifact} onClose={() => setSelectedArtifact(null)} /> : <div className="empty-state"><h3>Pick an explorer</h3><p>Select a card to read its story and hear its mission narrated.</p></div>}
      </div>
    </section>
  );
}
