const app = Vue.createApp({
    data(){
        return {
            product: "Yoga Mat",
            brandName: "FitSpree",
            price: 25,
            onSale: true,
            details: ["20% polyester", "50% fiber", "30% jute"],
            variants: [{
                id: 2234,
                color: "Blue",
                url: "assets/blue-mat.jpg",
                stock: 0,
            },{
                id: 2235,
                color: "Gray",
                url: "assets/grey-mat.jpg",
                stock: 8,
            },{
                id: 2237,
                color: "Pink",
                url: "assets/pink-mat.jpg",
                stock: 15,
            }],
            quantity: 0,
            selectedVariant: 0,
            url: "https://www.amazon.com/Double-Sided-Professional-Workout-Pilates-Exercises/dp/B08CXZDYLL/ref=sr_1_3_sspa?crid=3RYX3MWRDWPJ0&dchild=1&qid=1613022081&sprefix=yoga%2B%2Caps%2C517&sr=8-3-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMUpZWUZMVVJOMFhLJmVuY3J5cHRlZElkPUEwNDM1NTQzTkJWV0NSVkJIVTQ4JmVuY3J5cHRlZEFkSWQ9QTAyNDU2NDQxOVZPT1ZJQTdYM1gyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1"
        }
    },
    methods: {
        addToCart(){
            this.quantity += 1;
        },
        removeFromCart(){
            if(this.quantity > 0) this.quantity -= 1;
        },
        updateVariant(index){
            this.selectedVariant = index;
        }
    },
    computed: {
        title(){
            return this.brandName + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].url;
        },
        inventory(){
            return this.variants[this.selectedVariant].stock;
        },
        onSaleDisplay(){
            if(this.inventory > 0 && this.onSale) return `${this.product} is on SALE!!!`
        }
    }
});