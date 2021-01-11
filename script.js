var app = new Vue({
  el: '#app',
  data: {
    placeholderSurname: "Введите фамилию",
    placeholderName: "Введите имя",
    inputValueSurname: "",
    inputValueName: "",
    canSend: false,
    isDisabled: true,
    notes: [],
  },

  methods: {
    addNewNote() {
      if (this.inputValueName !== "" && this.inputValueSurname !== "") {
        this.notes.push(
          `${cFirstLet(this.inputValueSurname)} ${cFirstLet(
            this.inputValueName
          )}`
        );
        this.inputValueName = "";
        this.inputValueSurname = "";
      }
    },
  },

  watch: {
    inputValueName(value) {
      if (value.length > 0 && this.inputValueSurname.length > 0) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },

    inputValueSurname(value) {
      if (value.length > 0 && this.inputValueName.length > 0) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },  
});

function cFirstLet(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

