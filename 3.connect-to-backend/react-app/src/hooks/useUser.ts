import { useEffect, useState } from "react";
import { User } from "../interfaces/User";
import userService from "../services/user-servise";
import { CanceledError } from "../services/api-client";

const useUsers = () => { 
	const [users, setUsers] = useState<User[]>([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => { 
		setIsLoading(true)
		//shunaqa nomlab oldik create ni 
		const { request, cancel } = userService.getAll<User>();
		   request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
			})
		   .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
			 });
		return () => cancel(); // bu subscriptionni toxtatdi ya'ni serveer bilan boglanishni yani clean qiladi

	},[])

  return { users, error, isLoading, setUsers, setError };

};
export default useUsers