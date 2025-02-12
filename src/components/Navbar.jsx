import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="border-b py-4">
            <ul className="flex gap-4 justify-center text-lg
             font-bold
            ">
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/about'>
                    <li>About</li>
                </Link>

                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Navbar