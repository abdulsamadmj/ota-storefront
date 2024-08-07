import { links } from '@/utils/Constants'
import Link from 'next/link'

const SearchBar = () => {
	return (
		<form className='max-w-md mx-auto w-60'>
			<div className='relative'>
				<input
					type='search'
					id='default-search'
					className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
					placeholder='Search Uniqueness...'
					required
				/>
				<button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
				>
					<svg
						className='w-4 h-4 text-white'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 20 20'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
						/>
					</svg>
				</button>
			</div>
		</form>
	)
}

export default SearchBar
