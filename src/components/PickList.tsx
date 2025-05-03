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
		<section class='flex flex-col gap-2'>
			<h2
				class='text-3xl text-white border-b-4 border-white'
				classList={{
					'text-3xl': !selected(),
					'text-2xl/5': !!selected()
				}}
			>
				{role}
			</h2>
			<div
				class='flex flex-wrap gap-x-2 justify-center  flex-shrink-0'
				classList={{
					'w-78': role === 'TANK',
					'w-98': role === 'DAMAGE',
					'w-58': role === 'SUPPORT',
					'gap-y-7': !selected(),
					'gap-y-2.25': !!selected()
				}}
			>
				<For each={heroesByRole[role]}>
					{hero => (
						<Pick hero={hero} selected={selected} onSelect={setSelected} />
					)}
				</For>
			</div>
		</section>
	)
}
