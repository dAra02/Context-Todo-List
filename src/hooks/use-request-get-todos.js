import { useEffect, useState } from 'react';

export const useGetTodos = (refrechTodos) => {
	const [todo, setTodo] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3005/Todos', {
			method: 'GET',
		})
			.then((dannie) => dannie.json())
			.then((todos) => {
				setTodo(todos);
			})
			.finally(() => setIsLoading(false));
	}, [refrechTodos]);

	return {
		todo,
		isLoading,
	};
};
