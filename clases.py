# Comparacion de clases de Python con JS


class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hablar(self):
        print(f"{self.nombre} hace un sonido.")


# El init es el constructor de la clase.


class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre)
        self.raza = raza

    def ladrar(self):
        print(f"{self.nombre}: Woof woof.")


# El super() llama al constructor de la clase padre.

firulais = Perro("Firulais", "Cocker")
firulais.ladrar()
firulais.hablar()
