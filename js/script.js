// // Напиши скрипт, который, для объекта user, последовательно:

// // добавляет поле mood со значением 'happy'
// // заменяет значение hobby на 'skydiving'
// // заменяет значение premium на false
// // выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const array = Object.keys(user);
// for(const arr of array){
//     console.log(`${arr}:${user[arr]}`);
// };
// console.log(array);Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);
  
//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);
  
//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };
  
//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
//   };
  
//   invokeInventoryAction('Medkit', inventory.add.bind(inventory));
//   // Invoking action on Medkit
//   // Adding Medkit to inventory
  
//   console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
//   invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
//   // Invoking action on Gas mask
//   // Removing Gas mask from inventory
  
//   console.log(inventory.items); // ['Knife', 'Medkit']
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// 
const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onError) {
      if(this.pizzas.includes(pizzaName)){
      return onSuccess (pizzaName);
      } 
      return onError(`В ассортименте нет пиццы с названием ${pizzaName} пиццы'`)
      }}
   
  
  // Пиши код выше этой строки
  
  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }
  
  // Колбэк для onError
  function onOrderError(error) {
    return `Ошибка! ${error}`;
  }
  
  // Вызовы метода с колбэками
  pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
  pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
  pizzaPalace.order('Биг майк', makePizza, onOrderError);
  pizzaPalace.order('Венская', makePizza, onOrderError);
