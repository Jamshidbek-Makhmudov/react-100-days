import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
	const navigate = useNavigate(); //auto qaysidir routega push qilish 

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				navigate('/');
			}}
		>
			<button className="btn btn-primary">Submit</button>
		</form>
	);
};

export default ContactPage;
