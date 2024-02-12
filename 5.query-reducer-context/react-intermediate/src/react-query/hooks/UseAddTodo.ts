import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../interfaces";
import todoService from "../services/todoService";
import { CACHE_KEY_TODOS } from "../config/constants";


interface AddTodoContext { 
  previousTodos: Todo[]
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient(); // main filedagi QueryClientni setting qilish uchun
  //<Todo, Error, Todo, AddTodoContext> bu yerda useMutation ichiga typelarni olayotganda 1-backendan keladigan data type 2- error tpye 3-biz backendga post qilib yuboradigan data type 
  //4- bu erro bolganda ishlatilinidagian contextdagi type
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    //bu post qilish uchun
    mutationFn: todoService.post,
    //onMutate bu mutation ishga tushishidan oldin sodir bladigan holat bu yerda biz oldin userga yangilangan data korsatib keyin mutatiionni boshlasak ancha tezlikni oshirgan bolamiz
    //shuda oldin query update qilib  keiyin mutation beramiz agar erro bersa yana oldingi holatiga qaytarib qoyamiz
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || []; // bu bizga cache ni update qilgan paytimizdan oldingi cachedagi datalar bu larni biz erro bolganda cachega qaytarib berb qoyishimiz kerak
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [//todos = [] bu yerda totdo undefined kelishi mumkin deb type erro beradi shunda bizundefined kelsa bosh arrayni beramzi
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },
 //bu agar hammasi togri ishlasa biz qiladigan logika unga yozdaigan functionimizga 2ta parametrga bersak boladi, parametrni birinichisi backendan keladigan data boladi, ikkinchis variable deb nomlangan lekin bu biz backendga yuboradigan inputimiz boladi type rror bersa axiosda post request generic type berib qoysish kerak
    onSuccess: (savedTodo, newTodo) => {
      //succcess bolganda biz querydagi datalar invalidligini kiritib qoyishimz kerak, shunda react query ozi boshqattan refetch qiladi,
      //buning uchun biz mainda yozgan QueryClient ga murojatt qilishiz kerak buning uchun esa useQueryClient hooki yordam berasi
      /**
       queryClient.invalidateQueries({
       queryKey:['todos]
       })
       */

      // leki bu xoizr ishlamidi sababi json face data api boolghani uchun biz kiritgan datalar aslida unga haqiqatdan yozilmaydi shunga reazt query refecth qilib olib kela olmaydi yangi kiritganimizni, shuning uchun biz bu yerda sal boshqacharoq logika yozamiz: cacheni directly update qilamiz:

/**  queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [//todos = [] bu yerda totdo undefined kelishi mumkin deb type erro beradi shunda bizundefined kelsa bosh arrayni beramzi
        newTodo,
        ...todos,
      ]); */

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) =>
          todo === newTodo ? savedTodo : todo
        )
      );
    },
 //bu nmadir oxshamaganda biz qiladigan logikamiz, bu yerga qandaydir notification berib qoysak boladi
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    }
    //undan tshqari bizda onSettled bor yani weather request is succefull or not ga teng bolganda qilinadigan logika

  });
}

export default useAddTodo;