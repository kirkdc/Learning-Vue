const app = new Vue({
  el: "#app",
  data: {
    message: "My first vue app!!!",
    message2: "YAY!!!"
  }
});

app.message2 = "This is awesome!";

// Directives are always prefixed to v- to indicate that they are special attributes in view. They apply reactive behaviour to the dom.
const directives = new Vue({
  el: "#directives",
  data: {
    //the v-if span will only render if the seen property is true.
    seen: true,
    //the v-for used here to display a list of items using data from an array todos is the array here. You have to *"todo in todos"* is the array with a text key
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" }
    ]
  }
});

const userInteraction = new Vue({
  el: "#userInteraction",
  data: {
    message: "Hello Vue.js!",
    userchange: "CHANGE ME UP!"
  },
  methods: {
    //the reverseMessage is linked to the vclick="reverseMessage" in html
    reverseMessage: function() {
      // this.message refers to the {{ message }} in the html file
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

directives.seen = false;
directives.todos.push({ text: "added a new item" });

//COMPONENTS IN VUE

Vue.component("todo-item", {
  //its essentially a vue instance with predifined options. Pass in the name(todo-item) as the first param and optionsz{} as the second

  //here we add todo as a prop
  props: ["todo"],
  //todo is passed as a prop and so we have access to it inside the template below
  //the v-bind:todo='item' passes the item down to the component as the todo prop. Our component accepts the todo prop above.
  template: "<li>{{ todo.text }}</li>"
});

var components = new Vue({
  el: "#components",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  }
});
