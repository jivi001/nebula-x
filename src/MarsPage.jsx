import { useMemo, useState } from 'react';
import { getArtifactsByBody, getArtifactById } from './data/artifacts';
import PlanetGrid from './components/PlanetGrid';
import ArtifactDetail from './components/ArtifactDetail';

export default function MarsPage() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const artifacts = useMemo(() => getArtifactsByBody('Mars'), []);
  const artifact = selectedArtifact ? getArtifactById(selectedArtifact) : null;
  return (
    <section className="selector-wrap" aria-labelledby="mars-heading">
      <div className="selector-heading"><div><p className="hero-kicker">Chapter 02</p><h2 id="mars-heading">Mars</h2></div><p>From Viking in 1976 to Ingenuity in 2024, Mars holds more robotic explorers than any other planet.</p></div>
      <div className="artifact-layout"><PlanetGrid artifacts={artifacts} selectedId={selectedArtifact} onSelect={setSelectedArtifact} />{artifact ? <ArtifactDetail artifact={artifact} onClose={() => setSelectedArtifact(null)} /> : <div className="empty-state"><h3>Pick an explorer</h3><p>Select a card to read its story and hear its mission narrated.</p></div>}</div>
    </section>
  );
}
