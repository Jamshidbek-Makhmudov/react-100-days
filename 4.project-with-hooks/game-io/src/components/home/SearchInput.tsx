import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs';
import { SearchInputProps } from '../../interfaces';

const SearchInput = ({onSearch}:SearchInputProps) => {
	const ref = useRef<HTMLInputElement>(null)
	return (
		<form onSubmit={(event => { 
			event.preventDefault()
			if (ref.current) {

				onSearch(ref.current.value)
			 }
		})}>
			<InputGroup >
				<InputLeftElement children={ <BsSearch/>}/>
				<Input ref={ref}  placeholder='Search games...' variant='filled' borderRadius={20}/>
			</InputGroup>
		</form>
	)
}

export default SearchInput