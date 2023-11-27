import React from 'react'
import CardProducts from '../CardProducts'
import MediaCard from '../MediaCard'
import './Table.css'

const Table = ()=> {
  return (
        <div className='responsive-table'>
            <table>
            <h3 className='section'>Processadores</h3>
                <tbody>
                    <tr className='line'>
                        <td className='column'>
                            <CardProducts
                                title='Processador AMD Ryzen 9 5900X, 3.7GHz (4.8GHz Max Turbo)'
                                coin='R$'
                                old_price='2.241,04'
                                price='1.999,99'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438942_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='Processador Intel Core i7 14700K 14ª Geração 3.4 GHz (5.6GHz Turbo)'
                                coin='R$'
                                old_price='3.888,39'
                                price='3.534,90'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560420_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='Processador AMD Ryzen 7 5800X, 3.8GHz (4.7GHz Max Turbo)'
                                coin='R$'
                                old_price='1.684,20'
                                price='1.489,99'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6439/6439000_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='Processador Intel Core i9 14900K, 3.6 GHz (6.0GHz Turbo)'
                                coin='R$'
                                old_price='7.299,00'
                                price='4.299,00'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560418_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='Processador Intel Core I5 14600k 14 Geração, 3.5 Ghz (5.3 Ghz Turbo)'
                                coin='R$'
                                old_price='3.159,89'
                                price='2.749,52'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560423_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                    </tr>
                    
                    <h3 className='section'>Placas de vídeo</h3>
                    
                    <tr className='line'>
                        <td className='column'>
                            <CardProducts
                                title='MSI - NVIDIA GeForce RTX 3060 Ventus 3X 12G OC - 12GB GDDR6 '
                                coin='R$'
                                old_price='2.299,00'
                                price='2.010,00'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452940_sd.jpg;maxHeight=640;maxWidth=550'
                                alt='Imagem da NVIDIA GeForce RTX 3060 Ventus'
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='MSI - NVIDIA GeForce RTX 4060 Ti GAMING 8GB DDR6X'
                                coin='R$'
                                old_price='3.333,32'
                                price='2.799,99'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6545/6545379_sd.jpg;maxHeight=640;maxWidth=550'
                                alt='Imagem da NVIDIA GeForce RTX 4060 Ti GAMING'
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='MSI - AMD Radeon RX 6500 XT Mech 2X 4G OC - 4GB GDDR6'
                                coin='R$'
                                old_price='3.159,89'
                                price='2.749,52'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6497/6497196_sd.jpg;maxHeight=640;maxWidth=550'
                                alt='Imagem da AMD Radeon RX 6500 XT Mech 2X'
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='PNY - NVIDIA GeForce GTX 1650 4GB GDDR6'
                                coin='R$'
                                old_price='1.429,99'
                                price='1.247,89'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502683_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='MSI - AMD Radeon RX 6600 XT MECH 2X 8G OC GDDR6'
                                coin='R$'
                                old_price='2.595,00'
                                price='2.359,99'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476228_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                    </tr>
                    
                    <h3 className='section'>Marcas recomendadas</h3>
                    
                    <tr className='line'>
                        <td className='column'>
                            <MediaCard
                                brand='CORSAIR'
                                dir='https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fthemes.kabum.com.br%2Fbrandpage%2F91700573811.jpeg&w=384&q=75'
                                description=''
                                link='https://www.corsair.com/br/pt'
                            />
                        </td>
                        <td className='column'>
                            <MediaCard
                                brand='XPG'
                                dir='https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fthemes.kabum.com.br%2Fbrandpage%2F21696961156.jpeg&w=384&q=75'
                                description=''
                                link='https://www.xpg.com/uk/xpg/'
                            />
                        </td>
                        <td className='column'>
                            <MediaCard
                                brand='LOGITECH G'
                                dir='https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fthemes.kabum.com.br%2Fbrandpage%2F71697054068.jpeg&w=384&q=75'
                                description=''
                                link='https://www.logitechg.com/pt-br'
                            />
                        </td>
                        <td className='column'>
                            <MediaCard
                                brand='HUSKY'
                                dir='https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fthemes.kabum.com.br%2Fbrandpage%2F61696961351.png&w=384&q=75'
                                description=''
                                link=''
                            />
                        </td>
                        <td className='column'>
                            <MediaCard
                                brand='HyperX'
                                dir='https://s7d6.scene7.com/is/image/hpassetsprod/HyperX%20Cover?$large$'
                                description=''
                                link='https://row.hyperx.com/pt-br/'
                            />
                        </td>
                    </tr>

                    <h3 className='section'>Consoles</h3>

                    <tr className='line'>
                        <td className='column'>
                            <CardProducts
                                title='Sony - PlayStation 5 Console – Marvel’s Spider-Man 2 Bundle'
                                coin='R$'
                                old_price='4.799,90'
                                price='4.463,91'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6561/6561784_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='Nintendo - Switch Mario Kart 8 Deluxe Bundle + 3M Nintendo Switch Online'
                                coin='R$'
                                old_price='2.299,00'
                                price='1.829,00'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560569_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='Microsoft - Xbox Series X 1TB Console - Diablo IV Bundle - Preto'
                                coin='R$'
                                old_price='4.799,00'
                                price='4.450,00'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6537/6537717_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='Sony - PlayStation 5 Slim Console – Call of Duty Modern Warfare III Bundle'
                                coin='R$'
                                old_price='5.999,99'
                                price='5.459.89'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6563/6563925_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                        <td className='column'>
                            <CardProducts
                                title='Microsoft - Xbox Series S 512GB All-Digital Bundle com Game Pass '
                                coin='R$'
                                old_price='2.759,00'
                                price='2.575,99'
                                dir='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6558/6558673_sd.jpg;maxHeight=640;maxWidth=550'
                                alt=''
                            />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
  )
}

export default Table;