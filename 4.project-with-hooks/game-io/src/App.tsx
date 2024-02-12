import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/home/GameGrid';
import GenreList from './components/home/GenreList';
import PlatformSelector from './components/home/PlatformSelector';
import NavBar from './components/navbar/NavBar';
import { GameQuery } from './interfaces';
import SortSelector from './components/home/SortSelector';
import GameHeading from './components/home/GameHeading';

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
	/**qoida:
   a component a that holding a stated should be the one that updating it
   qasyi component state ushlab tursa shu componentda stateni ozgartirish kerak boshqa componentlar faqat statni olib kelib berish kerak xolos
   agar componetlar ortasida statlarni almashtirmoqchi bolsang
 */
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '250px 1fr',
			}}
		>
			<GridItem area='nav'>
				<NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' paddingX={5}>
					{/* shu yerda state ozgargani uchun window rerendeer boladi va render bolganida biz stateni qiymatini pasda GameGridga berib yuboramiz */}
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectedGenre={genre => setGameQuery({...gameQuery, genre})}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<Box paddingLeft={2}>
					<GameHeading gameQuery={ gameQuery}/>
					<Flex marginBottom={5}>
						<Box marginRight={5}>
							<PlatformSelector
								selectedPlatform={gameQuery.platform}
								onSelectedPlatform={platform => setGameQuery({...gameQuery, platform})}
								/>
							{/* 1chisida biz gameQueryni ichidagi genre variableni yubordik, 2chisida shu genre ni object korinishida yubordik, object korinishida yuborishmizni yaxshi tarafi qabul qilib oladigan useGame hookga object korinishda boradi va u oshiqcha kodlarni kamaytirib singli object ishlatishimda qulaylik tug'diradi */}

						</Box>
								<SortSelector sortOrder={ gameQuery.sortOrder} onSelectSortOrder={sortOrder => setGameQuery({...gameQuery, sortOrder})} />
					</Flex>
				</Box>

				<GameGrid gameQuery={ gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
