import React, { useContext, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../dataProvider/DataProvider';
import Colors from "../colors/Colors"
import Sizes from "../sizes/Sizes"
import { goToProducts } from '../../routes/Coordinator';

const Details = () => {
    const { id } = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart

    const imgDiv = useRef()

    const navigate = useNavigate();

    const details = products.filter((product, index) => {
        return product._id === id
    })
    // console.log(details);

    const handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }

    return (
        <>
            {
                details.map(product => (
                    <div className='details' key={product._id}>
                        <div className='img-container' onMouseMove={handleMouseMove}
                            style={{ backgroundImage: `url(${product.image})` }}
                            ref={imgDiv}
                            onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />
                        <div className='box-details'>
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>R${product.price}</h3>
                            <Colors colors={product.colors} />
                            <Sizes sizes={product.sizes} />
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <button  
                            className="cart" 
                            onClick={() => addCart(product._id)}>
                                Adicionar ao carrinho
                            </button>
                            <button onClick={() => goToProducts(navigate)} className='cart'>Voltar aos produtos</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Details
