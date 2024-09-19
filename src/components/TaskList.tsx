"use client";

import { useState } from 'react';
import styles from '../app/styles/TaskList.module.scss';
import Task from './Task';
import Modal from './Modal';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const initialTasks: Task[] = [
    { id: 1, text: 'Lavar as mãos', completed: false },
    { id: 2, text: 'Fazer um bolo', completed: false },
    { id: 3, text: 'Lavar a louça', completed: false },
    { id: 4, text: 'Lavar a louça', completed: false },
    { id: 5, text: 'Lavar a louça', completed: false },
    { id: 6, text: 'Levar o lixo para fora', completed: true },
];

export default function TaskList() {
    const [tasks, setTasks] = useState(initialTasks);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

    const toggleTaskCompletion = (id: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };


    const deleteTask = (id: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const confirmDelete = () => {
        if (taskToDelete !== null) {
            deleteTask(taskToDelete);
            setTaskToDelete(null);
            setIsDeleteModalOpen(false);
        }
    };
    const handleDeleteTask = (id: number) => {
        setTaskToDelete(id);
        setIsDeleteModalOpen(true);
    };

    return (
        <div className={`${styles.taskList} p-8`}>
            <section className='flex flex-col gap-2 items-center justify-center '>
                <h2 className={`${styles.heading} text-zinc-400`}>Suas tarefas de hoje</h2>
                {tasks.filter(task => !task.completed).map(task => (
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        onToggleCompletion={toggleTaskCompletion}
                        onDelete={() => handleDeleteTask(task.id)}

                    />
                ))}
            </section>

            <section className='flex flex-col gap-2 items-center justify-center '>
                <h2 className='text-zinc-400'>Tarefas finalizadas</h2>
                {tasks.filter(task => task.completed).map(task => (
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        onToggleCompletion={toggleTaskCompletion}
                        onDelete={() => handleDeleteTask(task.id)}
                    />
                ))}
            </section>

            <button className={styles.addTask} onClick={() => setIsModalOpen(true)}>Adicionar nova tarefa</button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={(taskTitle?: string) => {
                    if (taskTitle) { // Garante que taskTitle existe antes de usá-lo
                        const newTask = { id: tasks.length + 1, text: taskTitle, completed: false };
                        setTasks((prevTasks) => [...prevTasks, newTask]);
                    }
                }}
                type="add" // Tipo de modal para adicionar tarefa
            />

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete} // Função para confirmar a deleção
                type="delete" // Tipo de modal para deletar tarefa
            />
        </div>
    );
}
