import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Lunch with boss',
        completed: false
      },
      {
        id: 3,
        title: 'Pay Bills',
        completed: false
      }
    ]
  };

  render() {
    // console.log(this.state.todos);
    return (
        <div className="App">
          <Todos todos={this.state.todos}/>
        </div>
    );
  }
}

export default App;

// import React, { useState } from 'react';
// import Todos from './components/Todos'
// import './App.css';
//
// function App() {
//
//  const state = useState({
//     todos: [
//       {
//         id: 1,
//         title: 'Take out the trash',
//         completed: false
//       },
//       {
//         id: 2,
//         title: 'Lunch with boss',
//         completed: false
//       },
//       {
//         id: 3,
//         title: 'Pay Bills',
//         completed: false
//       }
//     ]
//   })
//
//   console.log(this.state.todos)
//   return (
//     <div className="App">
//       <Todos/>
//     </div>
//   );
// }
//
// export default App;
