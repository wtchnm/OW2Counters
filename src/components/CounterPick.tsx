import type {Accessor} from 'solid-js'

interface CounterPickProps {
	name: Accessor<string | undefined>
}

export function CounterPick({name}: CounterPickProps) {
	return (
		<div class='flex items-center gap-4 rounded-md bg-black/50 border-t-2 border-b-2 size-18 border-white relative w-full'>
			<img
				width={72}
				height={68}
				src={`${name()?.toLowerCase().replace(' ', '-')}.png`}
				alt={name()}
				class='pointer-events-none h-17 object-cover'
			/>
			<p class='text-white pt-1 pb-0.5 pl-1 pr-1.75 rounded-xs text-center text-3xl'>
				{name()}
			</p>
		</div>
	)
}
