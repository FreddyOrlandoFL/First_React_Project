import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
  return (
    <div>
      <Header/>
      <section id="coreConcepts">
      <h2>Principales Características</h2>
        <div>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts imagePath={CORE_CONCEPTS[3].imagePath}  title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/>
        </div>
      </section>
      <section id="reactExamples">
        <h2>Ejemplos React</h2>
        <menu>
          <TabButton label="atributo">Componentes</TabButton>
        </menu>
      </section>
      <Main/>
    </div>
  );
}

export default App;