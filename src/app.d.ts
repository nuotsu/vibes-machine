import type { SanityImageAssetDocument } from '@sanity/client'

// See https://kit.svelte.dev/docs/types#app

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace Sanity {
		interface DB {
			jewelCase: Image[]
		}

		type Image = SanityImageAssetDocument
	}
}

export {}
