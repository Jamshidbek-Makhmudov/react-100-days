import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../../hooks/usePlatform';
import { PlatformSelectorPros } from '../../interfaces';

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: PlatformSelectorPros) => {
	const { data, error } = usePlatform();
	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{data.map(platform => (
					<MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
