app.component("product", {
    inheritAttrs: false,
    template: `
    
            <div class="product-image">
                <img v-bind:src="image"/>
            </div>
            <div class="product-description">
                <h1>{{title}}
                <img v-show="showBestSellerImage()" class="img-best-seller" src="assets/images/bestseller.jpg"/>
                </h1>
                <p class="indispo" v-show="notAvailable">Momentanément indisponible</p>
                <p v-if="sale">
                    <span class="sale">{{price}}</span>
                    <span class="new-price">{{price -5}}</span>
                </p>
                <p v-else>
                    <span class="price">{{price}}</span>
                </p>
            </div>
        
   
        <div class="ingredients">
            <strong>Ingrédients:</strong>
            <div>
                <span v-for="(ingredient, index) in ingredients" :key="index">{{ingredient + ","}}</span>
            </div>
            <br>
        </div>
        <div class="sauces">
            <strong>Sauces au choix</strong>
            <ul>
                <li v-for="sauce in sauces" :key="sauce.id"
                 @mouseover="updateImage(sauce.image)"
                 v-bind:style="{backgroundColor : sauce.color}">{{sauce.type}}</li>
            </ul>
        </div>

        <div class="valeurs">
            <strong>Valeurs nutritionnelles pour 100 grammes</strong>
            <ul>
                <li v-for="(value, name, index) in energy" :key="index">{{name}} : {{value}}</li>
            </ul>
        </div>
        <button v-bind:class="{notActiveBtn : notAvailable}" @click="addProduct()" v-bind:disabled="notAvailable">Ajouter à ma commande</button>
    `,
    props: {
        bestseller: {
            type: Boolean,
        }
    },
    data(){
        return{
            product: "Pizza",
            type: "Oriental",
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
        }
    },
    mounted(){
        console.log(this.bestseller)
    },

    methods: {
        addProduct() {
            if(this.sale) {
                this.$emit("add-product", this.price - 5)
            } else{
                this.$emit("add-product", this.price)
            }
          
        },
        updateImage(newLinkImage){
            this.image = newLinkImage;
        },
        showBestSellerImage() {
            if(this.bestseller == true) {
                return  true
                 
            } else {
                false;
            }
        }

    },

    computed: {
        title() {
            return this.product + "" + this.type;
        }
    }
    
})