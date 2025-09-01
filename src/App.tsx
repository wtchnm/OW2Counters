import {createSignal, For, Show} from 'solid-js'
import {CounterPickList} from './components/CounterPickList'
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import {PickList} from './components/PickList'
import {type Hero, roles} from './data'

export function App() {
	const [selected, setSelected] = createSignal<Hero>()

	return (
		<div class='flex min-h-screen select-none flex-col bg-slate-500'>
			<Header />
			<main class='flex w-full flex-grow flex-col items-center justify-center gap-4 px-4 italic'>
				<Show when={selected()}>{hero => <CounterPickList hero={hero} />}</Show>
				<div class='flex w-full max-w-5xl justify-between gap-x-2 gap-y-4 max-md:flex-col'>
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
			</main>
			<Footer />
		</div>
	)
}
