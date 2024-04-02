import { useState } from 'react';

export const useAddTodo = (refrechTod) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTodos = () => {
		setIsCreating(true);

		fetch('http://localhost:3005/Todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				// title: 'Lorem ipsum dolor sit.',
				title: prompt('Введите новые дела'),
			}),
		})
			.then((otvet) => otvet.json)
			.then((response) => {
				console.log('Новый список добавлен, ответ сервера', response);
				refrechTod();
			})
			.finally(() => setIsCreating(false));
	};
	return {
		isCreating,
		requestAddTodos,
	};
};
