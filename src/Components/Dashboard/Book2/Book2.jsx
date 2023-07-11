import React from 'react'
import './Book2.css'
import Card from '../Cards/Card'
import cimg from '../../../Asserts/Img/image2.jpg'
import fdown from '../../../Asserts/Img/dpdf.pdf'
import Card3 from '../Card3/Card3';
import cimg2 from '../../../Asserts/Img/image2.jpg';
// import cimg3 from '../../../Asserts/Img/image3.jpg';
import cimg4 from '../../../Asserts/Img/image4.jpg';
import cimg5 from '../../../Asserts/Img/image5.jpg';
import cimg6 from '../../../Asserts/Img/image6.jpg';

function Book2() {
  return (
    <>
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
    </>
  )
}

export default Book2;