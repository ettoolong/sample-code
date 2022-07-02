import TabContainer from './components/TabContainer';
import './App.css'

const tabs = [
  { name: 'tab1', content: 'tab 1 content' },
  { name: 'tab2', content: 'tab 2 content' },
  { name: 'tab3', content: 'tab 3 content' },
  { name: 'tab4', content: 'tab 4 content' },
]

function App() {
  return (
    <div className="App">
      <TabContainer tabs={tabs} />
    </div>
  );
}

export default App;
