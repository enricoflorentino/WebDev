<template>
    <div class="edit-drink container">
        <h2 v-if="drink">Edit {{drink.title}}</h2>
        <form @submit.prevent="editDrink">
        <div class="field title">
            <label for="title">Drink Title:</label>
            <input type="text" name="title" v-model="drink.title">
        </div>
        <div v-for="(ing, ind) in drink.ingredients" :key="ind" class="field">
            <label for="ingredient">Ingredient:</label>
            <input type="text" name="ingredient" v-model="drink.ingredients[ind]">
            <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
            </div>
        <div class="field add-ingredient">
            <label for="add-ingredient">Add an Ingredient</label>
            <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
        </div>
        <div class="field center-align">
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
            </div>
        <button class="btn pink">Update Drink</button>
    </form>
    </div>
</template>


<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditDrink',
    data () {
        return {
            drink: null,
            another: null,
            feedback: null
        }
    },
    methods: {
        editDrink(){
            if(this.drink.title) {
                this.feedback = null

                this.drink.slug = slugify(this.drink.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('Drinks').doc(this.drink.id).update({
                    title: this.drink.title,
                    ingredients: this.drink.ingredients,
                    slug: this.drink.slug
                }).then(() => {
                this.$router.push({name: 'Index'})
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.feedback = 'You must enter a drink title'
            }
        },
        addIng(){
            if (this.another){
                this.drink.ingredients.push(this.another)
                console.log(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = 'You must enter a value to add an ingredient'
            }
        },

        deleteIng(ing){
            this.drink.ingredients = this.drink.ingredients.filter(ingredient => {
                return ingredient != ing
            })
        }
    },
    created(){
        let ref = db.collection('Drinks').where('slug', '==', this.$route.params.drink_slug)

        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.drink = doc.data()
                this.drink.id = doc.id
            })
        })
    }
}


</script>

<style>
.edit-drink {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}

.edit-drink h2{
    font-size: 2em;
    margin: 20px auto;
}

.edit-drink .field {
    margin: 20px auto;
    position: relative;
}

.edit-drink .delete {
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
}
</style>