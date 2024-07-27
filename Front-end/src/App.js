import { Routes, Route } from "react-router-dom";
import { SkillIndex } from "./components/skills/SkillIndex";
import { SkillCreate } from "./components/skills/SkillCreate";
import { SkillEdit } from "./components/skills/SkillEdit";
import { SkillProvider } from "./components/Context/SkillContext";
import { Home } from "./components/Home";
import { NotFound404 } from "./components/NotFound404";

function App() {
  return (
    <SkillProvider>
      <div className="bg-indigo-100 dark:bg-black font-Urbanist">
        <div className="max-w-7xl mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillIndex />} />
            <Route path="/skills/create" element={<SkillCreate />} />
            <Route path="/skills/:id/edit" element={<SkillEdit />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      </div>
    </SkillProvider>
  );
}

export default App;
