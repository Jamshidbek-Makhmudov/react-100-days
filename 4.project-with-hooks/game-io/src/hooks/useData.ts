import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchRespone, Game } from "../interfaces";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?:any[]
) => { 
	
	const [data, setDatas] = useState<T[]>([])
	const [error, setError] = useState('')
	const [isLoading, setLoading] = useState(false)

	useEffect(() => { 
		const controller = new AbortController()

		setLoading(true)
		apiClient.get<FetchRespone<T>>(endpoint, {
			signal: controller.signal,
			...requestConfig
		})
		.then(res => {
				setDatas(res.data.results);
				setLoading(false)
			})
			.catch((err) => {
				if (err instanceof CanceledError) return
				setError(err.message);
				setLoading(false) //strick mode {} bu siz ishlamidi
			})
		
			return ()=> controller.abort()
	}, deps ? [...deps] : [])
	
	return {data, error, isLoading};
};
export default useData