import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";


function App() {
	const [selectedCategory, setSelectedCategory] = useState("")
	const [expenses, setExpenses] = useState([
		{id:1,description:"aa",amount:10, category:'Groceries'},
		{id:2,description:"aa",amount:20, category:'Utilities'},
		{id:3,description:"aa",amount:30, category:'Utilities'},
		{id:4,description:"aa",amount:15, category:'Entertainment'},
	])
	const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses
	
	const onDelete = (id:number) => {
   setExpenses(expenses.filter(item=>item.id !==id))
	 }
	return (
		<>
			<div className='mb-3'>

				<ExpenseForm onSubmit={(data) => setExpenses([
					...expenses, {...data, id:expenses.length+1}
				])} />
			</div>
					<div className='mb-3'>

			<ExpenseFilter onSelectCategory={(category)=>setSelectedCategory(category) } />
			</div>
						<div className='mb-3'>

			<ExpenseList expenses={visibleExpenses}
				onDelete={onDelete} />
				</div>
		</>
	);
}

export default App;

