<template>
  <div class="w-full bg-primary-dark mt-12 lg:mt-0 text-primary-light">
    <div class="container mx-auto min-h-container pb-6">
      <div class="display-title hidden xl:flex justify-between items-end">
        <h2 class="uppercase text-6xl flex items-center">{{ selected.title }}</h2>
        <span class="text-1xl mr-2 text-secondary-grey uppercase">preview</span>
      </div>
      <div class="display hidden xl:block">
        <PortfolioPreview :work="selected" />
      </div>
      <div class="recent-works-title flex items-end justify-start">
        <h2 class="uppercase text-4xl">recent works</h2>
      </div>
      <PortfolioWork
        v-for="work in works" 
        :work="work" 
        :active="selected === work" 
        :key="work.id" 
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [],
      selected: null
    }
  },
  async fetch() {
    const data = await this.$content('works').sortBy('index', 'asc').fetch();
    this.works = data.works
    this.selected = this.works[0]
  },
  methods: {
    select(id) {
      this.selected = this.works.find(work => work.id === id)
    }
  }
}
</script>

<style scoped>
  .container {
    padding-top: 64px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
  }

  @media (max-width: 1280px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .display-title { grid-area: 1 / 1 / 2 / 5; }
  .display { grid-area: 2 / 1 / 8 / 5; }
  .recent-works-title { grid-area: 1 / 5 / 2 / 7; }
  .work-card-1 { grid-area: 2 / 5 / 4 / 7; }
  .work-card-2 { grid-area: 4 / 5 / 6 / 7; }
  .work-card-3 { grid-area: 6 / 5 / 8 / 7; }
</style>