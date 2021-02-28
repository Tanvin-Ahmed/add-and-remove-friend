import './App.css';
import PeopleList from './components/PeopleList/PeopleList';

function App() {
  return (
    <div className="App">
      <div className="header p-3 bg-primary text-light">
        <h1 className="text-center">Find Your Friend</h1>
      </div>
      <div className="main container-fluid">
          <div className="show-list">
              <PeopleList></PeopleList>
          </div>
          <div className="add-list">

          </div>
      </div>
    </div>
  );
}

export default App;
