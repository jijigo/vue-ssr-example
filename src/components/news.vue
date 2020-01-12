<template>
	<p>now date: {{ date }}</p>
</template>

<script>
export default {
	name: 'news',

	data () {
		return {
			date: new Date()
		}
	},

	created () {
		console.log('created', this.$route)
	}
}
</script>

<style>

</style>