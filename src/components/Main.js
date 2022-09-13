import Style from 'style-it';

function Main({info, title, description, link, img, sImg, fill}) {

let infoTabs = ['OVERVIEW', 'STRUCTURE', 'SURFACE'];

const addActive = (e) => {
    let textInfo = document.querySelector('.info-text');
    let planetImg = document.querySelector('.planet-img')
    let surfaceImg = document.querySelector('.surface-img')

    info.forEach(inf => {

        if(e.target.innerText === 'OVERVIEW') {
            if(inf.id === 1){
                textInfo.innerText = inf.text;
                planetImg.src = inf.imgSrc;
                surfaceImg.classList.remove('show')
            }
        }
        else if(e.target.innerText === 'STRUCTURE') {
            if(inf.id === 2){
                textInfo.innerText = inf.text;
                planetImg.src = inf.imgSrc;
                surfaceImg.classList.remove('show')
            }
        }
        else if(e.target.innerText === 'SURFACE') {
            if(inf.id === 3){
                textInfo.innerText = inf.text
                planetImg.src = inf.imgSrc;
                surfaceImg.classList.add('show')
            }
        }
    })
}

  return (
    <main className="main mt-20 mb-20 flex 
                    lg:gap-4 lg:flex-col lg:mt-4 lg:mb-8">
      <div className="img-container basis-1/2">
        <div className="img-box relative md:mt-16">
            <img src={img} alt="planet-img" className="planet-img w-400 mx-auto my-0 lg:w-300"></img>
            <img src={sImg} alt="planet-img" className="surface-img"></img>
        </div>
      </div>
      <article className="content basis-1/2 flex flex-col gap-8 px-4 
                        lg:mt-5 lg:mb-10 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4 lg:px-2
                        md:!flex md:items-center">
        <h2 className="text-8xl lg:text-4xl lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 md:!text-2xl">{title}</h2>
        <p className="info-text text-lg w-9/12 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 lg:w-full lg:leading-normal md:text-center md:text-base">{description}</p>
        <p className="text-lg lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 md:text-sm">Source : 
            <a href={link} className="source-icon relative font-semibold" style={{color:fill}}> Wikipedia 
                <svg className="inline absolute bottom-1 -right-3.5" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill={fill} d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity="1"/></svg>
            </a>
        </p>
        <div className="info-tabs flex flex-col gap-4 
                        lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4 lg:justify-center
                        md:absolute md:!top-16 md:w-90w md:!justify-evenly md:flex-row">
            {infoTabs.map((tab) => (
                Style.it(`
                .info-tab:focus{
                    background-color: ${fill};
                }
                @media(max-width:767px){
                    
                }
                `,
                <button onClick={addActive} className="info-tab text-center text-white font-medium p-4 tracking-widest border border-grey cursor-pointer
                                                      md:border-none md:text-xs">
                    {tab}
                </button>
                )
            ))}
        </div>
      </article>
    </main>
  )
}

export default Main
