import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
/**ReactQueryDevtools ni import qilayotganda extiyot bolsih kerak 2- kok boxdan impoort qilish kerak birinchisida xato ketgan */
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.css';

// const queryClient=new QueryClient()
//querylarga global ozgartirish kiritsh:
const queryClient = new QueryClient({
  defaultOptions: {
    //this are deafult value and youe can config them
    queries: {
      retry: 3, //if query fails it tries to fetch data again  3 more times
      cacheTime: 300_000, //5min agar component unmounted bolsa ya'ni DOM(screen)dan yoqolsa query inactive boladi, inactive bolhan query 5mindan keyin garbage colectedga tushadi va cachedan chib ketadi
      staleTime: 0, //bazi datalr less friequnetly update boladi biz shularga koproq vaqt kiritib qoysak boladi //10*1000,//=> 10minut //how long the data considered fresh, bu nima degani? query qabulgan data birdaniga old data hisoblanadi degani. query 3xil xolatda shu stale bolgan datani auto refresh yani yangilaydi: 
      //1.when the network is reconnected
      //2. when a component is mounted
      //3. when the window is refocused
      refetchOnWindowFocus: true, //window focus boganda refresh qiladi
      refetchOnReconnect: true,//reconnect boganda refresh qiladi(client offline xolatda online xolatga otganda)
      refetchOnMount: true, // 1-marta mount boganda refresh qiladi
      /**xosh, stale datani refresh qilish qanday kechadi? query cache di datani clientda korsatib turadi va backgrounda ozi data fetch qiladi fecth qilib olib kelishi bilan userga yengi datani korsatib uni cachega saqlab qoyadi */
      keepPreviousData: false // bu yangi data kelganda pageni ham yangilaydi shunda user pasda bolsa tepaga olib chiqb qoyadi

    }
  }
})
// bundan tashqari har bir useQueryni ishlatgan joyimizda faqat osha joyga tegishli boladigan ozgarishlarni ham kiritsak boladi
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/*  ReactQueryDevtools ni appni pasidan yozish kerak va u faqat development paytida ishlaydi*/}
      <ReactQueryDevtools/> 
    </QueryClientProvider>
  </React.StrictMode>,
)
