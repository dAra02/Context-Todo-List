import { useEffect, useState } from 'react';
import { useGetTodos, useAddTodo, useUpdateTodos, useDeleteTodos } from './hooks';
import { BlockBtn, SotrBtn, TaskBlock } from './component';
import './App.css';
import { AppContext } from './context';

export const App = () => {
	const [refrechTodos, setRefrechTodos] = useState(false);

	const refrechTod = () => setRefrechTodos(!refrechTodos);

	const { todo, isLoading } = useGetTodos(refrechTodos);
	const [newTodo, setNewTodo] = useState([]);

	const { isCreating, requestAddTodos } = useAddTodo(refrechTod);
	const { isUpdating, requestUpdateTodos } = useUpdateTodos(refrechTod);
	const { isDelete, requestDeleteTodos } = useDeleteTodos(refrechTod);

	useEffect(() => {
		setNewTodo(todo);
	}, [todo]);

	const poisc = (value) => {
		let currentTodos = [],
			newList = [];
		if (value !== '') {
			currentTodos = todo;

			newList = currentTodos.filter((todo) => {
				const element = todo.title.toLowerCase();
				const filter = value.toLowerCase();

				return element.includes(filter);
			});
		} else {
			newList = todo;
		}
		setNewTodo(newList);
	};

	const sort = () => {
		const sortedTodos = newTodo.sort((a, b) => {
			if (a.title.toLowerCase() < b.title.toLowerCase()) {
				return -1;
			}
			if (a.title.toLowerCase() > b.title.toLowerCase()) {
				return 1;
			}
			return 0;
		});
		setNewTodo(sortedTodos);
		console.log(sortedTodos);
	};

	const dannie = { newTodo, isCreating, isUpdating, isDelete, requestAddTodos, requestUpdateTodos, requestDeleteTodos };

	return (
		<>
			<SotrBtn sort={sort} />
			<AppContext.Provider value={dannie}>
				<TaskBlock isLoading={isLoading} poisc={poisc} />
				<BlockBtn />
			</AppContext.Provider>
		</>
	);
};
