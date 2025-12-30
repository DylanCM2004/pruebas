// Datos de las telas
const telas = [
    // LINO RIGIDO.
    {
        id: 1,
        nombre: "Lino Rígido",
        imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela de lino con estructura firme y durabilidad. Ideal para proyectos que requieren forma y resistencia.",
        caracteristicas: [
            "Material: 100% poliéster",
            "Textura: Suave, ligera y resistente",
            "Uso práctico: Vestimenta y decoración"
        ],
        colores: [
            { nombre: "Rojo", color: "#FF0000" },
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Verde", color: "#00FF00" },
            { nombre: "Azul", color: "#0000FF" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Beige / Crudo", color: "#F5F5DC" },
            { nombre: "Rosa", color: "#FFC0CB" },
            { nombre: "Café", color: "#8B4513" },
            { nombre: "Fucsia", color: "#FF00FF" },
            { nombre: "Vinotinto", color: "#800000" },
            { nombre: "Naranja", color: "#FFA500" },
            { nombre: "Gris", color: "#808080" },
            { nombre: "Morado", color: "#800080" },
            { nombre: "Lila", color: "#C8A2C8" }
        ]
    },
    // SATIN RIGIDO.
    {
        id: 2,
        nombre: "Satín Rígido",
        imagen: "https://images.unsplash.com/photo-1505903658795-8d3cc48039e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Satín con acabado brillante y estructura firme. Perfecto para decoración elegante y usos casuales.",
        caracteristicas: [
            "Material: Poliéster",
            "Acabado: Brillante y suave",
            "Uso ideal: Vestimenta y decoración"
        ],
        colores: [
            { nombre: "Blanco Perlado", color: "#FFFAF0" },
            { nombre: "Negro", color: "#0A0A0A" },
            { nombre: "Rojo Vino", color: "#722F37" },
            { nombre: "Azul Real", color: "#4169E1" },
            { nombre: "Verde Esmeralda", color: "#50C878" },
            { nombre: "Dorado", color: "#FFD700" },
            { nombre: "Plateado", color: "#C0C0C0" },
            { nombre: "Vinotinto", color: "#800020" }
        ]
    },
    // SATIN LICRADO.
    {
        id: 3,
        nombre: "Satín Licrado",
        imagen: "https://images.unsplash.com/photo-1520922682037-7c5fbc7d84df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Satín con elongación para mayor practicidad y comodidad. Ideal para alta costura y usos deportivos.",
        caracteristicas: [
            "Material: Satín con licra",
            "Elasticidad: Media",
            "Uso ideal: Ropa deportiva y vestimenta a medida"
        ],
        colores: [
            { nombre: "Negro", color: "#111111" },
            { nombre: "Rojo", color: "#E0115F" },
            { nombre: "Azul Noche", color: "#191970" },
            { nombre: "Verde Jade", color: "#00A86B" },
            { nombre: "Púrpura", color: "#6A0DAD" },
            { nombre: "Rosa Neón", color: "#FF6EC7" },
            { nombre: "Azul Celeste", color: "#87CEEB" },
            { nombre: "Blanco", color: "#F8F8FF" }
        ]
    },
    // SEDA POLIESTER.
    {
        id: 4,
        nombre: "Seda Poliéster",
        imagen: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Delgado y resistente para forro y revestimiento, ofrece suavidad, brillo y durabilidad",
        caracteristicas: [
            "Material: Poliéster sedoso",
            "Acabado: Brillante u opaco",
            "Uso ideal: Forros y vestidos"
        ],
        colores: [
            { nombre: "Marfil", color: "#FFFFF0" },
            { nombre: "Champagne", color: "#F7E7CE" },
            { nombre: "Rosa Pálido", color: "#FFD1DC" },
            { nombre: "Azul Cielo", color: "#87CEEB" },
            { nombre: "Lila", color: "#E6E6FA" },
            { nombre: "Verde Menta", color: "#98FF98" },
            { nombre: "Durazno", color: "#FFDAB9" },
            { nombre: "Azul Marino", color: "#000080" }
        ]
    },
    // NYLON.
    {
        id: 5,
        nombre: "Nylon",
        imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Impermeable, resistente y duradera. Ligera y de secado rápido, ideal para múltiples aplicaciones.",
        caracteristicas: [
            "Material: Nylon 100%",
            "Resistencia: Alta durabilidad",
            "Uso ideal: Ropa deportiva, paraguas e impermeables"
        ],
        colores: [
            { nombre: "Negro opaco", color: "#1C1C1C" },
            { nombre: "Rojo brillante", color: "#FF2800" },
            { nombre: "Azul turqueza", color: "#7DF9FF" },
            { nombre: "Verde Lima", color: "#32CD32" },
            { nombre: "Amarillo ", color: "#FFFF00" },
            { nombre: "Naranja Brillante", color: "#FFA500" },
            { nombre: "Rosa claro", color: "#FF69B4" },
            { nombre: "Púrpura", color: "#9B30FF" }
        ]
    },
    // SUPER NYLON.
    {
        id: 6,
        nombre: "Super Nylon",
        imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Nylon de alta densidad y mayor resistencia. Impermeable y ultra duradero para usos exigentes.",
        caracteristicas: [
            "Material: Nylon de alta resistencia",
            "Impermeable: Sí",
            "Uso ideal: Equipaje, carpas y ropa deportiva"
        ],
        colores: [
            { nombre: "Negro Mate", color: "#2F4F4F" },
            { nombre: "Verde Militar", color: "#556B2F" },
            { nombre: "Azul Acero", color: "#4682B4" },
            { nombre: "Rojo", color: "#8B0000" },
            { nombre: "Gris Ratón", color: "#36454F" },
            { nombre: "Café Cuero", color: "#8B4513" },
            { nombre: "Azul Petroleo Oscuro", color: "#000080" },
            { nombre: "Verde Oliva", color: "#808000" }
        ]
    },
    // CERRO SPORT.
    {
        id: 7,
        nombre: "Cerro Sport",
        imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela técnica para deporte, transpirable y rigida. Máximo confort para actividad física intensa.",
        caracteristicas: [
            "Material: Técnico deportivo",
            "Caracteristicas: Impermeable, resistente y ligero",
            "Uso ideal: Ropa deportiva, forros ligeros y mochilas basicas"
        ],
        colores: [
            { nombre: "Negro", color: "#000000" },
            { nombre: "Azul Rey", color: "#0047AB" },
            { nombre: "Rojo", color: "#DC143C" },
            { nombre: "Verde Oliva", color: "#228B22" },
            { nombre: "Gris Plata", color: "#C0C0C0" },
            { nombre: "Naranja", color: "#FF8C00" },
            { nombre: "Azul Celeste", color: "#00BFFF" },
            { nombre: "Blanco", color: "#F5F5F5" }
        ]
    },
    // BRIONY.
    {
        id: 8,
        nombre: "Briony",
        imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Elegante con textura suave y delgada para forros frescos. Ideal para vestimenta formal y eventos.",
        caracteristicas: [
            "Material: Mezcla sedosa y resistente",
            "Textura: Suave y elegante",
            "Uso ideal: Revestimiento de trajes y vestidos"
        ],
        colores: [
            { nombre: "Azul Noche", color: "#191970" },
            { nombre: "Verde Bosque", color: "#228B22" },
            { nombre: "Vinotinto claro", color: "#800020" },
            { nombre: "Gris Perla", color: "#C0C0C0" },
            { nombre: "Azul Zafiro", color: "#082567" },
            { nombre: "Verde Oscuro", color: "#006400" },
            { nombre: "Vino Tinto", color: "#722F37" },
            { nombre: "Negro", color: "#0A0A0A" }
        ]
    },
    // ALGODÓN PERCHADO.
    {
        id: 9,
        nombre: "Algodón Perchado",
        imagen: "https://images.unsplash.com/photo-1505903658795-8d3cc48039e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Material grueso y calido con textura suave. Ideal para vestimenta deportiva, pijamas y buzos.",
        caracteristicas: [
            "Material: Algodón 100%",
            "Suavidad: Sin igual, no se motosea",
            "Uso ideal: Ropa deportiva , Buzos, chaquetas y pijamas"
        ],
        colores: [
            { nombre: "Blanco Nieve", color: "#FFFAFA" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Rojo", color: "#8B0000" },
            { nombre: "Azul Oscuro", color: "#000080" },
            { nombre: "Verde", color: "#006400" },
            { nombre: "Gris", color: "#808080" },
            { nombre: "Rosa", color: "#FFC0CB" },
            { nombre: "Azul Claro", color: "#ADD8E6" }
        ]
    },
    // FLEECE.
    {
        id: 10,
        nombre: "Fleece",
        imagen: "https://images.unsplash.com/photo-1520922682037-7c5fbc7d84df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tejido ovejero suave y cálido. Ideal para prendas de abrigo y ropa casual de invierno, asi como para del desarrollo de manualidades.",
        caracteristicas: [
            "Material: Poliéster fleece",
            "Calidez: Alta",
            "Uso ideal: Sudaderas, chaquetas y uso decorativo"
        ],
        colores: [
            { nombre: "Gris Ratón", color: "#36454F" },
            { nombre: "Azul Rey", color: "#0b0bfaff" },
            { nombre: "Verde Militar", color: "#4B5320" },
            { nombre: "Rojo", color: "#8B0000" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Azul hielo", color: "#4169E1" },
            { nombre: "Verde Bosque", color: "#228B22" },
            { nombre: "Verde limón", color: "#00ff37ff" }
        ]
    },
    // DACRON SEDA.
    {
        id: 11,
        nombre: "Dacron Seda",
        imagen: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Dacron con acabado sedoso, combina durabilidad con elegancia. Caída perfecta y fácil mantenimiento.",
        caracteristicas: [
            "Material: Dracron sedoso ",
            "Durabilidad: Alta resistencia y facil manejo",
            "Uso ideal: Vestimenta y decoracion"
        ],
        colores: [
            { nombre: "Blanco Perlado", color: "#F8F8FF" },
            { nombre: "Beige", color: "#F5F5DC" },
            { nombre: "Rosa Palido", color: "#FFE4E1" },
            { nombre: "Azul Cielo", color: "#87CEEB" },
            { nombre: "Verde Menta", color: "#98FB98" },
            { nombre: "Lila", color: "#DDA0DD" },
            { nombre: "Durazno", color: "#FFDAB9" },
            { nombre: "Azul Marino", color: "#000080" }
        ]
    },
    // DACRON HILO.
    {
        id: 12,
        nombre: "Dacron Hilo",
        imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Dacron con acabado sedoso, combina durabilidad con elegancia. Caída firme y fácil manejo.",
        caracteristicas: [
            "Material: Dracron hilo",
            "Durabilidad: Alta resistencia, antialérgico",
            "Uso ideal: Vestuario, filtros y lenceria de cama"
        ],
        colores: [
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Rojo", color: "#FF0000" },
            { nombre: "Azul", color: "#0000FF" },
            { nombre: "Verde", color: "#008000" },
            { nombre: "Amarillo", color: "#FFFF00" },
            { nombre: "Café", color: "#8B4513" },
            { nombre: "Gris", color: "#808080" }
        ]
    },
    // SEDA MANGO.
    {
        id: 13,
        nombre: "Seda Mango",
        imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Seda fria suave con tonos cálidos y caida natural. Textura delicada y colores mates con presencia y elegancia.",
        caracteristicas: [
            "Material: Seda natural",
            "Textura: Delicada y suave",
            "Uso ideal: Vestidos veraniegos"
        ],
        colores: [
            { nombre: "Naranja", color: "#FFA500" },
            { nombre: "Palo de rosa", color: "#FFDAB9" },
            { nombre: "Rosa", color: "#FDBCB4" },
            { nombre: "Beige", color: "#FFEFD5" },
            { nombre: "Crudo", color: "#F5F5DC" },
            { nombre: "Mostaza", color: "#ffd903ff" },
            { nombre: "Rojo", color: "#eb0023ff" },
            { nombre: "Verde limón", color: "#05ef4fff" }
        ]
    },
    // BALLETILLA.
    {
        id: 14,
        nombre: "Balletilla",
        imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela elástica para ballet y danza. Máxima flexibilidad y comodidad en movimiento.",
        descripcion: "Tela de alta resistencia, suave y versatil para limpieza. No desprende motas o se deshilacha.",
        caracteristicas: [
            "Material: Rigido y mayormente compuesto de algodón",
            "Calidad: No desprende mota y liviano",
            "Uso general: Limpieza de ceramicas, vehiculos y artitisticos"
        ],
        colores: [
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Rojo", color: "#FF0000" }
        ]
    },
    // TOALLA.
    {
        id: 15,
        nombre: "Toalla",
        imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tejido de toalla absorbente y suave. Ideal para baño, playa y usos domésticos.",
        caracteristicas: [
            "Material: Algodón toalla",
            "Absorción: Alta capacidad",
            "Uso ideal: Toallas de baño y playa"
        ],
        colores: [
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Azul Oscuro", color: "#000080" },
            { nombre: "Verde", color: "#006400" },
            { nombre: "Rojo", color: "#8B0000" },
            { nombre: "Amarillo", color: "#FFD700" },
            { nombre: "Rosa", color: "#FFC0CB" },
            { nombre: "Café", color: "#8B4513" },
            { nombre: "Gris", color: "#808080" }
        ]
    },
    // TULL.
    {
        id: 16,
        nombre: "Tull",
        imagen: "https://images.unsplash.com/photo-1505903658795-8d3cc48039e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela de tul transparente y ligera. Perfecta para velos de vestimenta, decoración y detalles finos.",
        caracteristicas: [
            "Material: Tul clásico",
            "Transparencia: Media",
            "Uso ideal: Velos y adornos"
        ],
        colores: [
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Marfil", color: "#FFFFF0" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Verde oscuro", color: "#065e13ff" },
            { nombre: "Azul Celeste", color: "#87CEEB" },
            { nombre: "Rosa", color: "#FFC0CB" },
            { nombre: "Lila", color: "#DDA0DD" },
            { nombre: "Verde Menta", color: "#98FB98" }
        ]
    },
    // TULL ILUSION.
    {
        id: 17,
        nombre: "Tull Ilusión",
        imagen: "https://images.unsplash.com/photo-1520922682037-7c5fbc7d84df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tul con efecto ilusión, más suave y menos rígido. Ideal para vestidos y detalles delicados.",
        caracteristicas: [
            "Material: Tul suave",
            "Textura: Delicada y flexible",
            "Uso ideal: Vestidos de formales y decoraciones delicadas"
        ],
        colores: [
            { nombre: "Blanco Nieve", color: "#FFFAFA" },
            { nombre: "Marfil", color: "#FFFFF0" },
            { nombre: "Rosa", color: "#DE5D83" },
            { nombre: "Azul Hielo", color: "#4f8cc2ff" },
            { nombre: "Rosa Palido", color: "#FFD1DC" },
            { nombre: "Beige", color: "#F7E7CE" }
        ]
    },
    // TULL ESCARCHADO.
    {
        id: 18,
        nombre: "Tull Escarchado",
        imagen: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tul con efecto escarchado brillante. Añade brillo y luz a cualquier diseño.",
        caracteristicas: [
            "Material: Tul brillante",
            "Efecto: Escarchado ",
            "Uso ideal: Vestidos de fiesta, decoraciones y accesorios"
        ],
        colores: [
            { nombre: "Plateado", color: "#C0C0C0" },
            { nombre: "Dorado", color: "#FFD700" },
            { nombre: "Blanco Brillante", color: "#F8F8FF" },
            { nombre: "Rosa Brillante", color: "#FF69B4" },
            { nombre: "Azul Brillante", color: "#1E90FF" },
            { nombre: "Verde Brillante", color: "#00FF00" }
        ]
    },
    // TULL 3D.
    {
        id: 19,
        nombre: "Tull 3D",
        imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tul con relieve y textura tridimensional. Efecto visual único, moderno y elegante.",
        caracteristicas: [
            "Material: Tul texturizado",
            "Efecto: 3D y relieve",
            "Uso ideal: Vestimenta formal y recreativa"
        ],
        colores: [
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Rojo", color: "#8B0000" },
            { nombre: "Azul", color: "#0000FF" },
            { nombre: "Verde", color: "#008000" },
            { nombre: "Rosa", color: "#FFC0CB" }
        ]
    },  
    // SUAVETINA.
    {
        id: 20,
        nombre: "Suavetina",
        imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela suave y acogedora con cierto brillo. Sensación de confort premium ideal para ropa de hogar.",
        caracteristicas: [
            "Material: Mezcla suave y brillante",
            "Suavidad: Alto nivel y ligereza",
            "Uso ideal: Pijamas y ropa de casa"
        ],
        colores: [
            { nombre: "Gris Claro", color: "#D3D3D3" },
            { nombre: "Azul Bebé", color: "#89CFF0" },
            { nombre: "Rosa Bebé", color: "#F4C2C2" },
            { nombre: "Lavanda", color: "#E6E6FA" },
            { nombre: "Verde Menta", color: "#98FF98" },
            { nombre: "Blanco Roto", color: "#F8F8FF" },
            { nombre: "Café Claro", color: "#D2B48C" },
            { nombre: "Lila Suave", color: "#DDA0DD" }
        ]
    },
    // MALLA.
    {
        id: 21,
        nombre: "Malla",
        imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tejido de malla transpirable y elástico. Ideal para deporte, moda y aplicaciones técnicas.",
        caracteristicas: [
            "Material: Malla de diversos grosores",
            "Transpirabilidad: Alta, sus diferentes tupidos la hacer ampliamente practica",
            "Uso ideal: Ropa deportiva y vestidos"
        ],
        colores: [
            { nombre: "Negro", color: "#000000" },
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Rojo", color: "#FF0000" },
            { nombre: "Azul Real", color: "#4169E1" },
            { nombre: "Verde Lima", color: "#32CD32" },
            { nombre: "Naranja", color: "#FFA500" },
            { nombre: "Rosa Neón", color: "#FF6EC7" },
            { nombre: "Amarillo", color: "#FFFF00" }
        ]
    },
    // ORGANZA.
    {
        id: 22,
        nombre: "Organza",
        imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela transparente y rígida con brillo sutil. Elegante y sofisticada para ocasiones especiales.",
        caracteristicas: [
            "Material: Organza fina",
            "Transparencia: Alta con brillo",
            "Uso ideal: Vestidos de gala"
        ],
        colores: [
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Marfil", color: "#FFFFF0" },
            { nombre: "Rosa Palido", color: "#FFD1DC" },
            { nombre: "Azul Cielo", color: "#87CEEB" }
        ]
    },
    // PELUCHE DE PELO LARGO.
    {
        id: 23,
        nombre: "Peluche Pelo Largo",
        imagen: "https://images.unsplash.com/photo-1505903658795-8d3cc48039e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Peluche con pelo largo y suave de temporada. Sensación lujosa y acogedora ideal para decoraciones y peluches.",
        caracteristicas: [
            "Material: Poliéster peluche",
            "Pelo: Largo y suave",
            "Uso ideal: Decoraciones, muñecos"
        ],
        colores: [
            { nombre: "Café", color: "#8B4513" },
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Gris", color: "#808080" },
            { nombre: "Verde", color: "#008000" },
            { nombre: "Morado", color: "#800080" }
        ]
    },
    // PELUCHE DE PELO MEDIANO.
    {
        id: 24,
        nombre: "Peluche Pelo Mediano",
        imagen: "https://images.unsplash.com/photo-1520922682037-7c5fbc7d84df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Peluche con pelo de longitud media. Equilibrio perfecto entre suavidad y practicidad.",
        caracteristicas: [
            "Material: Poliéster peluche",
            "Pelo: Longitud media",
            "Uso ideal: Ropa y accesorios"
        ],
        colores: [
            { nombre: "Beige", color: "#F5F5DC" },
            { nombre: "Gris Claro", color: "#D3D3D3" },
            { nombre: "Rosa Palido", color: "#FFD1DC" },
            { nombre: "Azul Bebé", color: "#89CFF0" },
            { nombre: "Verde Pastel", color: "#C1E1C1" },
            { nombre: "Lila", color: "#DDA0DD" },
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Café Claro", color: "#D2B48C" }
        ]
    },
    // CARIÑOSITO.
    {
        id: 25,
        nombre: "Cariñosito",
        imagen: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tejido suave y grueso que brinda comodidad y calidez. Muy buena opción si se busca material funcional y acogedor.",
        caracteristicas: [
            "Material: Algodón suave y tupido",
            "Caracteristicas: Afelpado por solo un lado de la tela",
            "Uso ideal: Forro caluroso, hogar y decoración"
        ],
        colores: [
            { nombre: "Blanco ", color: "#F8F8FF" },
            { nombre: "Rosa", color: "#F4C2C2" },
            { nombre: "Azul Bebé", color: "#89CFF0" },
            { nombre: "Gris Oscuro ", color: "#444340ff" },
            { nombre: "Verde Pastel", color: "#56f056ff" },
            { nombre: "Lila", color: "#bc4fbcff" },
            { nombre: "Beige", color: "#FFDAB9" },
            { nombre: "Gris Perla", color: "#D3D3D3" }
        ]
    },
    // 8001.
    {
        id: 26,
        nombre: "Tela 8001",
        imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela versátil de uso general. Buena relación calidad-precio para múltiples aplicaciones.",
        caracteristicas: [
            "Material: Mezcla poliéster",
            "Versatilidad: Elasticidad unidireccional",
            "Uso ideal: Proyectos generales, forro de prendas licradas"
        ],
        colores: [
            { nombre: "Azul", color: "#0000FF" },
            { nombre: "Rojo", color: "#FF0000" },
            { nombre: "Verde", color: "#008000" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Amarillo", color: "#FFFF00" },
            { nombre: "Café", color: "#8B4513" },
            { nombre: "Gris", color: "#808080" }
        ]
    },
    // 8002.
    {
        id: 27,
        nombre: "Tela 8002",
        imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela de acabado mejorado. Mayor durabilidad y textura refinada para proyectos exigentes.",
        caracteristicas: [
            "Material: Poliéster mejorado",
            "Durabilidad: Superior, grosor preciso para implementos deportivos",
            "Uso ideal: Proyectos deportidos, estandartes y sublimación"
        ],
        colores: [
            { nombre: "Burgundy", color: "#800020" },
            { nombre: "Verde Bosque", color: "#228B22" },
            { nombre: "Azul Marino", color: "#000080" },
            { nombre: "Gris Oscuro", color: "#696969" },
            { nombre: "Vino Tinto", color: "#722F37" },
            { nombre: "Verde Oliva", color: "#808000" },
            { nombre: "Café Chocolate", color: "#7B3F00" },
            { nombre: "Azul Acero", color: "#4682B4" }
        ]
    },
    // 8005.
    {
        id: 28,
        nombre: "Tela 8005",
        imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela especialmente gruesa y licrada para vestimenta deportiva ligera y respirable.",
        caracteristicas: [
            "Material: Técnico especializado",
            "Rendimiento: Preciso para aplicaciones deportivas y vestimenta ligera",
            "Uso ideal: Aplicaciones profesionales"
        ],
        colores: [
            { nombre: "Negro", color: "#0A0A0A" },
            { nombre: "Gris Ratón", color: "#36454F" },
            { nombre: "Azul Rey", color: "#0047AB" },
            { nombre: "Verde Oliva", color: "#355E3B" },
            { nombre: "Rojo oscuro", color: "#8B0000" },
            { nombre: "Naranja Neon", color: "#FF4500" },
            { nombre: "Amarillo", color: "#FFD700" },
            { nombre: "Blanco", color: "#FFFFFF" }
        ]
    },
    // LOTO.
    {
        id: 29,
        nombre: "Loto",
        imagen: "https://images.unsplash.com/photo-1505903658795-8d3cc48039e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela de grosor medio con una cara dersa y lisa y posterior suave y calido, ideal para prendas deportivas o chaquetas ligeras",
        caracteristicas: [
            "Material: Delgado y Calido",
            "Caracteristicas: Facil manejo sin necesidad de un forro",
            "Uso ideal: Exteriores y deporte"
        ],
        colores: [
            { nombre: "Azul Turqueza", color: "#1E90FF" },
            { nombre: "Verde limón", color: "#32CD32" },
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Gris claro", color: "#D3D3D3" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Azul Rey", color: "#000080" },
            { nombre: "Verde", color: "#228B22" },
            { nombre: "Rojo", color: "#8B0000" }
        ]
    },
    // RIB ALGODÓN.
    {
        id: 30,
        nombre: "Rib Algodón",
        imagen: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tejido de punto de algodón con relieve. Elástico y cómodo para cuellos y puños.",
        caracteristicas: [
            "Material: Algodón rib",
            "Elasticidad: Buena recuperación",
            "Uso ideal: Cuellos, puños y pretinas"
        ],
        colores: [
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Gris", color: "#808080" },
            { nombre: "Azul Marino", color: "#000080" },
            { nombre: "Rojo", color: "#8B0000" },
            { nombre: "Verde", color: "#006400" },
            { nombre: "Café", color: "#8B4513" },
            { nombre: "Azul Claro", color: "#ADD8E6" }
        ]
    },
    // RIB POLIESTER.
    {
        id: 31,
        nombre: "Rib Poliéster",
        imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tejido de punto de poliéster con relieve. Más resistente y de secado rápido.",
        caracteristicas: [
            "Material: Poliéster rib",
            "Durabilidad: Mayor resistencia",
            "Uso ideal: Cuellos, puños y pretinas"
        ],
        colores: [
            { nombre: "Negro", color: "#000000" },
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Rojo", color: "#FF0000" },
            { nombre: "Azul Real", color: "#4169E1" },
            { nombre: "Verde Lima", color: "#32CD32" },
            { nombre: "Naranja", color: "#FFA500" },
            { nombre: "Rosa Neón", color: "#FF6EC7" },
            { nombre: "Amarillo", color: "#FFFF00" }
        ]
    },
    // SIDO.
    {
        id: 32,
        nombre: "Sido",
        imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela con capacidad fusionable por calor, resistente y maleable a la hora de manejarlo",
        caracteristicas: [
            "Material: Tela fusionable",
            "Propiedades: Fusionable por calor, no se desprende por lavado o sufre ruturas",
            "Uso ideal: Endurecimiento de telas con fines de modisteria"
        ],
        colores: [
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Negro", color: "#000000ff" }
        ]
    },
    // TELA FUSIONABLE.
    {
        id: 33,
        nombre: "Tela Fusionable",
        imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela con adhesivo termosensible. Se fusiona con calor para acabados profesionales sin costura.",
        caracteristicas: [
            "Material: Con adhesivo térmico",
            "Aplicación: Con plancha",
            "Uso ideal: Terminaciones y parches"
        ],
        colores: [
            { nombre: "Blanco", color: "#FFFFFF" }
        ]
    },
    // TAFETA.
    {
        id: 34,
        nombre: "Tafeta",
        imagen: "https://images.unsplash.com/photo-1505903658795-8d3cc48039e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela de tafeta brillante y rigida. Elegancia clásica para vestidos formales y decoración.",
        caracteristicas: [
            "Material: Tafeta clásica",
            "Acabado: Brillante y crujiente",
            "Uso ideal: Vestidos de noche"
        ],
        colores: [
            { nombre: "Negro", color: "#000000" },
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Rojo Pasión", color: "#DC143C" },
            { nombre: "Azul Real", color: "#4169E1" },
            { nombre: "Verde Esmeralda", color: "#50C878" },
            { nombre: "Púrpura Real", color: "#6A0DAD" },
            { nombre: "Rosa Chicle", color: "#FF69B4" },
            { nombre: "Dorado", color: "#FFD700" }
        ]
    },
    // LONA MORRAL.
    {
        id: 35,
        nombre: "Lona Morral",
        imagen: "https://images.unsplash.com/photo-1520922682037-7c5fbc7d84df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Lona resistente y duradera para morrales y bolsos. Ideal para productos que requieren fuerza.",
        caracteristicas: [
            "Material: Lona pesada",
            "Resistencia: Muy alta",
            "Uso ideal: Bolsos y mochilas"
        ],
        colores: [
            { nombre: "Beige", color: "#F5F5DC" },
            { nombre: "Negro", color: "#000000" },
            { nombre: "Azul Marino", color: "#000080" },
            { nombre: "Verde Oliva", color: "#808000" },
            { nombre: "Café", color: "#8B4513" },
            { nombre: "Rojo", color: "#8B0000" },
            { nombre: "Gris", color: "#808080" },
            { nombre: "Verde Militar", color: "#4B5320" }
        ]
    },
    // TELA QUIRURGICA
    {
        id: 37,
        nombre: "Tela Quirúrgica",
        imagen: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        descripcion: "Tela estéril y de grado médico. Cumple con estándares de higiene y seguridad hospitalaria.",
        caracteristicas: [
            "Material: Grado médico",
            "Calibre: 70",
            "Uso ideal: Aplicaciones médicas, productos de 1 solo uso"
        ],
        colores: [
            { nombre: "Verde Claro", color: "#00A86B" },
            { nombre: "Azul Turqueza", color: "#1E90FF" },
            { nombre: "Blanco", color: "#FFFFFF" },
            { nombre: "Verde Menta", color: "#98FF98" },
            { nombre: "Rojo", color: "#ef0000ff" },
            { nombre: "Negro", color: "#000000ff" },
            { nombre: "Amarillo", color: "#ffd900ff" },
            { nombre: "Camel", color: "#db982cff" },
            { nombre: "Cafe", color: "#663204ff" },
            { nombre: "Naranja", color: "#e16b09ff" }
        ]
    }
];

// Clase principal para funcionalidades de telas
class TelasManager {
    constructor() {
        this.telas = telas;
        this.modal = document.getElementById('modal-tela');
        this.buscador = document.getElementById('buscador-telas');
        this.limpiarBtn = document.getElementById('limpiar-busqueda');
        this.telasGrid = document.getElementById('telas-grid');
        
        this.init();
    }
    
    init() {
        this.renderTelas();
        this.setupEventListeners();
        new Carousel(); // Inicializar carrusel
    }
    
    renderTelas() {
        this.telasGrid.innerHTML = '';
        
        this.telas.forEach(tela => {
            const telaCard = this.createTelaCard(tela);
            this.telasGrid.appendChild(telaCard);
        });
    }
    
    createTelaCard(tela) {
        const card = document.createElement('div');
        card.className = 'tela-card';
        card.setAttribute('data-nombre', tela.nombre.toLowerCase());
        
        card.innerHTML = `
            <div class="tela-imagen">
                <img src="${tela.imagen}" alt="${tela.nombre}" loading="lazy">
            </div>
            <h3>${tela.nombre}</h3>
            <p>${tela.colores.length} colores disponibles</p>
            <button class="btn-colores" data-id="${tela.id}">
                Ver Colores
            </button>
        `;
        
        // Event listener para el botón de colores
        const btnColores = card.querySelector('.btn-colores');
        btnColores.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openModal(tela.id);
        });
        
        return card;
    }
    
    setupEventListeners() {
        // Buscador
        this.buscador.addEventListener('input', (e) => {
            this.filtrarTelas(e.target.value);
        });
        
        // Limpiar búsqueda
        this.limpiarBtn.addEventListener('click', () => {
            this.buscador.value = '';
            this.filtrarTelas('');
        });
        
        // Cerrar modal
        document.getElementById('modal-close').addEventListener('click', () => {
            this.closeModal();
        });
        
        // Cerrar modal al hacer clic fuera
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Cerrar modal con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });
        
        // Botón consultar disponibilidad
        document.getElementById('btn-consultar').addEventListener('click', () => {
            this.consultarDisponibilidad();
        });
    }
    
    filtrarTelas(termino) {
        const busqueda = this.normalizarTexto(termino);
        const cards = document.querySelectorAll('.tela-card');
        let resultadosVisibles = 0;
        
        cards.forEach(card => {
            const nombre = card.getAttribute('data-nombre');
            if (busqueda === '' || nombre.includes(busqueda)) {
                card.classList.remove('hidden');
                resultadosVisibles++;
            } else {
                card.classList.add('hidden');
            }
        });
        
        // Mostrar mensaje si no hay resultados
        this.mostrarMensajeNoResultados(resultadosVisibles === 0 && busqueda !== '');
    }
    
    normalizarTexto(texto) {
        return texto.toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .trim();
    }
    
    mostrarMensajeNoResultados(mostrar) {
        let mensaje = document.querySelector('.no-resultados');
        
        if (mostrar && !mensaje) {
            mensaje = document.createElement('div');
            mensaje.className = 'no-resultados';
            mensaje.innerHTML = `
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3>No encontramos telas con ese nombre</h3>
                <p>Intenta con otro término o <a href="contacto.html">contáctanos</a> para ayuda personalizada.</p>
            `;
            this.telasGrid.appendChild(mensaje);
        } else if (!mostrar && mensaje) {
            mensaje.remove();
        }
    }
    
    openModal(telaId) {
    const tela = this.telas.find(t => t.id === telaId);
    if (!tela) return;
    
    // Actualizar contenido del modal
    document.getElementById('modal-titulo').textContent = tela.nombre;
    document.getElementById('modal-descripcion').textContent = tela.descripcion;
    
    // Actualizar características
    const caracteristicasList = document.getElementById('modal-caracteristicas');
    caracteristicasList.innerHTML = '';
    tela.caracteristicas.forEach(caracteristica => {
        const li = document.createElement('li');
        li.textContent = caracteristica;
        caracteristicasList.appendChild(li);
    });
    
    // Actualizar colores - ¡AQUÍ ESTÁ EL CAMBIO!
    const coloresGrid = document.getElementById('colores-grid');
    coloresGrid.innerHTML = '';
    tela.colores.forEach(colorObj => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-circulo';
        colorDiv.style.backgroundColor = colorObj.color; // Usar color hexadecimal
        colorDiv.setAttribute('title', colorObj.nombre);
        coloresGrid.appendChild(colorDiv);
    });
    
    // Mostrar modal
    this.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
    
    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    consultarDisponibilidad() {
        const telaNombre = document.getElementById('modal-titulo').textContent;
        const mensaje = `Hola, estoy interesado en la tela "${telaNombre}". ¿Podrían darme información sobre disponibilidad y precios?`;
        const url = `https://wa.me/1234567890?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }
}

// Carousel functionality (reutilizado de páginas anteriores)
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dotsContainer = document.querySelector('.carousel-dots');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        this.init();
    }
    
    init() {
        this.showSlide(this.currentSlide);
        this.createDots();
        this.setupEventListeners();
        this.startAutoSlide();
    }
    
    showSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.slides[index].classList.add('active');
        
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    }
    
    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        const carousel = document.querySelector('.carousel-container');
        carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
        carousel.addEventListener('mouseleave', () => this.startAutoSlide());
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.showSlide(this.currentSlide);
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
    
    startAutoSlide() {
        this.stopAutoSlide();
        this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }
    
    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TelasManager();
});