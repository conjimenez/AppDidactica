import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.page.html',
  standalone: false, // Este componente no es standalone
  styleUrls: ['./api-test.page.scss']
})
export class ApiTestPage {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  obtenerPosts() {
    this.apiService.getPosts().subscribe(data => {
      console.log('Posts obtenidos:', data);
      this.posts = data;
    });
  }

  crearPost() {
    const nuevoPost = {
      title: 'Mi nuevo post',
      body: 'Contenido del post de prueba',
      userId: 1
    };

    this.apiService.createPost(nuevoPost).subscribe(res => {
      console.log('Post creado:', res);
      alert('Post creado correctamente.');
    });
  }

  borrarPost(id: number) {
    this.apiService.deletePost(id).subscribe(res => {
      console.log(`Post con ID ${id} borrado:`, res);
      alert(`Post con ID ${id} eliminado.`);
    });
  }
}
