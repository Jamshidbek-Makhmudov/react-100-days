// import { Platform } from '../interfaces';
// import useData from './useData';
import platforms from "../data/platforms";

// const usePlatform = () => useData<Platform>('/platforms/lists/parents');
const usePlatform = () => ({ data: platforms, isLoading: false, error: null }); //this is static data from local

export default usePlatform;
