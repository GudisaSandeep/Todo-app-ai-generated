
import React from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className={styles.deleteButton}>X</button>
    </li>
  );
}

export default TodoItem;
