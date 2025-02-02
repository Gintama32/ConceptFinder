import { Tilt } from 'react-tilt'
import logo from './logo.png'
function Logo(){
    return (
        <div className = "ma4 mt0 logo">
            <Tilt options={{max:55}} className = 'Tilt br2 shadow-2' style = {{height: 150, width: 150}}>
                <div className='Tilt-inner pa2'><img alt = 'logo' className='mt4' src = {logo} style={{width:'100%', height:'100%'}}/></div>
            </Tilt>
        </div>
    )
}
export default Logo;