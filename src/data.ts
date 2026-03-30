export interface Hero {
	name: string
	role: (typeof roles)[number]
	counters: string[]
}

export const roles = ['TANK', 'DAMAGE', 'SUPPORT'] as const
export type Role = (typeof roles)[number]

export const heroes = [
	{
		name: 'ANA',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOMBRA', 'KIRIKO']
	},
	{
		name: 'ASHE',
		role: 'DAMAGE',
		counters: ['WINSTON', 'SOJOURN', 'LUCIO']
	},
	{
		name: 'BAPTISTE',
		role: 'SUPPORT',
		counters: ['SIGMA', 'ECHO', 'LUCIO']
	},
	{
		name: 'BASTION',
		role: 'DAMAGE',
		counters: ['SIGMA', 'PHARAH', 'ANA']
	},
	{
		name: 'BRIGITTE',
		role: 'SUPPORT',
		counters: ['RAMATTRA', 'PHARAH', 'JUNO']
	},
	{
		name: 'CASSIDY',
		role: 'DAMAGE',
		counters: ['SIGMA', 'SOJOURN', 'WUYANG']
	},
	{
		name: 'DOOMFIST',
		role: 'TANK',
		counters: ['ORISA', 'SOMBRA', 'ANA']
	},
	{
		name: 'D.VA',
		role: 'TANK',
		counters: ['ZARYA', 'SYMMETRA', 'BAPTISTE']
	},
	{
		name: 'ECHO',
		role: 'DAMAGE',
		counters: ['WINSTON', 'ASHE', 'BAPTISTE']
	},
	{
		name: 'FREJA',
		role: 'DAMAGE',
		counters: ['WINSTON', 'WIDOW MAKER', 'LUCIO']
	},
	{
		name: 'GENJI',
		role: 'DAMAGE',
		counters: ['ZARYA', 'PHARAH', 'MOIRA']
	},
	{
		name: 'HANZO',
		role: 'DAMAGE',
		counters: ['WINSTON', 'FREJA', 'LUCIO']
	},
	{
		name: 'HAZARD',
		role: 'TANK',
		counters: ['ZARYA', 'PHARAH', 'ANA']
	},
	{
		name: 'ILLARI',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOMBRA', 'LUCIO']
	},
	{
		name: 'JUNKER QUEEN',
		role: 'TANK',
		counters: ['ZARYA', 'SOJOURN', 'KIRIKO']
	},
	{
		name: 'JUNKRAT',
		role: 'DAMAGE',
		counters: ['SIGMA', 'PHARAH', 'BAPTISTE']
	},
	{
		name: 'JUNO',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOMBRA', 'KIRIKO']
	},
	{
		name: 'KIRIKO',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOMBRA', 'BAPTISTE']
	},
	{
		name: 'LIFE WEAVER',
		role: 'SUPPORT',
		counters: ['WINSTON', 'PHARAH', 'KIRIKO']
	},
	{
		name: 'LUCIO',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOMBRA', 'MOIRA']
	},
	{
		name: 'MAUGA',
		role: 'TANK',
		counters: ['SIGMA', 'SOJOURN', 'ANA']
	},
	{
		name: 'MEI',
		role: 'DAMAGE',
		counters: ['ZARYA', 'PHARAH', 'KIRIKO']
	},
	{
		name: 'MERCY',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOJOURN', 'BAPTISTE']
	},
	{
		name: 'MOIRA',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOJOURN', 'ANA']
	},
	{
		name: 'ORISA',
		role: 'TANK',
		counters: ['ZARYA', 'SOJOURN', 'ZENYATTA']
	},
	{
		name: 'PHARAH',
		role: 'DAMAGE',
		counters: ['SIGMA', 'ASHE', 'BAPTISTE']
	},
	{
		name: 'RAMATTRA',
		role: 'TANK',
		counters: ['ZARYA', 'REAPER', 'ANA']
	},
	{
		name: 'REAPER',
		role: 'DAMAGE',
		counters: ['SIGMA', 'PHARAH', 'ANA']
	},
	{
		name: 'REINHARDT',
		role: 'TANK',
		counters: ['RAMATTRA', 'PHARAH', 'BAPTISTE']
	},
	{
		name: 'ROADHOG',
		role: 'TANK',
		counters: ['SIGMA', 'SOJOURN', 'ANA']
	},
	{
		name: 'SIGMA',
		role: 'TANK',
		counters: ['WINSTON', 'SYMMETRA', 'LUCIO']
	},
	{
		name: 'SOJOURN',
		role: 'DAMAGE',
		counters: ['WINSTON', 'VENDETTA', 'KIRIKO']
	},
	{
		name: 'SOLDIER',
		role: 'DAMAGE',
		counters: ['SIGMA', 'SOJOURN', 'BAPTISTE']
	},
	{
		name: 'SOMBRA',
		role: 'DAMAGE',
		counters: ['WINSTON', 'CASSIDY', 'KIRIKO']
	},
	{
		name: 'SYMMETRA',
		role: 'DAMAGE',
		counters: ['WINSTON', 'PHARAH', 'LUCIO']
	},
	{
		name: 'TORBJORN',
		role: 'DAMAGE',
		counters: ['ZARYA', 'SOJOURN', 'BAPTISTE']
	},
	{
		name: 'TRACER',
		role: 'DAMAGE',
		counters: ['WINSTON', 'CASSIDY', 'BRIGITTE']
	},
	{
		name: 'VENTURE',
		role: 'DAMAGE',
		counters: ['ZARYA', 'PHARAH', 'LUCIO']
	},
	{
		name: 'WIDOW MAKER',
		role: 'DAMAGE',
		counters: ['WINSTON', 'SOMBRA', 'LUCIO']
	},
	{
		name: 'WINSTON',
		role: 'TANK',
		counters: ['MAUGA', 'REAPER', 'BRIGITTE']
	},
	{
		name: 'WRECKING BALL',
		role: 'TANK',
		counters: ['SIGMA', 'SOMBRA', 'ANA']
	},
	{
		name: 'WUYANG',
		role: 'SUPPORT',
		counters: ['DOOMFIST', 'SOMBRA', 'KIRIKO']
	},
	{
		name: 'ZARYA',
		role: 'TANK',
		counters: ['WINSTON', 'PHARAH', 'LUCIO']
	},
	{
		name: 'ZENYATTA',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOMBRA', 'LUCIO']
	},
	{
		name: 'VENDETTA',
		role: 'DAMAGE',
		counters: ['ZARYA', 'PHARAH', 'LUCIO']
	},
	{
		name: 'ANRAN',
		role: 'DAMAGE',
		counters: ['WINSTON', 'SOJOURN', 'BAPTISTE']
	},
	{
		name: 'DOMINA',
		role: 'TANK',
		counters: ['WINSTON', 'SOMBRA', 'LUCIO']
	},
	{
		name: 'EMRE',
		role: 'DAMAGE',
		counters: ['WINSTON', 'WIDOW MAKER', 'ANA']
	},
	{
		name: 'JETPACK CAT',
		role: 'SUPPORT',
		counters: ['SIGMA', 'ASHE', 'ILLARI']
	},
	{
		name: 'MIZUKI',
		role: 'SUPPORT',
		counters: ['DOOMFIST', 'SOMBRA', 'KIRIKO']
	}
] as const satisfies Hero[]

export const heroesByRole = Object.groupBy(heroes, h => h.role)
export const getHeroByName = (name: string): Hero | undefined =>
	heroes.find(h => h.name === name)
