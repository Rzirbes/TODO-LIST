"use client";

import { useState } from 'react';
import styles from '../app/styles/Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (taskTitle?: string) => void;
  type: 'add' | 'delete'; // Tipo de modal: 'add' para adicionar e 'delete' para deletar
}

export default function Modal({ isOpen, onClose, onConfirm, type }: ModalProps) {
  const [taskTitle, setTaskTitle] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (type === 'add') {
      if (taskTitle.trim()) {
        onConfirm(taskTitle);
        setTaskTitle("");
        onClose();
      }
    } else {
      onConfirm(); // Para delete, apenas confirma a ação
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>{type === 'add' ? 'Nova tarefa' : 'Deletar tarefa'}</h2>
        {type === 'add' && (
          <div className={styles.inputGroup}>
            <label htmlFor="taskTitle">Título</label>
            <input
              id="taskTitle"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Digite"
            />
          </div>
        )}
        {type === 'delete' && <p>Tem certeza que você deseja deletar essa tarefa?</p>}
        
        <div className={styles.actions}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          <button
            className={type === 'add' ? styles.addButton : styles.deleteButton}
            onClick={handleConfirm}
          >
            {type === 'add' ? 'Adicionar' : 'Deletar'}
          </button>
        </div>
      </div>
    </div>
  );
}
