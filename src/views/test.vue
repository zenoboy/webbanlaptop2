<template>
  <header>
        <nav id="nav">
            <ul>
                <li
                    v-for="(item,index) in items " :key="index">
                    <a :href="item.url"
                       v-if="!item.children">
                        {{ item.name }}
                    </a>
                    <span
                        v-else
                        v-on:mouseover="mouseover"
                        v-on:mouseleave="mouseleave">
                        {{ item.name }}
                        
                        <ul class=" dropdown"
                           :class="{ isOpen }">
                            <li
                                v-for="(child, index) in item.children" :key="index">
                                <a :href="child.url">
                                    {{ child.name }}
                                </a>
                            </li>
                        </ul>
                    </span>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      isOpen: false,
        items: [
            {
                url: '#home',
                name: 'Home'
            },
            {
                url: '#about',
                name: 'About'
            },
            {
                url: '#service',
                name: 'Service',
                children: [
                    {
                        url: '#service1',
                        name: 'Service1'
                    },
                    {
                        url: '#service2',
                        name: 'Service2'
                    },
                    {
                        url: '#service3',
                        name: 'Service3'
                    },
                ]
            },
            {
                url: '#contact',
                name: 'Contact'
            }
        ],
        category:[

        ]
    }
  },
  methods:{
    mouseover: function () {
      this.isOpen = true;
    },
    mouseleave: function () {
      this.isOpen = false;
    },
    getCat(){
      axios.get('https://localhost:44367/api/Categorys/Categorys')
      .then(response=>{
        this.category = response.data
      })
    }
  }
}
</script>

<style>
header {
    width: 100%;
    background-color: #007db9;
}

#nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
}

#nav > ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

#nav > ul > li > a {
    display: block;
    height: auto;
    padding: 20px;
    color: #fff;
    text-decoration: none;
}

#nav > ul > li > span {
    position: relative;
    display: block;
    height: auto;
    padding: 20px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

#nav > ul > li > span:after {
    content: '▼';
    display: inline-block;

}
ul .dropdown{
  position: absolute;
}
.dropdown {
    
    top: 100%;
    left: 0;
    display: none;
    padding: 0;
    list-style-type: none;
    background-color: #007db9;
}

.dropdown li {
    width: 250px;
    border-bottom: 1px solid #fff;
}

.dropdown li a {
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
}

.isOpen {
    display: block;
}
</style>