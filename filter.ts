/*// Type représentant un utilisateur
interface User {
    name: string;
    age: number;
  }
  
  // Fonction générique pour filtrer une liste en fonction de multiples critères
  function filterList<T>(list: T[], filters: ((item: T) => boolean)[]): T[] {
    return list.filter(item => filters.every(filter => filter(item)));
  }
  
  // Exemple d'utilisation avec une liste d'utilisateurs
  const users: User[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "John", age: 40 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 }
  ];
  
  // Définir les filtres
  const filters: ((user: User) => boolean)[] = [
    (user: User) => user.name.includes("John"), // Filtrer les noms contenant "John"
    (user: User) => user.age === 25            // Filtrer les utilisateurs ayant 25 ans
  ];
  
  // Appliquer les filtres
  const filteredUsers = filterList(users, filters);
  
  console.log("Liste originale :", users);
  console.log("Filtres :", filters);
  console.log("Résultat filtré :", filteredUsers);
  // Résultat attendu : [{ name: "John", age: 25 }]
  */