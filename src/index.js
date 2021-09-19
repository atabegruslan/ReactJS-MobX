import React from 'react';
import ReactDOM from 'react-dom';
import entriesStore from "./EntriesStore";
import List from "./components/List";

ReactDOM.render(
  <List store={entriesStore} />,
  document.getElementById('root')
);
