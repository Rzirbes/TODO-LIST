import { FiTrash } from "react-icons/fi";
import styles from '../app/styles/TaskList.module.scss';
import CustomCheckbox from './CustomCheckBox';

interface TaskProps {
    id: number;
    text: string;
    completed: boolean;
    onToggleCompletion: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function Task({ id, text, completed, onToggleCompletion, onDelete }: TaskProps) {
    return (
        <div className={`${styles.task} flex justify-between items-center`}>
            <div className='flex items-center gap-3'>
                <CustomCheckbox checked={completed} onChange={() => onToggleCompletion(id)} />
                {/* Verifica se a tarefa está concluída e aplica o estilo riscado */}
                <span className={`${completed ? styles.completedText : styles.text}`}>{text}</span>
            </div>
            <button onClick={() => onDelete(id)}>
                <FiTrash className="text-zinc-400 h-6 w-6" /> {/* 24px = 6rem */}
            </button>
        </div>
    );
}
