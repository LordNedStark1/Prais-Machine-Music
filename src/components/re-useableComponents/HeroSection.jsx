import './HeroSection.css'

function HeroSection(prop){
    const {text} = prop
    return (
        <div className="main-div">
           <h1 className='hero-text'> {text} </h1>
        </div>
    )

}
export default HeroSection