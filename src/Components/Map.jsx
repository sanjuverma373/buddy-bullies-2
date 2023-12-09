import React from 'react'
import image1 from '../assets/images/sec-2-img1.png'
import image2 from '../assets/images/sec-2-img2.png'
import image3 from '../assets/images/sec-2-img3.png'
import image4 from '../assets/images/sec-2-img4.png'
import image5 from '../assets/images/sec-2-img5.png'
import image6 from '../assets/images/sec-2-img6.png'
const commoncrds = [
        {
                className:"pding-1",
        image1:image1,
        heading: "ART COLLECTION",
        para:'Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.',
        alt:'image'
        },
        {
        className:"pding-2",
        image1:image2,
        heading: "SPECIAL BULLIES",
        para:'20 Buddybullies {out of 10k} will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting}.',
        alt:'image'
        },
        {
        className:"pding-2",
        image1:image3,
        heading: "BREEDING",
        para:'Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}.',
        alt:'image'
        },
        {
        className:"pding-4",
        image1:image4,
        heading: "DIGITALMARKETS",
        para:'Communicate with all the digital markets available in the Solana NFT world  for getting our collection successfully listed.',
        alt:'image'
        },
        {
        className:"pding-4",
        image1:image5,
        heading: "MERCH",
        para:'The team is working on the future merch thet will be available for the community members directly on our webpage.',
        alt:'image'
        },
        {
        className:"pding-5",
        image1:image6,
        heading: "CHARITY",
        para:'We will be giving 30% of the royalties to charity permanently  and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.',
        alt:'image'
        },
        
]
const Map = () => {
 const Card =commoncrds.map((crds)=>(
                <div className='col-xl-4 col-md-6 col-12 '>
                        <div className= {`common-crd ${crds.className}`}>
                            <img src={crds.image1} alt="crds.alt" />
                            <h2 className='m-0 fs-xl fw-semibold pb-4 text-white pt-2 ff-poppins '>{crds.heading}</h2>
                            <p className='fs-sm1 fw-normal text-white opcity-7 ff-poppins'>{crds.para}</p>
                        </div>                  
 </div>    
 ))
  return (
    <div className='bg-blue py-4'>
        <div className="container">
                <div className="row row-gap-4">
                  {Card}
                </div>
        </div>      
    </div>
  )
}

export default Map
