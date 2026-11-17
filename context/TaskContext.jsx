import { createContext, useContext, useState } from 'react'

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    
    const addTask = (task) => {
        setTasks((prev) => [
            ...prev,
            {id: Date.now().toString(), text, done: false },
            ]);
        };

    const editTask = (id, newTask) => {
        setTasks((prev) => 
        prev.map((t)=> (t.id === id ? {...t, text: newTask} : t))
        );
    };

    const deleteTask = (id) => {
        setTasks((prev) => 
            prev.filter((t) => t.id !== id))
    };

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? {...t, done: !t.done } : t))
        );
    };

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, editTask, deleteTask, toggleTask }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    const ctx = useContext(TaskContext);
    if (!ctx) throw new Error('useTasks must be used inside TaskProvider');
    return ctx;
}