import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopic,setSelectedTopic] =useState("Por favor. pule un boton del menu");
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
          <TabButton onClick={()=>handleClickMenu("Componentes")}>Componentes</TabButton>
          <TabButton onClick={()=>handleClickMenu("JSX")}>JSX</TabButton>
          <TabButton onClick={()=>handleClickMenu("Props")}>Props</TabButton>
          <TabButton onClick={()=>handleClickMenu("Estados")}>Estados</TabButton>
        </menu>
        {selectedTopic}
      </section>
      <Main/>
    </div>
  );
}

export default App;