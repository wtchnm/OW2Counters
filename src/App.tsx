import {For, Show, createSignal} from 'solid-js'
import {CounterPickList} from './components/CounterPickList'
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import {PickList} from './components/PickList'
import {type Hero, roles} from './data'

export function App() {
	const [selected, setSelected] = createSignal<Hero>()

	return (
		<div class='min-h-screen flex flex-col bg-slate-500 select-none'>
			<Header />
			<main class='w-full flex flex-grow flex-col items-center justify-center px-16 italic'>
				<div
					class='flex gap-x-2 gap-y-4 w-full max-w-5xl justify-between'
					classList={{
						'-mt-16': !selected(),
						'-mt-12': !!selected()
					}}
				>
					<For each={roles}>
						{role => (
							<PickList
								role={role}
								selected={selected}
								setSelected={setSelected}
							/>
						)}
					</For>
				</div>
				<Show when={selected()}>{hero => <CounterPickList hero={hero} />}</Show>
			</main>
			<Footer />
		</div>
	)
}
