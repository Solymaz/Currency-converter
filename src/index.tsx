import * as React from 'react';
import { render } from 'react-dom';
import CurrencyConverter from './converter/converter'

const App: React.FC = () => <CurrencyConverter />

render(<App />, document.getElementById('app'));
