import React, { Dispatch} from 'react'
import { Task } from '../../react-query/interfaces';
import { TaskAction } from '../reducers/tasksReducer';
/**bu biz boshqa filga yubormoqchi bolgan reducer objetimiz: */
interface TasksContextType { 
  tasks: Task[]
  dispatch:Dispatch<TaskAction>
}
/**bu react contextni yaratishni yoli react conext ozii doim deafult valueni soridi lekin default value har doim ham bizga kerak emas shuning default valuega null qiymat qoysak boladi lekin unday qilsak type lar orasiga ham nullni kiritib ketishimiz kerak boladi unday qilish orniga bosh object berib uni yuqoridagi typega tenglab ketsak boladi*/
//React.createContext<TasksContextType | null>(null) 
const TaskContext = React.createContext<TasksContextType>({} as TasksContextType) //shu line  react context boladi

export default TaskContext