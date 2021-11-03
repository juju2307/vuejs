const app = Vue.createApp({
    data() {
        return {
            name: "Pizza Royale",
            price: 12,
            image: "assets/images/Pizza1.jpg",
            sale: true,
            notAvailable: false,
            ingredients: [
                "Olives",
                "Poulet Rôti",
                "Bacon",
                "Poivrons",
                "Champignons",
                "Mozzarella",
                "Oeuf",
            ],
            sauces: [
                {
                   id: 1001,
                   type: "Sauce Tomate",
                   color: "#db4006",
                   image: "assets/images/pizza2.jpg",
                },
                {
                
                   id: 1002,
                   type: "Crème Fraiche",
                   color: "#e9cb8f",
                   image: "assets/images/pizza3.jpg",
                }
            ],
            energy: {
                Kcal: 242,
                Glucides: 27.99,
                Fibres: 1.75,
                Protéines: 9.62,
                Sel: 11.
            },
            totalPrice: 0,
            nbrProduct: 0,
            promo:"",
        };
    },
    methods: {
        addProduct() {
            if(this.sale) {
                this.nbrProduct += 1;
                this.totalPrice = (this.price -5) *this.nbrProduct
            } else{
            this.nbrProduct += 1;
            this.totalPrice = this.price *this.nbrProduct
            }
        },
        updateImage(newLinkImage){
            this.image = newLinkImage;
        }
    }
});