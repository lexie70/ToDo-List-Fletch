import React ,{useState,useEffect} from "react";



//create your first component
const Home = () => {
	const [todo,setTodo]= useState("")
	const [list,setList]= useState([])
	

	const getToDo = ()=>{
		fetch('https://assets.breatheco.de/apis/fake/todos/user/alexandra',{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
  		.then(response => response.json())
  		.then(data => setList([...list, data[0].label]))
	}

	useEffect(() =>{
		getToDo()
	},[])
	
	useEffect(() =>{
		fetch('https://assets.breatheco.de/apis/fake/todos/user/alexandra', 
		{
			method: "PUT",
			body: JSON.stringify(list),
			headers: {
			  "Content-Type": "application/json"
			}}
			)
		  .then(resp => {
			  console.log(resp.ok); // will be true if the response is successfull
			  console.log(resp.status); // the status code = 200 or code = 400 etc.
			  console.log(resp.text()); // will try return the exact result as string
			  return resp.json(); // (returns all promise) will try to parse the result as json as return a promise that you can .then for results
		  })
		  .then(data => {
			  //here is were your code should start after the fetch finishes
			  console.log(data); //this will print on the console the exact object received from the server
		  })
		  .catch(error => {
			  //error handling
			  console.log(error);
		  });
	},[list])



	
	// preventDefault ignora comportamiento de etiquetas predeterminadas
	function submit(e){
     e.preventDefault()
	 if (todo === "") {
		alert("add a task")
		
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
				
				

	