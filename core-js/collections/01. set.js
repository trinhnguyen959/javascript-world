// set

const orderMenu = ['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'];
const orderSet = new Set(orderMenu);
console.log(orderSet);
console.log(new Set('trinhiiii'));
orderSet.delete('Pizza');
console.log(orderSet);

// unique arr
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

// count unique in string
console.log(new Set('adhuhdfqweuohfewuhfewu').size);
