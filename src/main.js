const app = Vue.createApp({
    data() {
        return {
            product: "Pizza",
            type: "Oriental",
            totalPrice: 0,
            nbrProduct: 0,
            promo:"",
            bestSellerProduct: false,
        };
    },
    methods: {
        addCart(price) {
            this.nbrProduct += 1;
            this.totalPrice = price * this.nbrProduct;
        }
    },
    computed: {
        title() {
            return this.product + "" + this.type;
         }
    }
});