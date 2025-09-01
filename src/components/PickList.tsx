import {type Accessor, For, type Setter} from 'solid-js'
import {type Hero, heroesByRole, type roles} from '../data'
import {Pick} from './Pick'

interface PickListProps {
	role: (typeof roles)[number]
	selected: Accessor<Hero | undefined>
	setSelected: Setter<Hero | undefined>
}

export function PickList({role, selected, setSelected}: PickListProps) {
	return (
		<section class='flex flex-col gap-2 max-md:mt-2'>
			<h2
				class='border-white border-b-4 text-3xl text-white'
				classList={{
					'text-3xl': !selected(),
					'text-2xl/5': Boolean(selected())
				}}
			>
				{role}
			</h2>
			<div
				class='flex flex-shrink-0 flex-wrap justify-center gap-x-2'
				classList={{
					'md:w-78': role === 'TANK',
					'md:w-98': role === 'DAMAGE',
					'md:w-58': role === 'SUPPORT',
					'gap-y-7': !selected(),
					'gap-y-2.25': Boolean(selected())
				}}
			>
				<For each={heroesByRole[role]}>
					{hero => (
						<Pick hero={hero} onSelect={setSelected} selected={selected} />
					)}
				</For>
			</div>
		</section>
	)
}
