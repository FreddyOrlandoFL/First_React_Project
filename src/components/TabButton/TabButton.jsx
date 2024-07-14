import './TabButton.css'
export default function TabButton({children,label}){
  /*si funcion se llama el props TabButton(props) => {props.children} pero puedo enviarlo directo*/ 
  /*si funcion se llama la propiedad directamente TabButton({children}) => {children} pero puedo enviarlo directo
    si en el html se usa asi se llama children 
     <TabButton>Componentes</TabButton>
  */ 
  function handleClick(){
    console.log("Ey! Estas pulsando sobre uno de los botones del menu!");
  } 
  return(
    <li>
        <button onClick={handleClick} label={label}>{children}</button>
    </li>
  );   
}