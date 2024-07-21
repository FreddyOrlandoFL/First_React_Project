import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleClickMenu(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(`Ey! Estas pulsando el botón ${selectedTopic}`);
  }
  console.log("El componente App esta siendo renderizado y ejecutado!!");

  let tabContent = (
    <p>
      Aquí se va a mostrar información sobre una característica de React, para
      ello elige una opción del menú
    </p>
  );

  
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <section id="coreConcepts">
      <h2>Principales Características</h2>
        <div>
          {CORE_CONCEPTS.map((conceptItem, index)=> 
            <CoreConcepts key={index} {...conceptItem} />
          )}
        </div>
      </section>
      <section id="reactExamples">
        <h2>Ejemplos React</h2>
        <menu>
          <TabButton  isSelected={selectedTopic === 'components'} onClick={() => handleClickMenu("components")}>
            Componentes
          </TabButton>
          <TabButton  isSelected={selectedTopic === 'jsx'} onClick={() => handleClickMenu("jsx")}>JSX</TabButton>
          <TabButton  isSelected={selectedTopic === 'props'} onClick={() => handleClickMenu("props")}>Props</TabButton>
          <TabButton  isSelected={selectedTopic === 'state'} onClick={() => handleClickMenu("state")}>
            Estados
          </TabButton>
        </menu>
        {tabContent}
      </section>
      <Main/>
    </div>
  );
}

export default App;