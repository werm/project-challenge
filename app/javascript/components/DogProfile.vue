<template>
	<div>
		<router-link :to="{ name: 'ShowDog', params: { id: info.id }}">
			<h4>{{ info.name }}</h4>
			<img :src="info.images[0]" alt="pupper profile pic" class="img-fluid" />
			<p class="text-muted">{{ info.description }}</p>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Dog',
	props: ['info']
}
</script>

<style>

</style>
