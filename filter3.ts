// Type représentant un utilisateur
interface User {
    name: string;
    age: number;
  }
  
  // Fonction générique pour filtrer une liste en fonction de multiples critères
  function filterList<T>(list: T[], filters: ((item: T) => boolean)[]): T[] {
    return list.filter(item => filters.every(filter => filter(item)));
  }
  
  // Fonction pour lire des données depuis un fichier JSON
  import * as fs from 'fs';
  function readDataFromFile<T>(filePath: string): T[] {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }
  
  // Fonction pour générer un log de la requête
  function generateLog(filters: ((item: User) => boolean)[]): string {
    const filterDescriptions: string[] = [];
  
    filters.forEach(filter => {
      if (filter.toString().includes('name.includes')) {
        filterDescriptions.push('"name" LIKE "%John%"');
      }
      if (filter.toString().includes('age === 25')) {
        filterDescriptions.push('"age" = 25');
      }
    });
  
    return `Filter: WHERE ${filterDescriptions.join(' AND ')}`;
  }
  
  // Exemple d'utilisation avec une liste d'utilisateurs
  const users: User[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "John", age: 40 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 }
  ];
  
  // Exemple d'utilisation avec un fichier JSON
  const filePath = './users.json'; // Remplacez par le chemin de votre fichier JSON
  let dataSource: User[];
  
  if (fs.existsSync(filePath)) {
    console.log("Lecture des données depuis le fichier JSON...");
    dataSource = readDataFromFile<User>(filePath);
  } else {
    console.log("Utilisation des données en RAM...");
    dataSource = users;
  }
  
  // Définir les filtres
  const filters: ((user: User) => boolean)[] = [
    (user: User) => user.name.includes("John"), // Filtrer les noms contenant "John"
    (user: User) => user.age === 25            // Filtrer les utilisateurs ayant 25 ans
  ];
  
  // Générer et afficher le log de la requête
  const log = generateLog(filters);
  console.log(log);
  
  // Appliquer les filtres
  const filteredUsers = filterList(dataSource, filters);
  
  console.log("Données source :", dataSource);
  console.log("Filtres :", filters);
  console.log("Résultat filtré :", filteredUsers);
  // Résultat attendu : [{ name: "John", age: 25 }]
  