<template>
  <main class="about">
    <header>
        <h1>Search Student Class List</h1>
    </header>
    <form>
      <label>Student Name:</label>
      <select type="studentId" v-model="studentId"  required>
      </select>
      <!-- <div v-if="text2Error" class="error">{{ text2Error }}</div> -->
      <label>Student Grade:</label>
      <select v-model="grade" required>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
      </select>
      <label>Student Mark:</label>
      <select v-model="mark" required>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
        <option value="other">Other</option>
        <option value="not-complete">Not Completed</option>
      </select>
      <div class="terms">
        <input type="checkbox" required>
        <label>All Options are Checked</label>
      </div>
      <div class="submit">
        <button>Search Classlist</button>
      </div>
    </form>
    <section>

    </section>
  </main>
</template>

<script>
</script>


<style>

main {
    padding: 8rem 2.5rem;
    display: flex;
    flex-direction: row;
    position: relative;
    height: 100vh;
}

label {
  width: 20vh;
}

header {
    font-size: 1.5rem;
    font-style: bold;
}

form {
  display: flex;
  flex-direction: row;
  border-left: .25rem #add solid;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 50%);
}
</style>