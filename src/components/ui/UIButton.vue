<script setup lang="ts"></script>

<template>
	<button class="UIButton"><slot></slot></button>
</template>

<style>
.UIButton {
	width: 90px;
	padding: 6px 12px;
	font-size: 15px;
	border-radius: 15px;
	background-color: transparent;
	border: solid 1px black;
}
</style>
