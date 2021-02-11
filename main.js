const app = Vue.createApp({
    data(){
        return {
            product: "Yoga Mat",
            price: 25,
            inventory: 8,
            onSale: true,
            details: ["20% polyester", "50% fiber", "30% jute"],
            variants: [{
                id: 2234,
                color: "Blue"
            },{
                id: 2235,
                color: "Grey"
            },{
                id: 2237,
                color: "Pink"
            }],
            image: "assets/grey-mat.jpg",
            url: "https://www.amazon.com/Double-Sided-Professional-Workout-Pilates-Exercises/dp/B08CXZDYLL/ref=sr_1_3_sspa?crid=3RYX3MWRDWPJ0&dchild=1&qid=1613022081&sprefix=yoga%2B%2Caps%2C517&sr=8-3-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMUpZWUZMVVJOMFhLJmVuY3J5cHRlZElkPUEwNDM1NTQzTkJWV0NSVkJIVTQ4JmVuY3J5cHRlZEFkSWQ9QTAyNDU2NDQxOVZPT1ZJQTdYM1gyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1"
        }
    }
});