import React from 'react'
import './Book1.css'
// import Card from '../Cards/Card'
// import Card2 from '../Card2/Card2'
import cimg2 from '../../../Asserts/Img/image2.jpg';
// import cimg3 from '../../../Asserts/Img/image3.jpg';
import cimg4 from '../../../Asserts/Img/image4.jpg';
import cimg5 from '../../../Asserts/Img/image5.jpg';
import cimg6 from '../../../Asserts/Img/image6.jpg';
import cimg7 from '../../../Asserts/Img/image7.jpg';
import cimg8 from '../../../Asserts/Img/image8.jpg';
import cimg9 from '../../../Asserts/Img/image9.jpg';
import cimg10 from '../../../Asserts/Img/image10.jpg';
import fdown from '../../../Asserts/Img/dpdf.pdf';
import Card3  from '../Card3/Card3'

function Book1() {
 
  return (
    <>
    <div className="bmain">
    <Card3 image={cimg5}
    bname='dop-he-dop'
    name='Ahmad-khan'
    down={fdown} />
    <Card3 image={cimg6}
    bname='dop-he-dop'
    name='Ahmad-khan'
    down={fdown} />
    <Card3 image={cimg2}
    bname='farman-e-ghalib'
    name='Ghalib'
    down={fdown} />
    <Card3 image={cimg4}
    bname='dawn-e-ghalib'
    name='Asad'
    down={fdown} />
     <Card3 image={cimg7}
    bname='social enginering'
    name='pablo asco bar'
    down={fdown} />
     <Card3 image={cimg2}
    bname='saya-e-sanam'
    name='mer-taqi-mer'
    down={fdown} />
     <Card3 image={cimg4}
    bname='dop-or-cho'
    name='Ahmad-faraz'
    down={fdown} />
    <Card3 image={cimg8}
    bname='dop-he-dop'
    name='Ahmad-khan'
    down={fdown} />
    <Card3 image={cimg9}
    bname='dop-he-dop'
    name='Ahmad-khan'
    down={fdown} />
    <Card3 image={cimg10}
    bname='dop-he-dop'
    name='Ahmad-khan'
    down={fdown} />
    <Card3 image={cimg2}
    bname='dop-he-dop'
    name='Ahmad-khan'
    down={fdown} />
    </div>
    </>
  )
}

export default Book1