// components/ColumnChart.vue

<template>
  <div>
    <bar-chart :data="chartData" :options="options"></bar-chart>
  </div>
</template>

// components/ColumnChart.vue

<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>

