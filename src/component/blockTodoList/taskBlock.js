import { useContext } from 'react';
import style from './taskBlock.module.css';
import { AppContext } from '../../context';

export const TaskBlock = ({ isLoading, poisc }) => {
	const dannie = useContext(AppContext);
	const { newTodo } = dannie;

	return (
		<div className={style.block}>
			<h3 className={style.zagalovok}>Todo list</h3>
			<input onChange={({ target: { value } }) => poisc(value)} type="text" className={style.poisc} placeholder="Поиск..." />
			{isLoading ? (
				<div className={style.loader}></div>
			) : (
				newTodo.map(({ id, title }) => (
					<div className={style.todos} key={id}>
						{title}
					</div>
				))
			)}
		</div>
	);
};
