<template>
	<view>
		<text class="title-content">{{title + ' '}}</text>
		<text class="title-des">{{des}}</text>
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
