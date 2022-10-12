import React, {useState} from 'react';
import TareaForm from './TareaForm';
import Tarea from './Tarea';

//create your first component
const Home = () => {

	const [listaTareas, setListaTareas] = useState([]);

	const nuevaTarea = (tarea) =>{
	  setListaTareas([tarea, ...listaTareas]);
	}
  
	const borrar = (id) =>{
	  const listaFiltrada = listaTareas.filter((e, index) => index !== id );
	  setListaTareas(listaFiltrada);
	}
  
	return (
	  <div>
		<p className="titulo" >todos</p>
		<div className="marco">
		  <TareaForm
			nuevaTarea={nuevaTarea}
		  />
  
		  <div>
			{
			  listaTareas.map((e, index) => <Tarea 
									  tarea={e} 
									  borrar={borrar}
									  id={index}
								  />
							)
			}
		  </div>
  {
	listaTareas.length > 0?
	<div className="total">{listaTareas.length} item left</div>
	:<div className="total">No hay tareas, añadir tareas</div>
  }
		  {/* <div className="total">{listaTareas.length} item left</div> */}
		  {/* <div className="pos1"></div>
		  <div className="pos2"></div> */}
		  {/* <div>
		  <div className="padre">
			<div className="hijo"></div>
		  </div>
		  </div> */}
		</div>
	  </div>
	);
 };

export default Home;
