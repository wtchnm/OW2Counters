import type {Accessor, Setter} from 'solid-js'
import type {Hero} from '../data'

interface PickProps {
	hero: Hero
	selected: Accessor<Hero | undefined>
	onSelect: Setter<Hero | undefined>
}

export function Pick({hero, selected, onSelect}: PickProps) {
	function onClick() {
		window.scrollTo({top: 0, behavior: 'smooth'})
		onSelect(hero)
	}

	return (
		<button
			aria-pressed={selected() === hero}
			class='group relative size-18 cursor-pointer rounded-md border-white border-t-2 border-b-2 bg-black/50 aria-pressed:scale-115 aria-pressed:border-2 aria-pressed:border-orange-300 aria-pressed:bg-orange-600 aria-pressed:shadow-orange-300 aria-pressed:shadow-xl'
			onClick={onClick}
			type='button'
		>
			<img
				alt={hero.name}
				class='pointer-events-none h-17 object-cover'
				height={68}
				src={`${hero.name.toLowerCase().replace(' ', '-')}.png`}
				width={72}
			/>
			<p
				class='-translate-x-1/2 absolute bottom-0 left-1/2 max-w-19 transform text-balance rounded-xs bg-white pt-1 pr-1.75 pb-0.5 pl-1 text-center text-xl/4 group-aria-pressed:bg-orange-50'
				classList={{
					'translate-y-2/3': !selected(),
					'translate-y-1': Boolean(selected())
				}}
			>
				{hero.name}
			</p>
		</button>
	)
}
