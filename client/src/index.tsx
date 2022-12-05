import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
