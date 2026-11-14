import { useState } from 'react';
import PlanetSelector from './components/PlanetSelector';
import MoonPage from './MoonPage';
import MarsPage from './MarsPage';
import DeepSpacePage from './DeepSpacePage';

export default function App() {
  const [selectedBody, setSelectedBody] = useState('Moon');
  const page = selectedBody === 'Moon' ? <MoonPage /> : selectedBody === 'Mars' ? <MarsPage /> : <DeepSpacePage />;

  return (
    <div className="app-shell">
      <PlanetSelector selectedBody={selectedBody} onSelect={setSelectedBody} />
      <main>{page}</main>
      <footer className="site-footer"><strong>Abandoned, not forgotten</strong><br />Mission facts link to NASA NSSDCA and NASA Science archives. Voice narration is optional and begins only when you select it.</footer>
    </div>
  );
}
