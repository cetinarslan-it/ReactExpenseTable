import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: '€20',
      date: new Date(2022, 0, 0),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: '€500', 
      date: new Date(2022, 1, 1) },
    {
      id: 'e3',
      title: 'Car Inspection',
      amount: '€50',
      date: new Date(2022, 2, 2),
    },
    {
      id: 'e4',
      title: 'New Laptop',
      amount: '€1000',
      date: new Date(2022, 3, 3),
    },
  ];
  return (
    <div>
      <h2>Cetin ARSLAN's Expense Table</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
