const usuario = {
    nombre: 'Checo',
    saludar() {
        console.log(`Hola, soy ${this.nombre} y mi apellido es ${this.apellido}.`);
    },
    apellido: 'Perez',
    profesion: 'Piloto de F1',
    trabajo_actual() {
        console.log(`Actualmente soy ${this.profesion}`);
    }
};

usuario.saludar(); // Hola, soy Juan
usuario.trabajo_actual(); // Actualmente soy Piloto de F1