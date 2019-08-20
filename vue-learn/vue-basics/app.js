new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Sir',
        url: "https://www.youtube.com",
        classes: ['one', 'two'],
        wage: 10,
        favColor: 'blue',
        find: "me",
        showName: true,
        fruits: ["banana", "apple", "orange", "strawberry"],
        employees: [
            {name: "Ryan", age: 23, job: "Soft Dev"},
            {name: "Tim", age: 13, job: "Data"},
            {name: "John", age: 19, job: "QA"}
        ]
    },
    methods: {
        greet(time){
            return `Hello and good ${time}, ${this.name} `
        },
        changeWage(amount) {
            this.wage += amount
        },

        logEvent(e) {
            console.log(e)
        },
        updateColor(e) {
            this.favColor = e.target.value
        },
        logMessage(){
            console.log("hello world")
        },
        showToggle() {
            this.showName = !this.showName
        }
    }
})