import React, { useContext, useMemo, useState } from 'react'
import { DataContext } from '../../components/dataProvider/DataProvider'
import { Link } from 'react-router-dom'

const Products = () => {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    const [search, setSearch] = useState('')
    const [order, setOrder] = useState("")

    // const [products] = useContext(DataContext)
    // console.log(products);
    // console.log(search);

    const asc = (a, b) => { return a.price - b.price }
    const dsc = (a, b) => { return b.price - a.price }
    const original = (a, b) => { return a._id - b._id }

    switch (order) {
        case "ASC":
            products.sort(asc)
            break;
        case "DSC":
            products.sort(dsc)
            break;
        case "":
            products.sort(original)
            break;
        default:
            products.sort(original)
            break
    }

    // console.log(products);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const searchProduct = useMemo(() => {
        const lowerSearch = search.toLowerCase()
        return products.filter((product) => product.title.toLowerCase().includes(lowerSearch))
    })

    return (
        <div>
            <div className='search-product'> Busca de produtos:
                <input
                    type="text"
                    value={search}
                    placeholder='Digite o nome do produto'
                    className='search-product-input'
                    onChange={(e) => setSearch(e.target.value)}
                    products={products}
                ></input>
            </div>
            <div>
                <label className='sort-product'> Ordenar produtos por preço:
                </label>
                <select className='sort-product-select' value={order} onChange={(e) => setOrder(e.target.value)}>
                    <option value="">Selecione...</option>
                    <option value="ASC">Crescente</option>
                    <option value="DSC">Decrescente</option>
                </select>
            </div>
            <div className="products">
                {
                    searchProduct.map(product => (
                        <div className="card" key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                <img src={product.image} alt="imagem do produto" />
                            </Link>
                            <div className="box">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product._id}`}> {product.title}</Link>
                                </h3>
                                <p>{product.description}</p>
                                <h4>R$ {product.price}</h4>
                                <button
                                    onClick={() => addCart(product._id)}>
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
