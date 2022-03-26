<script setup lang="ts"></script>

<template>
	<div class="UIFlexBox">
		<slot></slot>
	</div>
</template>

<style>
.UIFlexBox {
	display: flex;
	justify-content: space-between;
	width: 300px;
	margin: 0px auto;
	padding: 30px 0px;
}
</style>
