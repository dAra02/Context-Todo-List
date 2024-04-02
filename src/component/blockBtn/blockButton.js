import { useContext } from 'react';
import style from './blockButton.module.css';
import { AppContext } from '../../context';

export const BlockBtn = () => {
	const dannie = useContext(AppContext);
	const { isCreating, isUpdating, isDelete, requestAddTodos, requestDeleteTodos, requestUpdateTodos } = dannie;

	return (
		<div className={style.blockButton}>
			<button disabled={isCreating} onClick={requestAddTodos}>
				Добавить новый список
			</button>
			<button disabled={isUpdating} onClick={requestUpdateTodos}>
				Обновить список
			</button>
			<button disabled={isDelete} onClick={requestDeleteTodos}>
				Удалить список
			</button>
		</div>
	);
};
