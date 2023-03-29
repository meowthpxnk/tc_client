export default {
    props:{
        id: Number,
    },
    computed:{
        item(){
            try {
                return this.$store.getters.getCartItemById(this.id)
            } catch {
                return null
            }
        },
        amount(){
            if (this.item){
                return this.item.amount
            }
            return 0
        },
    },
    methods:{
        addToCart(){
            if (this.amount <= 0) {
                this.$store.commit("addToCart", this.id)
            }
        },
        removeItem(){
            this.$store.commit("removeItem", this.id)
        },
        addItem(){
            this.$store.commit("addItem", this.id)
        }
    }
}