

const MainMenu = (props) => {

    return (
        <div className="text-7xl mb-2 flex-col">
            <div className="text-7xl font-bold mb-4">
                <div className="text-4xl mb-8">
                    !Palindrome{'\u00A1'}
                    <button onClick={props.main_start} className='p-2 border-2 border-gray-300 rounded mr-2'>
                    Click to Start!
                    </button> 
                </div>
            </div>
        </div>
    )
}

export default MainMenu