import { doSignOut } from "./firebase/Auth";
// import authMethods from "./firebase/Auth";


 
const Header = () => {

    const handleSignOut = async () => {
        try {
            await doSignOut();
            console.log('Signed out successfully');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }

    return (
        <>
            <header className='flex justify-between items-center py-3 px-5'>
                <i className='bx bx-moon text-xl text-white'></i>
                <span className='text-white uppercase text-base font-medium'>Expenses</span>
                {/* <span className='text-base font-medium'>OCT</span> */}
                <i className='bx bx-log-out text-xl text-white' onClick={handleSignOut}></i>
            </header>
        </>
    )
}

export default Header;