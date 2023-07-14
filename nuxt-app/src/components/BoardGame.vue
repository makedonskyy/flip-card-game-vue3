<template>
  <div class="grid grid-cols-8 gap-5 rounded-xl border-2 border-white mx-16 p-6">
    <div v-for="item in cards" :key="item.id" class="h-full p-1 w-full rounded-xl border-2 border-white">
      <img
        :src="item.open ? item.img : '/images/13.png'"
        alt=""
        class="h-fit w-fit object-cover"
        @click="flipCard(item)"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'

interface Card {
  id: number;
  name: string;
  img: string;
  open: boolean;
}

const cards: Ref<Card[]> = ref([
  { id: 1, name: 'Sun', img: '/images/1.png', open: false },
  { id: 2, name: 'Mercury', img: '/images/2.png', open: false },
  { id: 3, name: 'Venus', img: '/images/3.png', open: false },
  { id: 4, name: 'Earth', img: '/images/4.png', open: false },
  { id: 5, name: 'Mars', img: '/images/5.png', open: false },
  { id: 6, name: 'Jupiter', img: '/images/6.png', open: false },
  { id: 7, name: 'Saturn', img: '/images/7.png', open: false },
  { id: 8, name: 'Uranus', img: '/images/8.png', open: false },
  { id: 9, name: 'Neptune', img: '/images/9.png', open: false },
  { id: 10, name: 'Pluto', img: '/images/10.png', open: false },
  { id: 11, name: 'Moon', img: '/images/11.png', open: false },
  { id: 12, name: 'Solar System', img: '/images/12.png', open: false }
])

const openCards: Ref<Card[]> = ref([])
const matchedCards: Ref<Card[]> = ref([])

const setRandomCards = () => {
  const doubledCards: Ref<Card[]> = ref([])
  // создаем дубляжи карточек
  cards.value.forEach((card) => {
    const newCard = { ...card, id: card.id + cards.value.length }
    doubledCards.value.push(card, newCard)
  })
  // делаем
  cards.value = doubledCards.value.sort(() => Math.random() - 0.5)
}

const flipCard = (card: Card) => {
  if (openCards.value.length < 2 && !matchedCards.value.includes(card)) {
    card.open = !card.open
    openCards.value.push(card)

    if (openCards.value.length === 2) {
      if (openCards.value[0].name === openCards.value[1].name) {
        matchedCards.value.push(...openCards.value)
        openCards.value = []
      } else {
        setTimeout(() => {
          openCards.value.forEach((card) => {
            card.open = false
          })
          openCards.value = []
        }, 1000)
      }
    }
  }
}

onMounted(() => {
  setRandomCards()
})
</script>

<style scoped>
</style>
