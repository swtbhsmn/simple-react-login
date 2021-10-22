import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/configStore';
import './App.css';
import Main from './components/main'
const store = ConfigureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        < Router >
          <Main />
        </Router>
      </Provider>
    </div>
  );
}
export default App;