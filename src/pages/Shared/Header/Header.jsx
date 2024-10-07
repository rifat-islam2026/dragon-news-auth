import moment from 'moment';
import logo from '../../../assets/logo.png';
import BreakingNews from '../../Home/BreakingNews';


function Header() {
    return (
        <div className='text-center'>
            <img src={logo} className='mx-auto py-3' />
            <p className='text-gray-500 mb-2'>Journalism Without Fear or Favour</p>
            <p className='text-gray-500 font-semibold text-lg mb-4'>{moment().format("dddd, MMMM D, YYYY,")}</p>
            <BreakingNews/>
        </div>
    )
}

export default Header
