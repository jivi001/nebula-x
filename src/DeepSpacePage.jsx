import { useMemo, useState } from 'react';
import { artifacts, getArtifactById } from './data/artifacts';
import PlanetGrid from './components/PlanetGrid';
import ArtifactDetail from './components/ArtifactDetail';

export default function DeepSpacePage() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const deepArtifacts = useMemo(() => artifacts.filter(({ body }) => !['Moon', 'Mars'].includes(body)), []);
  const artifact = selectedArtifact ? getArtifactById(selectedArtifact) : null;
  return (
    <section className="selector-wrap" aria-labelledby="deep-heading">
      <div className="selector-heading"><div><p className="hero-kicker">Chapter 03</p><h2 id="deep-heading">Deep space</h2></div><p>Beyond the planets, humanity’s farthest travelers drift silently outward. Some carry messages for anyone who finds them.</p></div>
      <div className="artifact-layout"><PlanetGrid artifacts={deepArtifacts} selectedId={selectedArtifact} onSelect={setSelectedArtifact} />{artifact ? <ArtifactDetail artifact={artifact} onClose={() => setSelectedArtifact(null)} /> : <div className="empty-state"><h3>Pick an explorer</h3><p>Select a card to read its story and hear its mission narrated.</p></div>}</div>
    </section>
  );
}
