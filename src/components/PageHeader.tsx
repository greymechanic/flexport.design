import logo from '../logo.svg';

const PageHeader = () => {
  return (
    <header className="sans-serif">
      <div className="cover bg-left bg-center-l" >
        <div className="bg-black-80 pb5 pb6-m pb7-l">
          <nav className="dt w-100 mw8 center"> 
            <div className="dtc w2 v-mid pa3">
              <a href="/" className="dib w3 h2 pa1">
                <img src={logo}  alt="logo" />
              </a>
            </div>
          </nav> 
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Flexport User Experience</h1>
            <h2 className="fw1 f3 white-80 mt3 mb4">Designing the future of global logistics</h2>
          </div>
        </div>
      </div> 
  </header>
  )};

export default PageHeader;