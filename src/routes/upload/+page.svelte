<form method="POST" enctype="multipart/form-data" use:enhance>
	<input name="image" type="file" accept="image/png,image/jpg">

	<button>
		Upload
	</button>
</form>

<script lang="ts">
	import { enhance } from '$app/forms'

	export let form
</script>
