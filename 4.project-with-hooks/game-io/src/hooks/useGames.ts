import { Game, GameQuery} from '../interfaces';
import useData from './useData';

/**proplarni bunday ishlatishni nomi working with quaery objects deyiladi */
const useGames = (gameQuery:GameQuery) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search:gameQuery.searchText
			}
		},
		[gameQuery]
	);

export default useGames;
