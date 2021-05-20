import { Link } from 'react-router-dom'

function Nav()
{
    return(
        <nav>
            <h3>RecipeMust</h3>
            <ul className='nav-links'>
                <Link to = '/home'>
                    <li>
                        Home!
                    </li>
                </Link>
                <Link to = '/Saved'>
                    <li>
                        Saved!
                    </li>   
                </Link>
                <Link to = '/LogIn1'>
                    <li>
                        LogIn1!
                    </li>
                </Link>

            </ul>
        </nav>
    )
}

export default Nav