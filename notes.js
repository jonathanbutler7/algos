// interesting way of putting function in object

const person = {
  first: 'Jonathan',
  last: 'Butler',
  fullName() {
    return `${person.first} ${person.last}`;
  },
};

person.fullName();

// with get and set keywords added
const person = {
    first: 'Jonathan',
    last: 'Butler',
    get fullName() {
      return `${person.first} ${person.last}`;
    },
    set fullName(value) {
      const parts = value.split(' ');
      this.first = parts[0]
      this.last = parts[1]
    }
  };
  person.fullName = 'tim jenkins'
  person