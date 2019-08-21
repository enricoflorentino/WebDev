<template>
<div class="add-drink container">
    <h4 class="center-align indigo-text">Add New Drink</h4>
    <form @submit.prevent="addDrink">
        <div class="field title">
            <label for="title">Drink Title:</label>
            <input type="text" name="title" v-model="title">
        </div>
        <div v-for="(ing, ind) in ingredients" :key="ind" class="field">
            <label for="ingredient">Ingredient:</label>
            <input type="text" name="ingredient" v-model="ingredients[ind]">
            <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
            </div>
        <div class="field add-ingredient">
            <label for="add-ingredient">Add an Ingredient</label>
            <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
        </div>
        <div class="field center-align">
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
            </div>
        <button class="btn pink">Add Drink</button>
    </form>
</div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
    name: 'AddDrink',
    data() {
        return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null,
            slug: null

        }
    },
    methods: {
        addDrink(){
            if(this.title) {
                this.feedback = null

                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('Drinks').add({
                    title: this.title,
                    ingredients: this.ingredients,
                    slug: this.slug
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
                this.ingredients.push(this.another)
                console.log(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = 'You must enter a value to add an ingredient'
            }
        },

        deleteIng(ing){
            this.ingredients = this.ingredients.filter(ingredient => {
                return ingredient != ing
            })
        }
    }
}
</script>

<style>
.add-drink {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}

.add-drink h2{
    font-size: 2em;
    margin: 20px auto;
}

.add-drink .field {
    margin: 20px auto;
    position: relative;
}

.add-drink .delete {
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
}
</style>