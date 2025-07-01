import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbInstance: SQLiteObject | null = null;
  private dbReady: Promise<void>;

  constructor(private sqlite: SQLite) {
    this.dbReady = this.initDB();
  }

  private async initDB(): Promise<void> {
    try {
      this.dbInstance = await this.sqlite.create({
        name: 'usuarios.db',
        location: 'default'
      });

      await this.dbInstance.executeSql(
        `CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          usuario TEXT UNIQUE,
          clave INTEGER
        );`, []
      );

      console.log('✅ Base de datos inicializada');
    } catch (error) {
      console.error('❌ Error creando BD', error);
    }
  }

  async register(usuario: string, clave: number): Promise<boolean> {
    try {
      await this.dbReady; // Espera que la DB esté lista

      if (!this.dbInstance) {
        throw new Error('Base de datos no inicializada');
      }

      await this.dbInstance.executeSql(
        `INSERT INTO usuarios (usuario, clave) VALUES (?, ?)`,
        [usuario, clave]
      );
      console.log('✅ Usuario registrado');
      return true;
    } catch (error) {
      console.error('❌ Error al registrar usuario:', error);
      return false;
    }
  }
}