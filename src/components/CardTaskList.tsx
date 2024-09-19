import TaskList from "./TaskList";
import styles from '../app/styles/CardTaskList.module.scss';

export default function CardTaskList() {
    return (
        <div className={`${styles.card}`}>
            <TaskList/>
        </div>
    )
}