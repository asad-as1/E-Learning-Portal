import { Button, Typography } from '@mui/material'
import scss from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={scss.header}>
        <ul className={scss.menu}>
            <li><Link className={scss.logo} to='/'><Typography variant='h6'>Learning App</Typography></Link></li>
            <li><Link to='/'> <Typography color={'white'}>Home</Typography> </Link></li>
            <li><Link to='/profile'> <Typography color={'white'}>Profile</Typography> </Link></li>
        </ul>
        <div className={scss.buttonMenu}>
        <Button variant='contained' color="success"><Link to='/login'>Sign in</Link></Button>
        <Button variant='contained' color="error"><Link to='/logout'>Sign out</Link></Button>
        <Button variant='contained' color="info"><Link to='/register'>Sign in</Link></Button>
        </div>

    </header>
  )
}

export default Header