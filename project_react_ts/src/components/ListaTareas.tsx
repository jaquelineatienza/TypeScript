import { Tareas } from "./Tarea";

type PropListarTask = {
  listarTareas: string[];
  borrarTarea: (index: number) => void;
};

export const ListarTask = ({ listarTareas, borrarTarea }: PropListarTask) => {
  return (
    <div>
      <div>
        <h3>lista de tareas </h3>
      </div>
      {listarTareas.map((task, index) => (
        <Tareas
          key={index}
          tarea={task}
          deleteTask={() => borrarTarea(index)} // Llamada correcta a borrarTarea
        />
      ))}
    </div>
  );
};
