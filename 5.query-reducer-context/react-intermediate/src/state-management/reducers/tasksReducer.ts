import { Task } from "../../react-query/interfaces";

interface AddTask { 
	type: "ADD"
	task:Task //payload -biz kiritadigan data
}
interface RemoveTask { 
	type: "Remove"
	taskId:number //payload 
}
export type TaskAction = AddTask | RemoveTask
const tasksReducer = (task: Task[], action: TaskAction): Task[] => { 
	//if else orniga switch case ishlatsa ham boladi:
	switch (action.type) {
		case "ADD":
			return [action.task, ...task];
		case "Remove":
			return task.filter(item=>item.id!==action.taskId)

	}

};
export default tasksReducer;