import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../features/home/pages/Home';
import Works from '../features/works/pages/Works';
import CurriculumVitae from '../features/curriculumVitae/pages/CurriculumVitae';

export default function MainRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Works />} />
        <Route path="/" element={<CurriculumVitae />} />
      </Routes>
    </main>
  );
}
