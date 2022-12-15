const Button = ({text, onClick}) => {
    
    return (
        <div>
            <button
                onClick={onClick} 
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-mint-900 transition duration-200 rounded shadow-md bg-mint-100 hover:bg-mint-50 focus:shadow-outline focus:outline-none"
            >
                {text}
            </button>
        </div>
    )
}

export default Button
