import troll from '../assets/troll-face.png'

export default function Header()  {
    return (
        <header className="header">
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">
                        <div className="branding d-flex align-items-center">
                            <img src={troll} alt="troll face" className='"troll-face img-fluid' />
                            <h1 className='header-h1 text-capitalize'>meme generator</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <p className='header-text text-capitalize text end'>React Course - meme </p>
                </div>
            </div>
        </header>
    )
}


