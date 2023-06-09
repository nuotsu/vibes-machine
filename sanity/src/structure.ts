import { StructureResolver } from 'sanity/desk'
import { singleton } from './builders'

const structure: StructureResolver = (S, context) => S.list()
	.title('Content')
	.items([
		singleton(S, 'Jewel Case', 'jewelCase').icon(() => '💽'),
	])

export default structure
