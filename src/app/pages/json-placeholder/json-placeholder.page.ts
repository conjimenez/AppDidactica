import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-json-placeholder',
  templateUrl: './json-placeholder.page.html',
  standalone: false, // Este componente no es standalone
  styleUrls: ['./json-placeholder.page.scss'],
})
export class JsonPlaceholderPage {
  posts: any[] = [];
  nuevoTitulo: string = '';

  constructor(private apiService: ApiService) {}

  ionViewWillEnter() {
    this.obtenerPosts();
  }

  obtenerPosts() {
    this.apiService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error: any) => {
        console.error('Error al obtener posts', error);
      }
    );
  }

  crearPost() {
    if (this.nuevoTitulo.trim() === '') {
      return;
    }

    const nuevo = { title: this.nuevoTitulo, body: 'Contenido de ejemplo', userId: 1 };
    this.apiService.createPost(nuevo).subscribe(  // <== OJO: createPost SIN JsonPlaceholder
      (data: any) => {
        console.log('Post creado:', data);
        this.nuevoTitulo = '';
        this.obtenerPosts();
      },
      (error: any) => {
        console.error('Error al crear el post', error);
      }
    );
  }
  borrarPost(id: number) {
  this.apiService.deletePost(id).subscribe(
    () => {
      console.log('Post eliminado');
      this.obtenerPosts();
    },
    (error: any) => {
      console.error('Error al eliminar el post', error);
    }
  );
}

}
