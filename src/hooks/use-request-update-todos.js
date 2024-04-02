import { useState } from 'react';

export const useUpdateTodos = (refrechTod) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodos = () => {
		setIsUpdating(true);

		fetch(`http://localhost:3005/Todos/${Number(prompt('Ввести id заметки'))}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				// title: 'Lorem ipsum dolor sit.',
				title: prompt('Изменить заметку'),
			}),
		})
			.then((otvet) => otvet.json)
			.then((response) => {
				console.log('Списки обновлены, ответ сервера', response);
				refrechTod();
			})
			.finally(() => setIsUpdating(false));
	};

	return {
		isUpdating,
		requestUpdateTodos,
	};
};
