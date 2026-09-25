import { Receta } from '../models/receta';

export const RECETAS: Receta[] = [

  // =========================
  // ENTRANTES
  // =========================

  {
    id: 1,
    name: 'Ensalada César',
    ingredients: ['Lechuga', 'Pollo', 'Queso parmesano', 'Crutones', 'Salsa César'],
    instructions: ['Lavar la lechuga', 'Cortar el pollo', 'Agregar los crutones', 'Añadir la salsa y el queso'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    difficulty: 'Fácil',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
    categoria: 'Entrantes'
  },

  {
    id: 2,
    name: 'Bruschetta de tomate',
    ingredients: ['Pan', 'Tomate', 'Albahaca', 'Aceite de oliva', 'Ajo'],
    instructions: ['Cortar el pan', 'Preparar el tomate', 'Agregar albahaca', 'Servir sobre el pan'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: 'Fácil',
    cuisine: 'Italiana',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f',
    categoria: 'Entrantes'
  },

  {
    id: 3,
    name: 'Sopa de tomate',
    ingredients: ['Tomate', 'Cebolla', 'Ajo', 'Caldo', 'Pimienta'],
    instructions: ['Cortar los ingredientes', 'Cocinar los tomates', 'Agregar el caldo', 'Licuar y servir'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: 'Fácil',
    cuisine: 'Italiana',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    categoria: 'Entrantes'
  },

  {
    id: 4,
    name: 'Gazpacho',
    ingredients: ['Tomate', 'Pepino', 'Pimiento', 'Cebolla', 'Aceite de oliva'],
    instructions: ['Lavar los vegetales', 'Cortar', 'Licuar todos los ingredientes', 'Refrigerar y servir'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    difficulty: 'Fácil',
    cuisine: 'Española',
    image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333',
    categoria: 'Entrantes'
  },

  {
    id: 5,
    name: 'Guacamole',
    ingredients: ['Palta', 'Tomate', 'Cebolla', 'Limón', 'Cilantro'],
    instructions: ['Triturar la palta', 'Agregar tomate y cebolla', 'Añadir limón', 'Mezclar y servir'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    difficulty: 'Fácil',
    cuisine: 'Mexicana',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
    categoria: 'Entrantes'
  },

  {
    id: 6,
    name: 'Croquetas de verduras',
    ingredients: ['Zanahoria', 'Papa', 'Calabacín', 'Harina', 'Huevo'],
    instructions: ['Cocinar las verduras', 'Triturar', 'Formar croquetas', 'Freír'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    difficulty: 'Media',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7',
    categoria: 'Entrantes'
  },


  // =========================
  // PLATOS PRINCIPALES
  // =========================

  {
    id: 7,
    name: 'Pollo al horno',
    ingredients: ['Pollo', 'Papa', 'Ajo', 'Romero', 'Sal'],
    instructions: ['Condimentar el pollo', 'Agregar papas', 'Hornear', 'Servir caliente'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 50,
    difficulty: 'Media',
    cuisine: 'Peruana',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
    categoria: 'Platos principales'
  },

  {
    id: 8,
    name: 'Lasaña de carne',
    ingredients: ['Pasta', 'Carne molida', 'Tomate', 'Queso', 'Bechamel'],
    instructions: ['Preparar la carne', 'Preparar la salsa', 'Formar capas', 'Hornear'],
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    difficulty: 'Media',
    cuisine: 'Italiana',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3',
    categoria: 'Platos principales'
  },

  {
    id: 9,
    name: 'Arroz con pollo',
    ingredients: ['Arroz', 'Pollo', 'Arvejas', 'Zanahoria', 'Culantro'],
    instructions: ['Cocinar el pollo', 'Agregar verduras', 'Añadir arroz', 'Cocinar hasta que esté listo'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    difficulty: 'Media',
    cuisine: 'Peruana',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
    categoria: 'Platos principales'
  },

  {
    id: 10,
    name: 'Pasta Alfredo',
    ingredients: ['Pasta', 'Crema', 'Queso parmesano', 'Mantequilla'],
    instructions: ['Cocinar la pasta', 'Preparar la salsa', 'Mezclar', 'Agregar queso'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    difficulty: 'Fácil',
    cuisine: 'Italiana',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    categoria: 'Platos principales'
  },

  {
    id: 11,
    name: 'Salmón a la plancha',
    ingredients: ['Salmón', 'Limón', 'Ajo', 'Pimienta', 'Aceite'],
    instructions: ['Condimentar el salmón', 'Calentar la plancha', 'Cocinar ambos lados', 'Servir'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    categoria: 'Platos principales'
  },

  {
    id: 12,
    name: 'Carne guisada',
    ingredients: ['Carne', 'Papa', 'Zanahoria', 'Cebolla', 'Tomate'],
    instructions: ['Dorar la carne', 'Agregar vegetales', 'Añadir caldo', 'Cocinar lentamente'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    difficulty: 'Media',
    cuisine: 'Peruana',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    categoria: 'Platos principales'
  },


  // =========================
  // GUARNICIONES
  // =========================

  {
    id: 13,
    name: 'Papas fritas',
    ingredients: ['Papa', 'Aceite', 'Sal'],
    instructions: ['Cortar las papas', 'Calentar el aceite', 'Freír', 'Agregar sal'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
    categoria: 'Guarniciones'
  },

  {
    id: 14,
    name: 'Puré de papas',
    ingredients: ['Papa', 'Leche', 'Mantequilla', 'Sal'],
    instructions: ['Cocinar las papas', 'Triturar', 'Agregar leche y mantequilla', 'Mezclar'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    difficulty: 'Fácil',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    categoria: 'Guarniciones'
  },

  {
    id: 15,
    name: 'Verduras salteadas',
    ingredients: ['Zanahoria', 'Brócoli', 'Pimiento', 'Cebolla', 'Aceite'],
    instructions: ['Cortar verduras', 'Calentar sartén', 'Saltear', 'Servir'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: 'Fácil',
    cuisine: 'Asiática',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    categoria: 'Guarniciones'
  },

  {
    id: 16,
    name: 'Ensalada mixta',
    ingredients: ['Lechuga', 'Tomate', 'Pepino', 'Zanahoria'],
    instructions: ['Lavar ingredientes', 'Cortar', 'Mezclar', 'Servir'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    difficulty: 'Fácil',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
    categoria: 'Guarniciones'
  },

  {
    id: 17,
    name: 'Arroz blanco',
    ingredients: ['Arroz', 'Agua', 'Sal', 'Aceite'],
    instructions: ['Lavar el arroz', 'Agregar agua', 'Cocinar', 'Dejar reposar'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 20,
    difficulty: 'Fácil',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6',
    categoria: 'Guarniciones'
  },

  {
    id: 18,
    name: 'Papas al horno',
    ingredients: ['Papa', 'Aceite', 'Romero', 'Sal'],
    instructions: ['Cortar papas', 'Condimentar', 'Hornear', 'Servir'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 35,
    difficulty: 'Fácil',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
    categoria: 'Guarniciones'
  },


  // =========================
  // POSTRES
  // =========================

  {
    id: 19,
    name: 'Tarta de chocolate',
    ingredients: ['Chocolate', 'Harina', 'Huevos', 'Azúcar', 'Mantequilla'],
    instructions: ['Preparar la mezcla', 'Agregar chocolate', 'Colocar en molde', 'Hornear'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    difficulty: 'Media',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    categoria: 'Postres'
  },

  {
    id: 20,
    name: 'Cheesecake',
    ingredients: ['Queso crema', 'Galletas', 'Mantequilla', 'Azúcar', 'Huevos'],
    instructions: ['Preparar la base', 'Preparar el relleno', 'Unir', 'Hornear y refrigerar'],
    prepTimeMinutes: 25,
    cookTimeMinutes: 45,
    difficulty: 'Media',
    cuisine: 'Americana',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
    categoria: 'Postres'
  },

  {
    id: 21,
    name: 'Flan de vainilla',
    ingredients: ['Leche', 'Huevos', 'Azúcar', 'Vainilla'],
    instructions: ['Preparar caramelo', 'Mezclar ingredientes', 'Colocar en molde', 'Cocinar a baño María'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    difficulty: 'Media',
    cuisine: 'Internacional',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
    categoria: 'Postres'
  },

  {
    id: 22,
    name: 'Brownie de chocolate',
    ingredients: ['Chocolate', 'Harina', 'Huevos', 'Azúcar', 'Mantequilla'],
    instructions: ['Derretir chocolate', 'Mezclar ingredientes', 'Colocar en molde', 'Hornear'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: 'Fácil',
    cuisine: 'Americana',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e',
    categoria: 'Postres'
  },

  {
    id: 23,
    name: 'Galletas con chispas',
    ingredients: ['Harina', 'Chocolate', 'Mantequilla', 'Azúcar', 'Huevos'],
    instructions: ['Preparar masa', 'Agregar chocolate', 'Formar galletas', 'Hornear'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    cuisine: 'Americana',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    categoria: 'Postres'
  },

  {
    id: 24,
    name: 'Tiramisú',
    ingredients: ['Mascarpone', 'Café', 'Bizcochos', 'Cacao', 'Azúcar'],
    instructions: ['Preparar crema', 'Mojar bizcochos en café', 'Formar capas', 'Refrigerar'],
    prepTimeMinutes: 25,
    cookTimeMinutes: 0,
    difficulty: 'Media',
    cuisine: 'Italiana',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    categoria: 'Postres'
  },


// =========================
// BEBIDAS
// =========================


{
  id: 25,
  name: 'Limonada',
  ingredients: [
    'Limón',
    'Agua',
    'Azúcar',
    'Hielo'
  ],
  instructions: [
    'Exprimir los limones.',
    'Mezclar el jugo con agua y azúcar.',
    'Agregar hielo y servir.'
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 0,
  difficulty: 'Fácil',
  cuisine: 'Internacional',
  image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
  categoria: 'Bebidas'
},

{
  id: 26,
  name: 'Jugo de naranja',
  ingredients: [
    'Naranjas',
    'Hielo'
  ],
  instructions: [
    'Lavar las naranjas',
    'Exprimir',
    'Servir con hielo'
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 0,
  difficulty: 'Fácil',
  cuisine: 'Internacional',
  image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',
  categoria: 'Bebidas'
},

{
  id: 27,
  name: 'Batido de fresa',
  ingredients: [
    'Fresas',
    'Leche',
    'Azúcar',
    'Hielo'
  ],
  instructions: [
    'Lavar las fresas',
    'Agregar leche',
    'Licuar',
    'Servir'
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 0,
  difficulty: 'Fácil',
  cuisine: 'Internacional',
  image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
  categoria: 'Bebidas'
},

{
  id: 28,
  name: 'Chocolate caliente',
  ingredients: [
    'Leche',
    'Chocolate',
    'Azúcar',
    'Canela'
  ],
  instructions: [
    'Calentar la leche',
    'Agregar chocolate',
    'Añadir azúcar',
    'Servir caliente'
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 10,
  difficulty: 'Fácil',
  cuisine: 'Internacional',
  image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
  categoria: 'Bebidas'
},

{
  id: 29,
  name: 'Té helado',
  ingredients: [
    'Té',
    'Agua',
    'Limón',
    'Azúcar',
    'Hielo'
  ],
  instructions: [
    'Preparar el té',
    'Dejar enfriar',
    'Agregar limón',
    'Servir con hielo'
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 5,
  difficulty: 'Fácil',
  cuisine: 'Internacional',
  image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
  categoria: 'Bebidas'
},

{
  id: 30,
  name: 'Smoothie de mango',
  ingredients: [
    'Mango',
    'Yogur',
    'Leche',
    'Hielo'
  ],
  instructions: [
    'Pelar mango',
    'Agregar yogur y leche',
    'Licuar',
    'Servir frío'
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 0,
  difficulty: 'Fácil',
  cuisine: 'Internacional',
  image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80',
  categoria: 'Bebidas'
}

];