app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <h2>{{ title }}</h2>
        <h3 v-show="onSale" style="color: rebeccapurple;">{{ onSaleDisplay }}</h3>

        <img v-bind:src="image" style="width: 300px;" :class="{ outOfStockImg: inventory<1 }">

        <p v-if="inventory > 10" style="color: green;">In stock! Grab your {{product}} now!</p>
        <p v-else-if="inventory > 0 && inventory <= 10" style="color: yellow;">Almost sold out!</p>
        <p v-else="inventory" style="color: red;">Out of stock:(</p>
        <hr>

        <p>Shipping: {{shipping}}</p>

        <h4>Desciption:</h4>

        <product-details :details="details"></product-details>

        <ul class="color-parent">
            <div 
                v-for="(variant, index) in variants"
                :data-key="variant.id"
                :style="{ backgroundColor: variant.color }"
                class="color-circle"
                @mouseover="updateVariant(index)">
            </div>
        </ul>

        <p><b>Price: $ {{ price }}</b></p>

        <button v-on:click="addToCart" :class="{ disabledButton: inventory<1 }" :disabled="inventory<1">Add to Cart</button>
        <button @click="removeFromCart" :class="{ disabledButton: inventory<1 }" :disabled="inventory<1">Remove from Cart</button>
        <hr>

        <button><a :href="url">Buy from Amazon</a></button>
    </div>`,
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
            selectedVariant: 0,
            url: "https://www.amazon.com/Double-Sided-Professional-Workout-Pilates-Exercises/dp/B08CXZDYLL/ref=sr_1_3_sspa?crid=3RYX3MWRDWPJ0&dchild=1&qid=1613022081&sprefix=yoga%2B%2Caps%2C517&sr=8-3-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMUpZWUZMVVJOMFhLJmVuY3J5cHRlZElkPUEwNDM1NTQzTkJWV0NSVkJIVTQ4JmVuY3J5cHRlZEFkSWQ9QTAyNDU2NDQxOVZPT1ZJQTdYM1gyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1"
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        removeFromCart(){
            if(this.cart > 0) this.cart -= 1;
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
        },
        shipping(){
            if(this.premium){
                return `Free`;
            }
            else {
                return `$ 2.99`;
            }
        }
    }
})