const obj = {
  name: "himanshu",
  age: 12,
  greet: function () {
    console.log("hello" + this.name);
  },
};

obj.greet();
