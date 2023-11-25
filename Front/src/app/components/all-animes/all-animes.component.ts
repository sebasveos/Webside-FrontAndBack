import { Component, Output, EventEmitter } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from 'src/app/models/anime';
import { Global } from 'src/app/services/global';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-all-animes',
  templateUrl: './all-animes.component.html',
  styleUrls: ['./all-animes.component.css'],
  providers: [AnimeService]
})
export class AllAnimesComponent {
  @Output() closeModal = new EventEmitter<void>();
  tipoSeleccionado: { valor: string, texto: string } = { valor: '', texto: 'Tipo' };
  categoriaSeleccionada: { valor: string, texto: string } = { valor: '', texto: 'Categoria' };
  anoSeleccionado: { valor: number, texto: string } = { valor: 0, texto: 'Año' };
  animesAnteriores: Anime[] = [];
  public url: string;
  public decodedToken: any;
  public isModalVisible = false;
  public scrollPosition = 0;
  public isMenuVisible = false;
  public animes: Anime[] | any;
  constructor(
    private _globalService: GlobalServiceService,
    private _animeService: AnimeService,
    private _router: Router,
    private _userService: UserService
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this.getAllAnimes();
    this.decodedToken = this._globalService.decodeTokenFromCookie();

  }
  seleccionarTipo(type: string, texto: string) {
    this.tipoSeleccionado = { valor: type, texto: texto };
  }
  seleccionarCategoria(category: string, texto: string) {
    this.categoriaSeleccionada = { valor: category, texto: texto };
  }
  seleccionarAno(year: number, texto: string) {
    this.anoSeleccionado = { valor: year, texto: texto };
  }

  getAllAnimes() {
    this._animeService.getAllAnimes().subscribe(
      response => {
        if (response.animes) {
          this.animes = response.animes;
          this.animes.forEach((anime: { image: string; }) => {
            anime.image = anime.image.replace('uploads\\', '');
          });
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  buscarAnimesPorCriterios() {
    let opcionesBusqueda: any = {};
    this.animesAnteriores = this.animes;

    // Agrega el campo 'category' solo si tiene un valor seleccionado
    if (this.categoriaSeleccionada.valor !== '') {
      opcionesBusqueda.category = this.categoriaSeleccionada.valor;
    }

    // Agrega el campo 'type' solo si tiene un valor seleccionado
    if (this.tipoSeleccionado.valor !== '') {
      opcionesBusqueda.type = this.tipoSeleccionado.valor;
    }

    // Agrega el campo 'year' solo si tiene un valor seleccionado
    if (this.anoSeleccionado.valor !== 0) {
      opcionesBusqueda.year = this.anoSeleccionado.valor;
    }

    // Realiza la búsqueda utilizando las opciones de búsqueda creadas dinámicamente
    this._animeService.searchAnimesByOptions(opcionesBusqueda).subscribe(response => {
      if (response.animes) {
        this.animes = response.animes;
        this.animes.forEach((anime: { image: string; }) => {
          anime.image = anime.image.replace('uploads\\', '');
        });
      } else {
        this.animes = this.animesAnteriores;
      }
    });
  }

  toggleModal(event: Event) {
    event.stopPropagation(); // Evita que el evento se propague hacia arriba en la jerarquía del DOM
    // Muestra la ventana emergente
    this.isModalVisible = !this.isModalVisible;
    if (this.isModalVisible) {
      this.scrollPosition = window.pageYOffset; // Almacena la posición de desplazamiento actual
      document.body.style.overflow = ''; // Deshabilita el desplazamiento del cuerpo
    } else {
      document.body.style.overflow = ''; // Permite el desplazamiento del cuerpo nuevamente
      window.scrollTo(0, this.scrollPosition); // Vuelve a la posición de desplazamiento almacenada
    }
  }
  close() {
    this.closeModal.emit();
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  onAnimeClick(name: string, animeId: string) {
    this._router.navigate(['/anime', name, animeId]);
  }
  onAnimeClickCategory(animeCategories: string) {
    this._router.navigate(['/directorio-anime', animeCategories]);
  }

  onCapAnime(name: string, episode: number) {

    // Redirige a la página del anime y pasa el ID como parámetro de la ruta
    this._router.navigate(['/verCapitulo', name, episode]);
  }
}