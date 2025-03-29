const Header = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-xl font-bold">MyApp</a>
                <div className="space-x-6">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300">Services</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;
