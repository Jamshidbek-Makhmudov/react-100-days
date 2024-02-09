import axios from "./api-client"
interface Entity {
  id: number;
}

class HttpServise { 
	endpoint: string
	constructor(endpoint: string) { 
		this.endpoint = endpoint
		
	}
	getAll<T>() { 
		/**AbortController serverga request yuborgandan keyin clean qilish uchun kerak ya'ni user bu pagedan foydalanmya boshqa oage otganda bu pageda server bilan aloqani uzadi
		 * doim shunday tozlab yurish kerak serverga murojat qilganda
		 */
		const controller = new AbortController() 
		const request = axios.get<T[]>(this.endpoint, {
			signal:controller.signal
		})
		return {request, cancel:()=>controller.abort()}
	}
	  delete(id: number) {
    return axios.delete(this.endpoint + "/" + id);
		}
	 create<T>(entity: T) {
    return axios.post(this.endpoint, entity);
	 }
	 update<T extends Entity>(entity: T) {
    return axios.patch(this.endpoint + "/" + entity.id, entity);
  }



}
const create = (endpoint: string) => new HttpServise(endpoint);
export default create