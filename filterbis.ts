// Fonction générique pour filtrer une liste en fonction de multiples critères
function filterList<T>(list: T[], filters: ((item: T) => boolean)[]): T[] {
    return list.filter(item => filters.every(filter => filter(item)));
  }
  
  // Exemple d'utilisation avec une liste de n'importe quel type (pas limité à `User`)
  
  // Liste d'exemples variés
  const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "John", age: 40 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 }
  ];
  
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Monitor", price: 300 },
    { id: 4, name: "Keyboard", price: 100 }
  ];
  
  // Exemple d'utilisation avec une liste d'utilisateurs
  const userFilters: ((user: { name: string; age: number }) => boolean)[] = [
    (user) => user.name.includes("John"), // Filtrer les noms contenant "John"
    (user) => user.age === 25            // Filtrer les utilisateurs ayant 25 ans
  ];
  
  // Exemple d'utilisation avec une liste de produits
  const productFilters: ((product: { id: number; name: string; price: number }) => boolean)[] = [
    (product) => product.name.includes("Phone"), // Filtrer les produits contenant "Phone"
    (product) => product.price < 1000            // Filtrer les produits ayant un prix inférieur à 1000
  ];
  
  // Appliquer les filtres à la liste des utilisateurs
  const filteredUsers = filterList(users, userFilters);
  
  // Appliquer les filtres à la liste des produits
  const filteredProducts = filterList(products, productFilters);
  
  console.log("Liste des utilisateurs filtrée :", filteredUsers);
  console.log("Liste des produits filtrée :", filteredProducts);
  