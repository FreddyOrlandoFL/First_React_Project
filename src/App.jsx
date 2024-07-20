import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic,setSelectedTopic] =useState("components");
  function handleClickMenu(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(`Ey! Estas pulsando un boton de mi menu! ${selectedTopic}`);
  }
  console.log("El componente APP esta siendo renderizado  y ejecutado!")
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
          <TabButton onClick={()=>handleClickMenu("components")}>Componentes</TabButton>
          <TabButton onClick={()=>handleClickMenu("jsx")}>JSX</TabButton>
          <TabButton onClick={()=>handleClickMenu("props")}>Props</TabButton>
          <TabButton onClick={()=>handleClickMenu("state")}>Estados</TabButton>
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      </section>
      <Main/>
    </div>
  );
}

export default App;