import {For, Show, createMemo, createSignal} from 'solid-js'
import {type Hero, getHeroByName, heroesByRole, roles} from './data'

export function Home() {
	const [selected, setSelected] = createSignal<Hero>()

	function onClick(hero: Hero) {
		setSelected(hero)
	}

	return (
		<div class='min-h-screen flex flex-col bg-slate-500 select-none'>
			<header class='flex justify-center pt-2'>
				<h1 class='text-4xl/9 text-white flex gap-2'>
					<span class='mt-1'>OVERWATCH® </span>
					<div class='bg-orange-500 px-1 pt-1 rounded-md'>2</div>
					<div class='w-4' />
					<span class='mt-1'>COUNTERS</span>
				</h1>
			</header>
			<main class='w-full flex flex-col items-center justify-center px-16 italic'>
				<div
					class='flex gap-x-2 gap-y-4 w-full max-w-5xl justify-between'
					classList={{
						'mt-16': !selected(),
						'mt-8': !!selected()
					}}
				>
					<For each={roles}>
						{role => (
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
											<button
												type='button'
												class='cursor-pointer rounded-md bg-black/50 border-t-2 border-b-2 size-18 border-white relative aria-selected:bg-orange-600 aria-selected:border-orange-300 aria-selected:scale-115 aria-selected:border-2 group aria-selected:shadow-orange-300 aria-selected:shadow-xl'
												aria-selected={selected() === hero}
												onClick={() => onClick(hero)}
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
										)}
									</For>
								</div>
							</section>
						)}
					</For>
				</div>
				<Show when={selected()}>
					{hero => (
						<div class='flex w-full mt-12 gap-10'>
							<For each={roles}>
								{role => {
									const counterName = createMemo(() =>
										hero().counters?.find(
											name => getHeroByName(name)?.role === role
										)
									)

									return (
										<div class='flex items-center gap-4 rounded-md bg-black/50 border-t-2 border-b-2 size-18 border-white relative w-full'>
											<img
												width={72}
												height={68}
												src={`${counterName()?.toLowerCase().replace(' ', '-')}.png`}
												alt={counterName()}
												class='pointer-events-none h-17 object-cover'
											/>
											<p class='text-white pt-1 pb-0.5 pl-1 pr-1.75 rounded-xs text-center text-3xl'>
												{counterName()}
											</p>
										</div>
									)
								}}
							</For>
						</div>
					)}
				</Show>
			</main>
			<footer class='text-white text-center absolute bottom-4 text-sm px-16'>
				This is an independent, non-commercial fan project and is not affiliated
				with, endorsed, or sponsored by Blizzard Entertainment®. All
				Overwatch-related trademarks, characters, images, and other intellectual
				property are the property of Blizzard Entertainment®. This site is
				intended solely for informational and entertainment purposes. No
				copyright infringement is intended. |{' '}
				<a href='https://github.com/wtchnm'>GitHub</a>
			</footer>
		</div>
	)
}
