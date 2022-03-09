
import './App.css';
//  * Redux
import { bindActionCreators } from 'redux';
// * React Redux
import { useDispatch, useSelector } from 'react-redux';
// * Out action creators
import { myActions } from "./state/index";




function App() {
  const account = useSelector((state) => state.banker)
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(myActions, dispatch)



  console.log(account);


  return (
    <div className="App">
      <header className="App-header">
        <h1>{account}</h1>
        <button onClick={(dispatch) => depositMoney(1000)}>Deposit</button>
        <button onClick={(dispatch) => withdrawMoney(1000)}>Withdraw</button>
      </header>
    </div>
  );
}

export default App;
