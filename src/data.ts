export interface Hero {
	name: string
	role: (typeof roles)[number]
	counters: string[]
}

export const roles = ['TANK', 'DAMAGE', 'SUPPORT'] as const

export const heroes = [
	{
		name: 'ANA',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOMBRA', 'KIRIKO']
	},
	{
		name: 'ASHE',
		role: 'DAMAGE',
		counters: ['D.VA', 'WIDOW MAKER', 'LUCIO']
	},
	{
		name: 'BAPTISTE',
		role: 'SUPPORT',
		counters: ['D.VA', 'ECHO', 'ANA']
	},
	{
		name: 'BASTION',
		role: 'DAMAGE',
		counters: ['SIGMA', 'GENJI', 'ANA']
	},
	{
		name: 'BRIGITTE',
		role: 'SUPPORT',
		counters: ['RAMATTRA', 'PHARAH', 'MOIRA']
	},
	{
		name: 'CASSIDY',
		role: 'DAMAGE',
		counters: ['RAMATTRA', 'ASHE', 'BRIGITTE']
	},
	{
		name: 'DOOMFIST',
		role: 'TANK',
		counters: ['ORISA', 'SOMBRA', 'ZENYATTA']
	},
	{
		name: 'D.VA',
		role: 'TANK',
		counters: ['ZARYA', 'SYMMETRA', 'MOIRA']
	},
	{
		name: 'ECHO',
		role: 'DAMAGE',
		counters: ['D.VA', 'SOLDIER', 'BAPTISTE']
	},
	{
		name: 'GENJI',
		role: 'DAMAGE',
		counters: ['WINSTON', 'SYMMETRA', 'MOIRA']
	},
	{
		name: 'HANZO',
		role: 'DAMAGE',
		counters: ['REINHARDT', 'ECHO', 'MERCY']
	},
	{
		name: 'HAZARD',
		role: 'TANK',
		counters: ['ZARYA', 'ECHO', 'ANA']
	},
	{
		name: 'ILLARI',
		role: 'SUPPORT',
		counters: ['ORISA', 'ASHE', 'KIRIKO']
	},
	{
		name: 'JUNKER QUEEN',
		role: 'TANK',
		counters: ['ZARYA', 'MEI', 'KIRIKO']
	},
	{
		name: 'JUNKRAT',
		role: 'DAMAGE',
		counters: ['SIGMA', 'PHARAH', 'BAPTISTE']
	},
	{
		name: 'JUNO',
		role: 'SUPPORT',
		counters: ['WINSTON', 'ASHE', 'ZENYATTA']
	},
	{
		name: 'KIRIKO',
		role: 'SUPPORT',
		counters: ['WINSTON', 'JUNKRAT', 'ZENYATTA']
	},
	{
		name: 'LIFE WEAVER',
		role: 'SUPPORT',
		counters: ['D.VA', 'GENJI', 'ANA']
	},
	{
		name: 'LUCIO',
		role: 'SUPPORT',
		counters: ['WINSTON', 'SOMBRA', 'MOIRA']
	},
	{
		name: 'MAUGA',
		role: 'TANK',
		counters: ['SIGMA', 'HANZO', 'ANA']
	},
	{
		name: 'MEI',
		role: 'DAMAGE',
		counters: ['D.VA', 'HANZO', 'KIRIKO']
	},
	{
		name: 'MERCY',
		role: 'SUPPORT',
		counters: ['D.VA', 'CASSIDY', 'BAPTISTE']
	},
	{
		name: 'MOIRA',
		role: 'SUPPORT',
		counters: ['DOOMFIST', 'JUNKRAT', 'ANA']
	},
	{
		name: 'ORISA',
		role: 'TANK',
		counters: ['WINSTON', 'JUNKRAT', 'ANA']
	},
	{
		name: 'PHARAH',
		role: 'DAMAGE',
		counters: ['D.VA', 'ASHE', 'BAPTISTE']
	},
	{
		name: 'RAMATTRA',
		role: 'TANK',
		counters: ['ROADHOG', 'REAPER', 'ANA']
	},
	{
		name: 'REAPER',
		role: 'DAMAGE',
		counters: ['ORISA', 'PHARAH', 'ANA']
	},
	{
		name: 'REINHARDT',
		role: 'TANK',
		counters: ['RAMATTRA', 'JUNKRAT', 'BAPTISTE']
	},
	{
		name: 'ROADHOG',
		role: 'TANK',
		counters: ['ORISA', 'BASTION', 'ANA']
	},
	{
		name: 'SIGMA',
		role: 'TANK',
		counters: ['REINHARDT', 'REAPER', 'MOIRA']
	},
	{
		name: 'SOJOURN',
		role: 'DAMAGE',
		counters: ['ORISA', 'WIDOW MAKER', 'BAPTISTE']
	},
	{
		name: 'SOLDIER',
		role: 'DAMAGE',
		counters: ['RAMATTRA', 'TRACER', 'BAPTISTE']
	},
	{
		name: 'SOMBRA',
		role: 'DAMAGE',
		counters: ['WINSTON', 'TORBJORN', 'BRIGITTE']
	},
	{
		name: 'SYMMETRA',
		role: 'DAMAGE',
		counters: ['WINSTON', 'PHARAH', 'MOIRA']
	},
	{
		name: 'TORBJORN',
		role: 'DAMAGE',
		counters: ['RAMATTRA', 'MEI', 'ANA']
	},
	{
		name: 'TRACER',
		role: 'DAMAGE',
		counters: ['WINSTON', 'CASSIDY', 'BRIGITTE']
	},
	{
		name: 'VENTURE',
		role: 'DAMAGE',
		counters: ['D.VA', 'PHARAH', 'ANA']
	},
	{
		name: 'WIDOW MAKER',
		role: 'DAMAGE',
		counters: ['WINSTON', 'SOMBRA', 'KIRIKO']
	},
	{
		name: 'WINSTON',
		role: 'TANK',
		counters: ['ROADHOG', 'TORBJORN', 'BRIGITTE']
	},
	{
		name: 'WRECKING BALL',
		role: 'TANK',
		counters: ['ORISA', 'CASSIDY', 'ANA']
	},
	{
		name: 'ZARYA',
		role: 'TANK',
		counters: ['RAMATTRA', 'BASTION', 'MOIRA']
	},
	{
		name: 'ZENYATTA',
		role: 'SUPPORT',
		counters: ['RAMATTRA', 'SOMBRA', 'ANA']
	}
] as const satisfies Hero[]

export const heroesByRole = Object.groupBy(heroes, h => h.role)
export const getHeroByName = (name: string): Hero | undefined =>
	heroes.find(h => h.name === name)
