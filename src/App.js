import './App.css';
import { Provider } from 'react-redux';
import  AddTodo  from './Components/AddTodo'
import TodoList from './Components/TodoList';
import { store } from './Redux/store';

function App() {
  return (
   <>
   <Provider store={store}>
    <AddTodo />
    <TodoList/>
   </Provider>
   </>
  );
}

export default App;
