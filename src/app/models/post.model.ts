export interface Post {
    id?: number;
    titulo?: string;
    subtitulo?: string;
    descripcion?: string;
    autor?: string;
    pais?: string;
    fecha?: Date;
    avatar?: string;
    imagen?: string;
    categoria?: string;
    tags?: string[];
    destacado?: boolean;

}