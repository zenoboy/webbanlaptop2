<template>
    <div>
        <div style="margin-top: 50px;" id="nav1">
          <ul>
            <li><a href="#">Dell</a>
              <ul>
                
                <v-row>
                  <v-col>
                    <p>Phân loại</p>
                <li><a href="#">Dell1</a></li>
                <li><a href="#">Dell2</a></li>
                <li><a href="#">Dell3</a></li>
                <li><a href="#">4</a></li>

                  </v-col>
                  <v-col>
                    <p>Khoảng giá</p>
                <li><a href="#">Dưới 10tr</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                  </v-col>
                </v-row>
              </ul>
            </li>
            <li><a href="#">HP</a></li>
            <li><a href="#">Asus</a>
              <ul>
                
                <v-row>
                  <v-col>
                    <p>Phân loại</p>
                <li><a href="#">Dell1</a></li>
                <li><a href="#">Dell2</a></li>
                <li><a href="#">Dell3</a></li>
                <li><a href="#">4</a></li>

                  </v-col>
                  <v-col>
                    <p>Khoảng giá</p>
                <li><a href="#">Dưới 10tr</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                <li><a href="#">Từ 10 - 15 triệu</a></li>
                  </v-col>
                </v-row>
              </ul>
            </li>
            <li><a href="#">Acer</a></li>
          </ul>
        </div>
    </div>
</template> 

<script>
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
        ]
    }
  },
  methods: {
        mouseover: function () {
            this.isOpen = true;
        },
        mouseleave: function () {
            this.isOpen = false;
        }
    }
}
</script>

<style>

#nav1 {
    max-width: 200px;    
    background: #007db9;
}


#nav1 > ul {
    
    margin: 0;
    padding: 0;
    list-style-type: none;
    position: relative;
}

#nav1 > ul > li {
    display: inline-block;
    width: 100%;
  }
  #nav1 > ul > li > ul {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    background-color: #f9f9f9;
    padding: 0;
    width: 600px;
    white-space: nowrap;
    transition: 0.5s;
  }
  #nav1 ul li:hover ul {
    display: block;
    
  }
  #nav1 ul li ul li {
    display: block; 
   
    background: #007db9;
  }
  #nav1 ul li ul li a {
    display: block;
    padding: 20px;
    color: #fff;
  }

#nav1 > ul > li > a {
    display: block;
    height: auto;
    padding: 20px;
    color: #fff;
    text-decoration: none;
}


</style>