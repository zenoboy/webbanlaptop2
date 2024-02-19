<template>
  <side-bar-admin-1/>
  <top-bar-admin-1/>
    <div>
    <Line id="sadas" :data="lineChartData" :options="lineChartOptions" />
    </div>
    
    <div>
    <Bar id="aaaaa" :data="barChartData" :options="barChartOptions" />
    </div>
    
    
</template>
  
<script>
import SideBarAdmin1 from '@/components/SideBarAdmin1.vue';
import TopBarAdmin1 from '@/components/TopBarAdmin1.vue';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement    
} from 'chart.js'
import { Line, Bar } from 'vue-chartjs'
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
)
  
export default {
  name: 'Dashboard',
  components: {
    Line , Bar, SideBarAdmin1, TopBarAdmin1
  },
  data() {
    return {
      lineChartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
        {
          label: 'Data One',
          backgroundColor: 'transparent',
          borderColor: "#FC2525",
          data: [40, 39, 10, 40, 39, 80, 40],
          pointBackgroundColor: '#FC2525',
        }
        ]},
        lineChartOptions: {
          responsive: true,
          maintainAspectRatio: false
        },
  
        barChartData : {
          labels: ['January', 'February', 'March'],
          datasets: [{ data: [10, 30, 45] }],
        },
        barChartOptions : {
          responsive: true,
          maintainAspectRatio: false
        },
    }
  }
}  
</script>
  