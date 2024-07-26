import React, { useState } from 'react'
import './Mywork.css'
import { assets } from '../../assets/assets';
const Mywork = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  }
  return (
    <div id='work' className="portfolio">
      <h1 className="portfolio-title">My Portfolio</h1>
      <div className="portfolio-items">
        <div className="portfolio-item">

          <img src="https://tint.creativemarket.com/rQHglmjViPzZrAKFc3EAuD6naHJt9grbx6Ed8LmLeHs/width:1160/height:774/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzY0My82NDMzLzY0MzMyODMvMzAxLW8uanBn?1558522466" alt="Project 1" className="portfolio-image" />
          <h2 className="portfolio-item-title">Project 1</h2>
          <p className="portfolio-item-description">Trifold Brochures for Business</p>
        </div>
        <div className="portfolio-item">
          <img src="https://tint.creativemarket.com/xpWAX4gsDjfE6-bQrt_bgYSO6olKM9ZDuZCDHyNh0LA/width:1160/height:774/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzczMS83MzE5LzczMTk0NzcvaWNlLWJ1bmRsZS1vLnBuZw?1574074350" alt="Project 2" className="portfolio-image" />
          <h2 className="portfolio-item-title">Project 2</h2>
          <p className="portfolio-item-description">Product Packaging Design</p>
        </div>
        <div className="portfolio-item">
          <img src="https://5.imimg.com/data5/JI/QZ/YR/SELLER-15448434/graphic-logo-design.jpg" alt="Project 3" className="portfolio-image" />
          <h2 className="portfolio-item-title">Project 3</h2>
          <p className="portfolio-item-description"> Brand and Logo Design</p>
        </div>
        <div className="portfolio-item">
          <img src="https://tint.creativemarket.com/Q9_EKVKoG2FR1iVocNQKvAnzKE_sSHneQFgcqMttyPs/width:1160/height:770/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzYzMC82MzA0LzYzMDQ3MzUvYXJ0LWRlY28td2VkZGluZy1pbnZpdGF0aW9uLXRlbXBsYXRlcy1vLmpwZw?1556282364" alt="Project 3" className="portfolio-image" />
          <h2 className="portfolio-item-title">Project 4</h2>
          <p className="portfolio-item-description"> Wedding Invitation</p>
        </div>
        <div className="portfolio-item">
          <img src="https://tint.creativemarket.com/ORF92mRDTixznmQ_zqkRmoyq83C_Fsvp2dkHiCzC3rw/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzYxMS82MTE5LzYxMTkwNzAvYmxhY2tib2FyZC1tZW51LXRlbXBsYXRlLTAtby5qcGc?1553410091&fmt=webp" alt="Project 3" className="portfolio-image" />
          <h2 className="portfolio-item-title">Project 5</h2>
          <p className="portfolio-item-description"> Printed Food Menu</p>
        </div>
        <div className="portfolio-item">
          <img src="https://tint.creativemarket.com/OaNzveu8cmwM2uL96R3BOLvn1MlhRcKCd7-PGi8h2U8/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzE0NS8xNDU1LzE0NTUyMzkvaW5mb2dyYXBoaWMtdGltZWxpbmUtMjAxNi1jaXJjbGUtaWNvbnMtMi0yLW8uanBn?1468579919&fmt=webp" className="portfolio-image" />
          <h2 className="portfolio-item-title">Project 6</h2>
          <p className="portfolio-item-description"> Vector infographic timeline template</p>
        </div>
        <div className="portfolio-item">
          <img src="https://tint.creativemarket.com/v6P7lrB2KDi0gZxcR_ZCsZ_PDYZcujNPanLGbrkZ1Gk/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/preset:cm_watermark_retina/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzgyNi84MjY4LzgyNjgyNTIvY292aWRfY292ZXIxLTAxLW8uanBn?1714321084&fmt=webp" alt="Project 3" className="portfolio-image" />
          <h2 className="portfolio-item-title">Project 7</h2>
          <p className="portfolio-item-description"> Infographic Posters</p>
        </div>
      </div>
    </div>
  )
}

export default Mywork