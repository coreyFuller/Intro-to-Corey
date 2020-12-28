import Image from 'next/image'

const Animal = animal => {
    return (
        <div className='flex flex-row py-20'>
            <Image height={100} width={100} src={`/${animal.img}`}/>
            <div className='items-center px-2 py-4'>
            <p>Type: {animal.type}</p>
            <p>Price: {animal.adoption_fee}</p>
            </div>
        </div>
    )
}

export default Animal