import React, { useState } from "react";
import {
    TextField, Button, IconButton, Card, Divider, Switch, Tooltip, FormGroup, FormControlLabel, FormControl, FormLabel
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import styles from 'src/styles/TodoComponentStyle';
import { useTodo } from "src/hooks/useTodo";

function TodoComponent() {
    /** Todo custom hook */
    const [add, edit, remove, { data }] = useTodo();

    /** Local state */
    const [title, setTitle] = useState('');
    const [description, setDescritpion] = useState('');

    /** Input handlers */
    const onTitleUpdate = (e) => setTitle(e.target.value);
    const onDescriptionUpdate = (e) => setDescritpion(e.target.value);

    /** Query handlers */
    const addTask = () => {
        add({ id: data?.todo?.length + 1 || 1, title, description, done: false });
        setTitle('');
        setDescritpion('')
    }
    const deleteTask = (task) => remove(task.id);
    const toggle = (task) => edit({ ...task, done: !task.done }, task.id);

    return (
        <div id="main" style={styles.main}>
            <header style={styles.header}>
                <TextField label="Task title" value={title} onChange={onTitleUpdate} style={styles.input} />
                <TextField label="Task Description" value={description} onChange={onDescriptionUpdate} style={styles.input} />
                <Button variant="raised" color="primary" disabled={!title || !description} onClick={addTask} style={styles.addButton}>
                    Add
                </Button>
            </header>
            <Divider style={styles.divider} />
            {data?.todo.length > 0 && (
                <Card style={styles.card}>
                    <FormGroup>
                        {data?.todo.map((task, index) => (
                            <div key={index} style={styles.todo}>
                                {index > 0 ? <Divider style={styles.divider} /> : ""}
                                <Switch color="primary" checked={task.done} onChange={() => toggle(task)} />
                                <FormControl style={task.done ? styles.done : styles.label}>
                                    <FormLabel>{task.title}</FormLabel>
                                    <FormLabel>{task.description}</FormLabel>
                                </FormControl>
                                <Tooltip title="Delete task" placement="top">
                                    <IconButton aria-label="delete" onClick={() => deleteTask(task)} >
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        ))}
                    </FormGroup>
                </Card>
            )}
        </div>
    )
}

export default TodoComponent;