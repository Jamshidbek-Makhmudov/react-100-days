import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { sortOrders } from '../../config/constants';
import { SortSelectorProps } from '../../interfaces';

const SortSelector = ({ onSelectSortOrder, sortOrder }: SortSelectorProps) => {
	
	const currentSortOrder = sortOrders.find(order=>order.value===sortOrder)
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{ currentSortOrder?.label ||'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map(order => (
					
					<MenuItem onClick={()=>onSelectSortOrder(order.value)} key={ order.value} value={order.value}>{ order.label}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

export default SortSelector