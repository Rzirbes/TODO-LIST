"use client";

import styles from '../app/styles/Modal.module.scss'; // Usando o mesmo estilo de modal anterior

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  type: 'add' | 'delete'; // Adicionando o tipo do modal
}

export default function DeleteConfirmModal({ isOpen, onClose, onDelete }: DeleteConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className={styles.actions}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.deleteButton} onClick={onDelete}>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
