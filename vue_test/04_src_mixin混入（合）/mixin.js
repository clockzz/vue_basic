export const mixinName ={
  methods: {
    showName(){
      alert(this.name)
    }
  },
  mounted() {
    console.log('hello world')
  },
} 

export const mixinSecond={
  data() {
    return {
       x: 100,
       y: 200
    }
  },
}