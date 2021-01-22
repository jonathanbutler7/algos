// interesting way of putting function in object

const person = {
  first: 'Jonathan',
  last: 'Butler',
  fullName() {
    return `${person.first} ${person.last}`;
  },
};

person.fullName();
