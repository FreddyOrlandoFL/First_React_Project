/*si funcion se llama el props TabButton(props) => {props.children} pero puedo enviarlo directo 
  si funcion se llama la propiedad directamente TabButton({children}) => {children} pero puedo enviarlo directo
    si en el html se usa asi se llama children 
     <TabButton>Componentes</TabButton>
*/ 
import './TabButton.css';
export default function TabButton({children, onClick}) {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}