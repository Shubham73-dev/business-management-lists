import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import img_1 from '../assets/images/img_1.jpg'

const BottomCard = (props) => {
    return (
        <>
            <div className="bottomcardConatiner" style={{display:'flex',flexDirection:'column',rowGap:'4rem'}}>
                <div className="imgContainer" style={{Width:'100%',minHeight:'150px'}}></div>
                <p>Importance of Training and Development Program</p>
                <div className='btn-i-container'>
                    <div className='icon-wrappers' style={{display:'flex',justifyContent:'center',width:'100%',columnGap:'1rem'}}>
                        <div className="iconsContainer"><DescriptionIcon /> <span>|</span> <span>59</span></div>
                        <div className="iconsContainer"><DescriptionIcon /> <span>|</span> <span>13362</span></div>
                        <div className="iconsContainer"><RemoveRedEyeIcon /> <span>|</span> <span>408</span></div>
                    </div>
                    <button className='center-align'>View Document</button>
                </div>
            </div>
        </>
    )
}

export default BottomCard