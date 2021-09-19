import React from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const appState = observable({
  count: 0,
  incCount: () => {
    appState.count += 1;
  },
  decCount: () => {
    appState.count -= 1;
  }
});

// const Counter = observer(props => (
//   <section>
//     {props.appState.count}
//     <div>
//       <button onClick={props.appState.incCount}>Inc</button>
//       <button onClick={props.appState.decCount}>Dec</button>
//     </div>
//   </section>
// ));

@observer
class Counter extends React.Component {
  render() {
    return (
      <section>
        {this.props.appState.count}
        <div>
          <button onClick={this.props.appState.incCount}>Inc</button>
          <button onClick={this.props.appState.decCount}>Dec</button>
        </div>
      </section>
    )
  }
}


ReactDOM.render(
  <Counter appState={appState} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
