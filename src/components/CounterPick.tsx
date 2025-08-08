import type {Accessor} from 'solid-js'

interface CounterPickProps {
	name: Accessor<string | undefined>
}

export function CounterPick({name}: CounterPickProps) {
	return (
		<div class='relative flex size-18 w-full items-center gap-4 rounded-md border-white border-t-2 border-b-2 bg-black/50'>
			<img
				alt={name()}
				class='pointer-events-none h-17 object-cover'
				height={68}
				src={`${name()?.toLowerCase().replace(' ', '-')}.png`}
				width={72}
			/>
			<p class='rounded-xs pt-1 pr-1.75 pb-0.5 pl-1 text-center text-3xl text-white'>
				{name()}
			</p>
		</div>
	)
}
