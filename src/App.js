import './App.css';
import Grid from './components/Grid/Grid';

function App() {
  // let count=0;
  // let [counter,setCounter]=useState(0);
  // let [todos,setTodos]=useState(['todo1','todo2']);
  // function incrementt(){
  //   count++;
  //   console.log("Value of count is :",count)
  // }

  // function decrementt(){
  //   count--;
  //   console.log("Value of count is :",count)
  // }

  // function increment(){
  //   setCounter(counter+1);
  //   console.log("Value of count is :",counter)
  // }

  // function decrement(){
  //   setCounter(counter-1);
  //   console.log("Value of count is :",counter)
  // }

 
  return (
 <Grid numberOfCards={9}/>
  );
  //   <>
  //  <div>
  //   Count is : {counter} using state variable
  //  </div>
  //  <button onClick={increment}>Inc</button>
  //  <button onClick={decrement}>Dec</button>
  //  <div>
  //   Count is : {count} using normal count
  //  </div>
  //  <button onClick={incrementt}>Inc</button>
  //  <button onClick={decrementt}>Dec</button>



  //  <h1>todos</h1>
  //  {todos.map((value)=> <li>{value}</li>)}

  //  <button onClick={()=>setTodos([...todos,'todo3'])}>Click to push</button>
  //   </>
  
}

export default App;
