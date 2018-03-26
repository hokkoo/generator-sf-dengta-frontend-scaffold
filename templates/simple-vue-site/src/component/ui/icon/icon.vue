<template>
	<i class="icon" :class="iconClass" @click="handleClick"></i>
</template>

<script>
import {base as baseEvent} from '../../../javascript/config/event.json';
export default {
	name: 'icon',
	props: {
		name: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: 'md'
		}

	},
	methods: {
		handleClick(ev) {
			this.$emit(baseEvent.click, ev)
		}
	},
	computed: {
		iconClass() {
			return {
				[`icon-${this.name} icon-${this.size} icon-${this.name}-${this.size}`]: true
			}
		}
	}

}
</script>
