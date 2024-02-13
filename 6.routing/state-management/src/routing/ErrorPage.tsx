import {
  isRouteErrorResponse,
  useRouteError,
} from 'react-router-dom';
//bu page pag etopilmaganda userga korsatish uhcun kerak, buning uchun routerga 	errorElement: <ErrorPage />, shu qoshiladi lekin bu faqat gina not foun duchun emas balki bu errorElement  erro bop qoganda ham shu page ga push qilib yuborish qobiyatiga ega, erorni esa useRouteError yordamida catch qilib userga korsatsak boladi
const ErrorPage = () => {
  const error = useRouteError(); // bu throe bolgan errorni ushlab olish uhcun kerak

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error) // bu function user mavjud bolmagan routelarga kirib qolsa ishlatilinadi
          ? 'Invalid page'
          : 'Unexpected error'}
      </p>
    </>
  );
};

export default ErrorPage;
