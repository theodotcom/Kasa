import banner from '../assets/banner.png'
import '../styles/Banner.css'

function Banner() {
  const title = 'Chez vous, partout et ailleurs'
  return (
    <section className="kasa-banner">
        <img src={banner} alt="kasa" className="kasa-img" />
        <h1 className="kasa-slogan">{title}</h1>
    </section>
  )
}

export default Banner