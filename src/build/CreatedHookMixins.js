export default {
  async created() {
    try {
      await fetch("http://localhost:3000/teacherClasslist")
        .then((res) => res.json())
        .then((data) => (this.teacherClasslist = data));
    } catch (err) {
      console.log(err.message);
    }
  },
};
