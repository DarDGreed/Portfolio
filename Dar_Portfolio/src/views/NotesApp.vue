<script setup>
import {ref} from 'vue';

  let showModal = ref(false);
  const newNote = ref("");
  const errorMessage = ref("");
  // const noteState = ref(false);
  const note = ref([]);
  function getRandomColor() {
    return "hsl("+ Math.random() * 360 +", 100%, 75%)";
  }
  const addNote = () => {
    if(newNote.value === "") {
      return
    } else if(newNote.value.length < 10) {
      return errorMessage.value = "Need atleast 10 characters"
    } else {
      note.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: getRandomColor(),
    });
    console.log(note.value);
    // newNote.value === "" ? showModal.value = true : 
    showModal.value = false;
    newNote.value = "";
    // noteState.value = true;
    errorMessage.value = "";
    }
  }
  const closeAddNote = () => {
    newNote.value = "";
    errorMessage.value = "";
    showModal.value = false;
  }

</script>

<template>
    <main>
        <div v-if="showModal" class="overlay">
            <div class="modal">
                <button class="exit" @click="closeAddNote">X</button>
                <textarea name="note" id="note" v-model.trim="newNote"></textarea>
                <p>{{ errorMessage }}</p>
                <button class="add" @click="addNote">Add note</button>
            </div>
        </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="notes in note" class="card" :style="{backgroundColor: notes.backgroundColor}">
          <!-- <button class="remove-note" @click="noteState = false">X</button> -->
          <p class="main-text">{{ notes.text }}</p>
          <p class="date">{{ notes.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
 main {
    height: 100vh;
    width: 100vw;
  }
  .container {
    max-width: 1000px;
    padding: 10p x;
    margin: 0 auto;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
    color: rgb(3, 139, 230);
  }
  header button {
    background-color: rgb(3, 139, 230);
    color: white;
    padding: 10px;
    cursor: pointer;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }

  .card {
    color: black;
    width: 225px;
    height: 225px;
    background-color: rgb(205, 195, 50);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    padding-top: 8px;
  }
  .date {
    font-size: 13px;
    font-weight: bold;
  }
  .main-text {
    font-weight: bold;
  }
  .cards-container {
    display:flex;
    flex-wrap: wrap;
  }
    .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.77;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal {
    width: 750px;
    border-radius: 30px;
    background-color: rgb(139, 222, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  #note {
    width: 75%;
    height: 125px;
    margin-top: 50px;
    border: 3px solid rgb(3, 139, 230);
    color: rgb(3, 139, 230);
    outline: none;
    font-weight: bold;
    font-size: large;
  }
  .add {
    width: 100px;
    height: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    font-weight: bolder;
    font-size: 15px;
    background-color: rgb(3, 139, 230);
    cursor: pointer;
    color: white;
    border: none;
  }
  .exit {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-left: 91%;
    margin-top: 15px;
    border: none;
    background-color: rgb(3, 139, 230);
    color: white;
    cursor: pointer;
  }
  .remove-note {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: none;
    background-color: rgb(3, 139, 230);
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-left: 90%;
  }
</style>