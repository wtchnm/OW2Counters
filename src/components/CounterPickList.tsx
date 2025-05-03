import {type Accessor, For, createMemo} from 'solid-js'
import {type Hero, type Role, getHeroByName, roles} from '../data'
import {CounterPick} from './CounterPick'

interface CounterPickListProps {
	hero: Accessor<Hero>
}

export function CounterPickList({hero}: CounterPickListProps) {
	const countersByRole = createMemo(() => {
		const map = new Map<Role, string>()
		for (const counterName of hero().counters) {
			const counterHero = getHeroByName(counterName)
			if (counterHero) {
				map.set(counterHero.role, counterHero.name)
			}
		}
		return map
	})

	return (
		<div class='flex w-full max-w-5xl mt-12 gap-10'>
			<For each={roles}>
				{role => <CounterPick name={() => countersByRole().get(role)} />}
			</For>
		</div>
	)
}
