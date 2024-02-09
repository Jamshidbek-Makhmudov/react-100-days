import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver}from "@hookform/resolvers/zod"

const schema = z.object({
	name: z.string().min(3, { message: "name must be at least 3 characters" }),
	age: z.number({invalid_type_error:"age field is required" }).min(12)
})
type FormData= z.infer<typeof schema> //interface
// interface FormData { 
// 	name: string
// 	age:number
// }
const ReactHookForm = () => {
	// const form=useForm()
	// console.log(form);
	const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) })
	
	const onSubmit = (data: FieldValues) => {
		console.log(data);
		
	 }
	
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="name">name</label>
			{/* this is with formState validation: */}
			{/* <input {...register("name", { required: true, minLength: 3 })} id="name" type="text" />
			{errors.name?.type === "required" && (
				<p>name is required</p>
			)}
	 */}
			{/* this is with zod validation */}
			<input {...register("name")} id="name" type="text" />
			{errors.name && (
				<p>{ errors.name.message}</p>
			)}
	
			<label htmlFor="age">age</label>
			<input {...register("age", {valueAsNumber:true})}  is='age' type="number" />
			{errors.age && (
				<p>{ errors.age.message}</p>
			)}
	
			<button disabled={ !isValid} type="submit">Submit</button>
			

			
		</form>
	)
}

export default ReactHookForm
/** useForm() object qaytaradi
     ini ichidagi register functioni inputga peradigan bolsak shu inputga tegisgli barcha atributelarni ovoladi va object qaytaradi
		 handle submit submit qilish uchun
		 formState errolarni korsatish uchun yani validate qilish uchun lekin kodl kopaygan sari buy validation methoidini orniga boshqa optimalrogini  qidirgan avzal roq masalan 
		 zod validation uchun va formik dan balanda turadi lekin undan ham yaxshirogi bor bu joi
		 zod ni ihslatsak inrefece ni ham zodniki ishlatsek boadi bu nacha qulay
		 zod ni reactda ishlatish uchun qoshimcha  pachage ornatisg kerak:     npm i @hookform/resolver@2.9.11



*/