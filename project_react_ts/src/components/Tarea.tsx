type Task = {
  tarea: string;
  deleteTask: () => void;
};

export const Tareas = ({ tarea, deleteTask }: Task) => {
  return (
    <div>
      <span>{tarea}</span>
      <button onClick={deleteTask}>borrar</button>
    </div>
  );
};
