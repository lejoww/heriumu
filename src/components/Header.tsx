import heriumuDarkLogo from '../assets/logo-dark.svg'

function Header() {
  return (
    <header className='px-4 py-6 flex justify-center'>
      <img src={heriumuDarkLogo} style={{width: 186}}/>
    </header>
  )
}

export default Header