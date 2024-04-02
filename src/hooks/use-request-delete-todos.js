import { useState } from 'react';

export const useDeleteTodos = (refrechTod) => {
	const [isDelete, setIsDelete] = useState(false);

	const requestDeleteTodos = () => {
		setIsDelete(true);

		fetch(`http://localhost:3005/Todos/${Number(prompt('Ввести id заметки для удаления'))}`, {
			method: 'DELETE',
		})
			.then((otvet) => otvet.json)
			.then((response) => {
				console.log('Списки обновлены, ответ сервера', response);
				refrechTod();
			})
			.finally(() => setIsDelete(false));
	};

	return {
		isDelete,
		requestDeleteTodos,
	};
};
