import React, { createContext, useEffect, useState } from 'react'
import ShirtA from "../../Images/shirt-1.jpeg"
import ShirtB from "../../Images/shirt-2.png"
import ShirtC from "../../Images/shirt-3.jpeg"
import ShirtD from "../../Images/shirt-4.jpeg"
import ShirtE from "../../Images/shirt-5.jpg"
import ShirtF from "../../Images/shirt-6.jpeg"
import ShirtG from "../../Images/shirt-7.jpg"
import ShirtH from "../../Images/shirt-8.jpeg"
import ShirtI from "../../Images/shirt-9.jpeg"
import ShirtJ from "../../Images/shirt-10.jpg"

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "camiseta 01",
            "image": ShirtA,
            "description": "Nerd is the new cool. Em uma galáxia nem tão distante assim, nasceram nossas camisetas. Com uma qualidade interestelar e Bacharéis na exclusividade. A estampa desta camiseta tem um efeito craquelado proposital, para dar ainda mais personalidade ao seu look.",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 75,
            "count": 1,
            "name": "a"
        },
        {
            "_id": "2",
            "title": "camiseta 02",
            "image": ShirtB,
            "description": "Coleção de camisetas pra quem tem gasolina e adrenalina nas veias e curte velocidade e muita emoção. Você também é Acelerado? Então vem!",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 84,
            "count": 1,
            "name": "b"
        },
        {
            "_id": "3",
            "title": "camiseta 03",
            "image": ShirtC,
            "description": "Em design liso com acabamento estilo flamê, que conta com leve textura, a camiseta masculina Lucky Sailing é aliada da praticidade nas suas combinações do dia a dia. Uma peça super versátil para acompanhar suas calças e bermudas favoritas. Garanta já!",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 87,
            "count": 1,
            "name": "c"
        },
        {
            "_id": "4",
            "title": "camiseta 04",
            "image": ShirtD,
            "description": "Construir um visual easy & cool nunca foi tão fácil! Aposte nesta camiseta e componha looks extremamente estilosos e atualizados. Desenvolvida em poliéster e algodão, traz shape solto, gola redonda, silk frontal, caimento reto, com modelagem regular e acabamento prespontado. Aposte!",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 43,
            "count": 1,
            "name": "d"
        },
        {
            "_id": "5",
            "title": "camiseta 05",
            "image": ShirtE,
            "description": "Confortáveis e descoladas as camisetas trazem praticidade para emendar estações e ocasiões com modernidade. Elaboradas em malha 100% algodão, ultramacia e irresistivelmente elegante, possuem modelagem regular, logo e acabamento prespontado. Versáteis, são daqueles must have para todos os dias. Aposte!",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 263,
            "count": 1,
            "name": "e"
        },
        {
            "_id": "6",
            "title": "camiseta 06",
            "image": ShirtF,
            "description": "Adicione atitude ao seu visual com esta camiseta, que recebe estampa exclusiva para inspirar combinações cheias de personalidade. Opção versátil para quem valoriza conforto e praticidade, ótima pedida para te acompanhar do dia a dia ao lazer. Garanta a sua!",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 44,
            "count": 1,
            "name": "f"
        },
        {
            "_id": "7",
            "title": "camiseta 07",
            "image": ShirtG,
            "description": "Um look casual, leve e despojado com esta camiseta estampada! Confeccionada em material que garante maciez e conforto, essa camiseta apresenta estampa moderna que dá um up no seu visual, ideal para um rolê com os amigos. Compre já a sua!",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 22,
            "count": 1,
            "name": "g"
        },
        {
            "_id": "8",
            "title": "camiseta 08",
            "image": ShirtH,
            "description": "Adicione atitude ao seu visual com esta camiseta, que recebe estampa exclusiva para inspirar combinações cheias de personalidade. Opção versátil para quem valoriza conforto e praticidade, ótima pedida para te acompanhar do dia a dia ao lazer. Garanta a sua!",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 61,
            "count": 1,
            "name": "h"
        },
        {
            "_id": "9",
            "title": "camiseta 09",
            "image": ShirtI,
            "description": "Desenvolvida em 100% algodão, traz shape solto, gola redonda, silk frontal, caimento reto, com modelagem regular e acabamento prespontado. Tão versátil quanto seu dia a dia é perfeita para arrematar looks casuais sem a mínima preocupação. Aposte!",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 53,
            "count": 1,
            "name": "i"
        },
        {
            "_id": "10",
            "title": "camiseta 10",
            "image": ShirtJ,
            "description": "Estas camisetas oferecem aquele ar descolado, sem deixar a sofisticação de lado. Desenvolvidas em algodão, exibem shape soltinho, modelagem reta, e acabamento prespontado. Must have absoluto, são perfeitas para agregar estilo e casualidade a moods diários. Aposte e marque presença!",
            "colors": ["red", "black", "teal"],
            "sizes": ["GG", "G", "M", "P", "PP"],
            "price": 127,
            "count": 1,
            "name": "j"
        }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("O produto foi adicionado ao carrinho.")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}