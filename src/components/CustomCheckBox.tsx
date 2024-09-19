"use client";

import styles from '../app/styles/CustomCheckBox.module.scss';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export default function CustomCheckbox({ checked, onChange }: CustomCheckboxProps) {
  return (
    <label className={styles.customCheckbox}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.checkmark}></span>
    </label>
  );
}
