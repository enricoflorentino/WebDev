<template>
  <div class="index container">
    <div class="card" v-for="drink in drinks" :key="drink.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteDrink(drink.id)">delete</i>
      <h2 class="indigo-text">{{drink.title}}</h2>
      <ul class="ingredients">
        <li v-for="(ing, ind) in drink.ingredients" :key="ind">
          <span class="chip"> {{ ing }}</span>
        </li>
      </ul>
    </div>
    <span class="btn-floating btn-large halfway-fab pink" >
      <router-link :to="{name: 'EditDrink', params: {drink_slug: drink.slug}}"><i class="material-icons edit">edit</i></router-link>
    </span>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  data () {
    return {
      drinks: []
    }
  },
  methods: {
    deleteDrink(id){
      db.collection('Drinks').doc(id).delete().then(() => {
        this.drinks = this.drinks.filter(drink=>{
          return drink.id !== id
        })
      })
      }
  },
  created(){
    db.collection('Drinks').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let drink = doc.data()
        drink.id = doc.id
        this.drinks.push(drink)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;

}

.index .ingredients {
  margin: 30px auto;
}

.index .ingredients li{
  display: inline-block;
}

.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
