<template>
	<view>
		<text class="text-light-muted font">{{title + ' '}}</text>
		<text class="text-light-muted font-sm">{{des}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			title:String,
			des: String,
		}
	}
</script>

<style>
</style>
