
let vm = new Vue( {
  el: "#app",
  data: {
    // number: 0,
    // changeCount: 0

    // visible: true

    x: ['', ''],

    b: '',

    c: ''

  },
  methods: {
    // increase: function() {
    //   this.number += 1
    // },
    // decrease: function() {
    //   this.number -= 1
    // }
    reshenie: function() {
      let b = this.b, c = this.c;
      let disc = b*b - 4*c;
      if(disc >= 0) {
        let x1 = (-b - Math.sqrt(disc)) / 2
        let x2 = (-b + Math.sqrt(disc)) / 2
        this.x = [x1, x2];
      } else {
        this.x = ['Решений нет', 'Решений нет']
      }

    }
  },
});

// vm.$watch("number", function(newValue){
//   console.log(newValue);
//   this.changeCount += 1;
// })