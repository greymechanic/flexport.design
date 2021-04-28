import banner from '../assets/pink.png';

const Cover = () => {
  return (
    <main className="sans-serif cf pa3 pa4-m pa5-l mw9 center">
      <div className="fr w-100 w-80-l">
        <p className="f6">
          Flexport
        </p>
        <h1 className="f2 f1-l lh-title mt0 mb4 mb5-ns">
          User Experience
        </h1>
      </div>
      <div className="f6 lh-copy fl w-100 mb4">
        <div className="fl-ns w-100 w-20-l pr3-m pr5-l">
          <p>
            Just enough, just in time
          </p> 
        </div>
        <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
          <p>
            Design for control
          </p> 
        </div>
        <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
          <p>
            Infinite data, finite presentation
          </p> 
        </div>
        <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
          <p>
            Build trust and confidence through transparency
          </p>
        </div>
        <div className="fl-ns w-50-m w-20-l pr3-m pr5-l">
          <p>
            Everyday value through built fluency
          </p>
        </div>
      </div>
      <img src={banner} className="db" alt="placeholder"/>
    </main>
  )};

export default Cover;