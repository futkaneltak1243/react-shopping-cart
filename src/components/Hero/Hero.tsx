const Overlay = () => {
    return (
        <div className="inset-0 absolute bg-black/50 z-10"></div>
    )
}
const Logo = () => {
    return (
        <h1 className="font-instrument absolute top-4 left-1/2  -translate-x-1/2 text-5xl text-white tracking-[15px] z-20">TORAL</h1>
    )
}

const HeroContent = () => {
    return (
        <div className="absolute w-full bottom-7  text-center z-20">
            <h3 className="text-white  md:text-5xl sm:text-4xl text-3xl mb-3">
                start shopping now
            </h3>
            <p className="text-white text-sm sm:text-base">
                we have the best products
            </p>
        </div>
    )
}


const Hero = () => {
    return (
        <section>
            <div className="w-full sm:h-[420px] h-[320px] relative">
                <img src="house.jpg" alt="hero" className="object-cover w-full h-full object-bottom" />
                <Overlay />
                <Logo />
                <HeroContent />
            </div>
        </section>
    )
}

export default Hero