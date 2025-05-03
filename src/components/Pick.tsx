import type {Accessor, Setter} from 'solid-js'
import type {Hero} from '../data'

interface PickProps {
	hero: Hero
	selected: Accessor<Hero | undefined>
	onSelect: Setter<Hero | undefined>
}

export function Pick({hero, selected, onSelect}: PickProps) {
	return (
		<button
			type='button'
			class='cursor-pointer rounded-md bg-black/50 border-t-2 border-b-2 size-18 border-white relative aria-selected:bg-orange-600 aria-selected:border-orange-300 aria-selected:scale-115 aria-selected:border-2 group aria-selected:shadow-orange-300 aria-selected:shadow-xl'
			aria-selected={selected() === hero}
			onClick={() => onSelect(hero)}
		>
			<img
				width={72}
				height={68}
				src={`${hero.name.toLowerCase().replace(' ', '-')}.png`}
				alt={hero.name}
				class='pointer-events-none h-17 object-cover'
			/>
			<p
				class='bg-white pt-1 pb-0.5 pl-1 pr-1.75 rounded-xs text-center text-xl/4 text-balance absolute bottom-0 max-w-19 left-1/2 transform -translate-x-1/2  group-aria-selected:bg-orange-50'
				classList={{
					'translate-y-2/3': !selected(),
					'translate-y-1': !!selected()
				}}
			>
				{hero.name}
			</p>
		</button>
	)
}
