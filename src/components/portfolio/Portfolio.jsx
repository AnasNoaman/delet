import style from './Portfolio.module.css'
import img1 from '../../assets/cabin.png'
import img2 from '../../assets/cake.png'
import img3 from '../../assets/circus.png'
import img4 from '../../assets/game.png'
import img5 from '../../assets/safe.png'
import img6 from '../../assets/submarine.png'
export default function Portfolio() {
  
  return (
    <section className="py-5">
  <div className="container">
    <div className="portfolio-divider d-flex align-items-center justify-content-center mb-5 g-5 flex-column">
      <h2 className=" fw-bold mb-2">PORTFOLIO</h2>
      <span className="portfolio-star mx-3">★</span>
    </div>
    <div className=" text-center d-flex flex-column g-5">
      <div className="row align-items-center d-flex gap-3 ">
        <div className="col">
          <img className={` ${style.imgw}`} src={img1} />
        </div>
        <div className="col">
          <img className={` ${style.imgw}`} src={img2} />
        </div>
        <div className="col">
        <img className={` ${style.imgw}`} src={img3} />
        </div>
      </div>
      <div className="row align-items-center pt-5 d-flex gap-3">
        <div className="col">
        <img className={` ${style.imgw}`} src={img4} />
        </div>
        <div className="col">
        <img className={` ${style.imgw}`} src={img5} />
        </div>
        <div className="col">
        <img className={` ${style.imgw}`} src={img6} />
        </div>
      </div>
    </div>
  </div>
</section>
   
  )
}
