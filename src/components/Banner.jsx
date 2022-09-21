import banner from '../assets/banner.png'
import '../styles/Banner.css'

function Banner() {
  const title = 'Chez vous, partout et ailleurs'
  return (
    <section className="kasa-banner">
      <div className="kasa-mask">
        <div className="kasa-bg"></div>
        <img src={banner} alt="kasa" className="kasa-img" />
      </div>
      <h1 className="kasa-slogan">{title}</h1>
    </section>
  )
}

export default Banner