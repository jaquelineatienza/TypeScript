import { useState } from "react";
import { ListarTask } from "./ListaTareas";
export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listarTarea, setListarTareas] = useState<string[]>([]);
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setListarTareas((tareasAnteriores) => [...tareasAnteriores, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    setListarTareas((tareas) => tareas.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={handleAddTask}>agregar</button>
      </div>
      <ListarTask listarTareas={listarTarea} borrarTarea={handleDeleteTask} />
    </div>
  );
};
