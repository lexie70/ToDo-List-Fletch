import React ,{useState,useEffect} from "react";



//create your first component
const Home = () => {
	const [todo,setTodo]= useState("")
	const [list,setList]= useState([])
// preventDefault ignora comportamiento de etiquetas predeterminadas

	function submit(e){
     e.preventDefault()
	 if (todo === "") {
		alert("add")
		
	 }else{
		setList([...list, todo]);
		setTodo("");
	 }
	}
	function equis(num){
		let newList= list.filter((item,i)=> {if (num !== i ) {
			return item}
		})
		setList (newList)
	}
	
	return (
		<div>
			<h1 className="d-flex justify-content-center">todos</h1>
			<div className="mb-3 tex ">
				{/*  input */}
				<input className="form-control " placeholder="What needs to be done?" value={todo}  onChange={(e)=> setTodo (e.target.value)}/>
			</div>
			<div className="d-flex justify-content-center">
				<button type="submit" className="btn btn-primary " onClick={submit}>Submit</button>
			</div>
			{/* div contiene funcion map que hace que se muestre la lista del array que el usuario introduce */}
			<div className="container text-center">
				{list.map((item,index)=>(
					<li className="mb-2" key={index}>{item}<span onClick={()=> equis(index)} className="ms-5 bg-secondary p-1 hover">X</span></li>	
					))}
			</div>
		</div>   
	);
};
			
export default Home;
				
				

	