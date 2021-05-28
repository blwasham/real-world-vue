<template>
  <div class="pb-5">
    <img @click="saySomethingFunny" class="icon" :src="imgSrc" :alt="altText" />
    <span class="name">
      <slot></slot>
    </span>
  </div>
</template>
<script>
import _ from 'lodash'

function altText() {
  return `${this.name} icon`
}

function imgSrc() {
  return `/${this.name}.png`
}

function saySomethingFunny(event) {
  event.preventDefault()
  console.log('phrases', this.phrases)
  alert(`${this.name} ${_.sample(this.phrases)}`)
}

export default {
  computed: {
    altText,
    imgSrc
  },
  methods: {
    saySomethingFunny
  },
  props: {
    name: {
      type: String,
      default: 'crab'
    }
  },
  data: () => {
    return {
      phrases: [
        'does terrible kart wheels',
        'eats stinky cheese',
        'likes to run backwards',
        'loves pink gatorade at night',
        'never changes their socks',
        'favoriate food is rubber boots',
        'can only ride a bike backwards'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  float: left;
  width: 24px;
  padding-right: 4px;
}
.name {
  margin-left: 4px;
}
.pb-5 {
  padding: 0 0 5px 0;
}
</style>
