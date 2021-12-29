// Membuat object literal
const user = {
    name: "Zhafia Rabbani Amalia",
    age: 19,
    major: "Informatics",
  };
  
  /**
   * Object Destructing.
   * Destructing object berdasarkan key.
   */
  const { name, age, major } = user;
  
  console.log(name, age, major);