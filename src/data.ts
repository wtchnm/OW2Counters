export interface Hero {
	name: string
	role: (typeof roles)[number]
	counteredBy: string[]
}

export const roles = ['TANK', 'DAMAGE', 'SUPPORT'] as const
export type Role = (typeof roles)[number]

export const heroes = [
	{
		name: 'ANA',
		role: 'SUPPORT',
		counteredBy: ['WINSTON', 'SOMBRA', 'KIRIKO']
	},
	{
		name: 'ASHE',
		role: 'DAMAGE',
		counteredBy: ['WINSTON', 'SOJOURN', 'KIRIKO']
	},
	{
		name: 'BAPTISTE',
		role: 'SUPPORT',
		counteredBy: ['WINSTON', 'SOLDIER', 'ANA']
	},
	{
		name: 'BASTION',
		role: 'DAMAGE',
		counteredBy: ['SIGMA', 'GENJI', 'ANA']
	},
	{
		name: 'BRIGITTE',
		role: 'SUPPORT',
		counteredBy: ['RAMATTRA', 'PHARAH', 'MOIRA']
	},
	{
		name: 'CASSIDY',
		role: 'DAMAGE',
		counteredBy: ['ORISA', 'GENJI', 'KIRIKO']
	},
	{
		name: 'DOOMFIST',
		role: 'TANK',
		counteredBy: ['ORISA', 'SOMBRA', 'ANA']
	},
	{
		name: 'D.VA',
		role: 'TANK',
		counteredBy: ['ZARYA', 'SYMMETRA', 'ZENYATTA']
	},
	{
		name: 'ECHO',
		role: 'DAMAGE',
		counteredBy: ['D.VA', 'ASHE', 'BAPTISTE']
	},
	{
		name: 'FREJA',
		role: 'DAMAGE',
		counteredBy: ['RAMATTRA', 'WIDOW MAKER', 'BAPTISTE']
	},
	{
		name: 'GENJI',
		role: 'DAMAGE',
		counteredBy: ['ZARYA', 'SYMMETRA', 'MOIRA']
	},
	{
		name: 'HANZO',
		role: 'DAMAGE',
		counteredBy: ['WINSTON', 'GENJI', 'KIRIKO']
	},
	{
		name: 'HAZARD',
		role: 'TANK',
		counteredBy: ['REINHARDT', 'PHARAH', 'ANA']
	},
	{
		name: 'ILLARI',
		role: 'SUPPORT',
		counteredBy: ['WINSTON', 'SOMBRA', 'LUCIO']
	},
	{
		name: 'JUNKER QUEEN',
		role: 'TANK',
		counteredBy: ['ORISA', 'SOJOURN', 'KIRIKO']
	},
	{
		name: 'JUNKRAT',
		role: 'DAMAGE',
		counteredBy: ['SIGMA', 'ECHO', 'BAPTISTE']
	},
	{
		name: 'JUNO',
		role: 'SUPPORT',
		counteredBy: ['RAMATTRA', 'SOMBRA', 'BAPTISTE']
	},
	{
		name: 'KIRIKO',
		role: 'SUPPORT',
		counteredBy: ['WINSTON', 'SOMBRA', 'BAPTISTE']
	},
	{
		name: 'LIFE WEAVER',
		role: 'SUPPORT',
		counteredBy: ['DOOMFIST', 'PHARAH', 'KIRIKO']
	},
	{
		name: 'LUCIO',
		role: 'SUPPORT',
		counteredBy: ['WINSTON', 'SOMBRA', 'MOIRA']
	},
	{
		name: 'MAUGA',
		role: 'TANK',
		counteredBy: ['SIGMA', 'SIERRA', 'ANA']
	},
	{
		name: 'MEI',
		role: 'DAMAGE',
		counteredBy: ['ZARYA', 'PHARAH', 'KIRIKO']
	},
	{
		name: 'MERCY',
		role: 'SUPPORT',
		counteredBy: ['RAMATTRA', 'SOJOURN', 'BAPTISTE']
	},
	{
		name: 'MOIRA',
		role: 'SUPPORT',
		counteredBy: ['WINSTON', 'SOMBRA', 'ANA']
	},
	{
		name: 'ORISA',
		role: 'TANK',
		counteredBy: ['WINSTON', 'SOJOURN', 'ZENYATTA']
	},
	{
		name: 'PHARAH',
		role: 'DAMAGE',
		counteredBy: ['D.VA', 'ASHE', 'BAPTISTE']
	},
	{
		name: 'RAMATTRA',
		role: 'TANK',
		counteredBy: ['ZARYA', 'REAPER', 'ANA']
	},
	{
		name: 'REAPER',
		role: 'DAMAGE',
		counteredBy: ['SIGMA', 'PHARAH', 'ANA']
	},
	{
		name: 'REINHARDT',
		role: 'TANK',
		counteredBy: ['RAMATTRA', 'JUNKRAT', 'BAPTISTE']
	},
	{
		name: 'ROADHOG',
		role: 'TANK',
		counteredBy: ['ORISA', 'SIERRA', 'ANA']
	},
	{
		name: 'SIGMA',
		role: 'TANK',
		counteredBy: ['ZARYA', 'SYMMETRA', 'ANA']
	},
	{
		name: 'SOJOURN',
		role: 'DAMAGE',
		counteredBy: ['WINSTON', 'VENDETTA', 'KIRIKO']
	},
	{
		name: 'SOLDIER',
		role: 'DAMAGE',
		counteredBy: ['SIGMA', 'SOJOURN', 'BAPTISTE']
	},
	{
		name: 'SOMBRA',
		role: 'DAMAGE',
		counteredBy: ['WINSTON', 'CASSIDY', 'KIRIKO']
	},
	{
		name: 'SYMMETRA',
		role: 'DAMAGE',
		counteredBy: ['WINSTON', 'PHARAH', 'LUCIO']
	},
	{
		name: 'TORBJORN',
		role: 'DAMAGE',
		counteredBy: ['RAMATTRA', 'SOJOURN', 'BAPTISTE']
	},
	{
		name: 'TRACER',
		role: 'DAMAGE',
		counteredBy: ['WINSTON', 'CASSIDY', 'BRIGITTE']
	},
	{
		name: 'VENTURE',
		role: 'DAMAGE',
		counteredBy: ['ZARYA', 'PHARAH', 'LUCIO']
	},
	{
		name: 'WIDOW MAKER',
		role: 'DAMAGE',
		counteredBy: ['WINSTON', 'SOMBRA', 'KIRIKO']
	},
	{
		name: 'WINSTON',
		role: 'TANK',
		counteredBy: ['MAUGA', 'REAPER', 'BRIGITTE']
	},
	{
		name: 'WRECKING BALL',
		role: 'TANK',
		counteredBy: ['ORISA', 'SOMBRA', 'ANA']
	},
	{
		name: 'WUYANG',
		role: 'SUPPORT',
		counteredBy: ['DOOMFIST', 'SOMBRA', 'ZENYATTA']
	},
	{
		name: 'ZARYA',
		role: 'TANK',
		counteredBy: ['WINSTON', 'PHARAH', 'LUCIO']
	},
	{
		name: 'ZENYATTA',
		role: 'SUPPORT',
		counteredBy: ['WINSTON', 'SOMBRA', 'LUCIO']
	},
	{
		name: 'VENDETTA',
		role: 'DAMAGE',
		counteredBy: ['REINHARDT', 'PHARAH', 'BRIGITTE']
	},
	{
		name: 'ANRAN',
		role: 'DAMAGE',
		counteredBy: ['SIGMA', 'SOJOURN', 'BAPTISTE']
	},
	{
		name: 'DOMINA',
		role: 'TANK',
		counteredBy: ['MAUGA', 'SOMBRA', 'LUCIO']
	},
	{
		name: 'EMRE',
		role: 'DAMAGE',
		counteredBy: ['WINSTON', 'WIDOW MAKER', 'ANA']
	},
	{
		name: 'JETPACK CAT',
		role: 'SUPPORT',
		counteredBy: ['D.VA', 'ASHE', 'BAPTISTE']
	},
	{
		name: 'MIZUKI',
		role: 'SUPPORT',
		counteredBy: ['ORISA', 'SOMBRA', 'KIRIKO']
	},
	{
		name: 'SIERRA',
		role: 'DAMAGE',
		counteredBy: ['ZARYA', 'VENTURE', 'KIRIKO']
	}
] as const satisfies Hero[]

export const heroesByRole = Object.groupBy(heroes, h => h.role)
export const getHeroByName = (name: string): Hero | undefined =>
	heroes.find(h => h.name === name)
