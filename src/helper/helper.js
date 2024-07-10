import cake01 from "../assets/chocoCake.png"
import cake02 from "../assets/cheesecakeMorango.png"
import cake03 from "../assets/mousseCake.png"
import cake04 from "../assets/cheesecakeMirtilo.png"

import client01 from "../assets/testimonials/client02.PNG"
import client02 from "../assets/testimonials/client03.PNG"

import star from '../assets/rating.png'

export const navItems = [
     { label: "Cardapio", href: '#cardapio' },
     { label: "Depoimentos", href: '#depoimentos' },
     { label: "Contatos", href: '#/' }
]

export const menuCakes = [
     {
          image: cake01,
          title: "Bolo de Chocolate",
          description:'Bolo de chocolate com recheio multi-camadas',         
          rating: star,
          likes:" (+390)",
          price: "39,00",
     },
     {
          image: cake02,
          title: "CheeseCake de Morango",
          description:'O melhor dos morangos selecionados',         
          rating: star,
          likes:" (+600)",
          price: "54,00",
     },
     {
          image: cake03,
          title: "Mousse Caramelado",
          description:'A melhor combinação de textura e sabor',         
          rating: star,
          likes:" (+190)",
          price: "21,00",
     },
     {
          image: cake04,
          title: "CheeseCake de Mirtilo",
          description:'O melhor do blueBerry',         
          rating: star,
          likes:" (+450)",
          price: "67,00",
     },
]

export const testimonials = [
     {
          image:client01,
          name: "Alexandra Simões",
          description:"Além de deliciosos, os doces são lindos! A apresentação é tão encantadora que dá até pena de comer.",
          rating: star,
     },
     {
          image:client02,
          name: "Rodrigo Algusto da Silva",
          description:"Cada vez que provo um doce, é uma experiência única e maravilhosa. Eles realmente sabem como encantar os clientes.",
          rating: star,
     }
]