<template>
  <div class="grid grid-cols-8 gap-5 rounded-xl border-2 border-white mx-16 p-6">
    <div v-for="item in cards" :key="item.id" class="h-full p-1 w-full rounded-xl border-2 border-white">
      <img
        :src="item.open ? item.img : '/images/13.png'"
        alt=""
        :class="{
          'animate-flip-in-x': item.open,
          'animate-flip-out-x': !item.open && !matchedCards.includes(item)
        }"
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
  { id: 1, name: 'Sun', img: '/images/1.png', open: true },
  { id: 2, name: 'Mercury', img: '/images/2.png', open: true },
  { id: 3, name: 'Venus', img: '/images/3.png', open: true },
  { id: 4, name: 'Earth', img: '/images/4.png', open: true },
  { id: 5, name: 'Mars', img: '/images/5.png', open: true },
  { id: 6, name: 'Jupiter', img: '/images/6.png', open: true },
  { id: 7, name: 'Saturn', img: '/images/7.png', open: true },
  { id: 8, name: 'Uranus', img: '/images/8.png', open: true },
  { id: 9, name: 'Neptune', img: '/images/9.png', open: true },
  { id: 10, name: 'Pluto', img: '/images/10.png', open: true },
  { id: 11, name: 'Moon', img: '/images/11.png', open: true },
  { id: 12, name: 'Solar System', img: '/images/12.png', open: true }
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
  // делаем сортировку
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

const showAllCards = () => {
  setTimeout(() => {
    cards.value.forEach((card) => {
      card.open = false
    })
  }, 3000)
}

onMounted(() => {
  showAllCards()
  setRandomCards()
})
</script>

<style scoped>
.animate-flip-in-x {
  animation: flip-in-x 0.5s ease-out;
}

.animate-flip-out-x {
  animation: flip-out-x 0.5s ease-out;
}

@keyframes flip-in-x {
  0% {
    transform: perspective(400px) rotateY(-90deg);
    opacity: 0;
  }
  100% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes flip-out-x {
  0% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: perspective(400px) rotateY(-90deg);
    opacity: 0;
  }
}
</style>
