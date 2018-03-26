<template>
	<div class="app clearfix" v-loading="loading">
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: 'app',
	props: {
	},
	data() {
		return {
			loading: false
		}
	},
	methods: {

	},
	computed: {

	}
}
</script>
<style type="text/css">

</style>