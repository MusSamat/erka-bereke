import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './Lang/i18next'

ReactDOM.render(
    <Suspense fallback={(<div>Loading ~~~</div>)}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
);

reportWebVitals();
