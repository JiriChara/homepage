import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../features/home/pages/Home';
import Works from '../features/works/pages/Works';
import CurriculumVitae from '../features/curriculumVitae/pages/CurriculumVitae';

export default function MainRoutes() {
  return (
    <main className="grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/cv" element={<CurriculumVitae />} />
      </Routes>
    </main>
  );
}
