new Vue({
    el: '#app',
    
    data () {
      return {
        img: "https://static.platzi.com/static/images/footer/logo.png",
        alt: "Platzi icon",
        courses: [],
        title: "",
        time: 0,
      }
    },
    
    computed: {
        countTotalTime(){
            let totalTime = 0;
            if(this.courses.length > 0){
                for(let i = 0; i<this.courses.length; i++){
                    totalTime += Number(this.courses[i].time)
                }
                return totalTime
            }
            return 0
        }
    },
    
    methods: {
        addCourse(){
            course = {
                title: this.title,
                time: this.time
            }
            
            this.courses.push(course)  
        },
        resetInput() {
            this.title = "";
            this.time = 0;
          },
    }
  })