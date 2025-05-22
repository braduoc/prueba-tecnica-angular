import { Injectable } from '@angular/core';

export interface Products {
  id?: number,
  name?: string,
  description?: string,
  price?: number,
  offert?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DataProductsService {

  listProducts: Products[] = [
    { id: 1, name: 'Lava Ropa', description: 'Lava tu ropa como nunca antes', price: 10, offert: false },
    { id: 2, name: 'Detergente Ultra', description: 'Elimina las manchas más difíciles', price: 8, offert: true },
    { id: 3, name: 'Suavizante Floral', description: 'Deja tu ropa con un aroma floral duradero', price: 6, offert: false },
    { id: 4, name: 'Limpiador Multiuso', description: 'Ideal para cualquier superficie', price: 7, offert: true },
    { id: 5, name: 'Papel Higiénico Premium', description: 'Extra suave y resistente', price: 5, offert: false },
    { id: 6, name: 'Jabón Líquido', description: 'Higiene para toda la familia', price: 4, offert: true },
    { id: 7, name: 'Shampoo Anticaspa', description: 'Combate la caspa desde la raíz', price: 9, offert: false },
    { id: 8, name: 'Cepillo de Dientes', description: 'Cerdas suaves para tu encía', price: 3, offert: true },
    { id: 9, name: 'Crema Dental', description: 'Blanquea y protege tus dientes', price: 4, offert: false },
    { id: 10, name: 'Desodorante Roll-On', description: 'Protección 48 horas sin alcohol', price: 6, offert: true },
    { id: 11, name: 'Toalla Humeda', description: 'Frescura al instante en cada uso', price: 3, offert: false },
    { id: 12, name: 'Esponja de Cocina', description: 'Limpieza efectiva y duradera', price: 2, offert: false },
    { id: 13, name: 'Lavalozas Concentrado', description: 'Elimina grasa difícil sin esfuerzo', price: 5, offert: true },
    { id: 14, name: 'Ambientador Lavanda', description: 'Aroma relajante para tu hogar', price: 4, offert: true },
    { id: 15, name: 'Guantes de Látex', description: 'Protección para tus manos', price: 3, offert: false },
    { id: 16, name: 'Desinfectante en Spray', description: 'Elimina el 99.9% de bacterias', price: 7, offert: true }
  ];


  constructor() { }
}
