import {React, useState} from 'react';
import Modal from 'react-modal';
import './Header.css'


Modal.setAppElement('#root')

const Header = () => {
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [cep, setCep] = useState('');
    const [shippingData, setShippingData] = useState([]);
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleCepChange = (e) => {
        setCep(e.target.value);
    };

    const handleCalculateShipping = async () => {
        try {
    
          const shippingInfo = [
            { company: 'Correios - Sedex', standard: 55.70, express: 89.90 },
            { company: 'Azul Cargo Express', standard: 47.49, express: 78.89 },
            { company: 'Jadlog', standard: 37.59, express: 66.20 },
            { company: 'BrasPress', standard: 42.39, express: 71.30 },
          ];
    
          setShippingData(shippingInfo);
        } catch (error) {
          console.error('Erro ao buscar dados de envio.', error);
        }
      };


    return(
        <header>
            <nav className='navbar'>
                <h3 className='logo'>Digital <span className='logo-div'>Store</span></h3>
                <ul className='nav-menu'>
                    <li className='nav-itens'> <span>Home</span> </li>
                    <li className='nav-itens'> <span>Produtos</span> </li>
                    <li onClick={openModal} className='nav-itens'> <span>Frete</span> </li>
                </ul>
            </nav>
            
            <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
                <div className='close'>
                    <button onClick={closeModal}>X</button>

                </div>
                
                <div>
                    <div className='form-cep'>
                        <h2>Calcular frete</h2>
                        <label>Insira seu CEP:</label><br/>
                        <input type="text" value={cep} onChange={handleCepChange} placeholder='Ex: 00000-000'/><br/>
                        <button onClick={handleCalculateShipping}>Calcular</button>
                    </div>

                    {shippingData.length > 0 && (
                        <table className='table-services'>
                            <thead>
                                <tr>
                                    <th className='thead'>Transportadora</th>
                                    <th className='thead'>Entrega padrão</th>
                                    <th className='thead'>Entrega Expressa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shippingData.map((shipping, index) => (
                                    <tr key={index}>
                                        <td className='thead'>{shipping.company}</td>
                                        <td className='price'>R${shipping.standard.toFixed(2)}</td>
                                        <td className='price'>R${shipping.express.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    </div>
            </Modal>
        </header>
    )
}
   
export default Header;