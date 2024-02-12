import { useRef } from 'react';
import useAddTodo from './hooks/UseAddTodo';


const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = '';
  });

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">
          {addTodo.error.message}
        </div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

           if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value, //typescriptda ref.current null kelish exhtimoli borligi uchun ya'ni boshlngich qiymati null xolatda turadi uni value i olomisan deb error beradi, keyin biz option berib qoysak currentga shunda mutate type erro beradi< ya'ni agar currentdan null qaytsa title undeifnedga teng bolib qoladi senda bunday type kiritlmagan deb error beradi , shunda biz  obsh bularno orab turgan joyda agar current va value bolsagina shu coldelarni run qilgin degan if statement kiritamiz shudna typescript erro yoqoladi
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input
            ref={ref}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
