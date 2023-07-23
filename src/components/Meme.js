import React from 'react'

export default function Meme() {
   
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
            
        }
    )
    const [allMemeImages, setAllMemeImages] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))

    },[])
    
    
    function getMemeImage(event) {
        event.preventDefault()
       
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    console.log(meme.randomImage)
        
        function handleChange(event) {
            const { name, value } = event.target
            setMeme(prevMemeText => {
                return{
                ...prevMemeText,
                [name]: value
            }
        })

    }
    return (
        <main>
            <div className="meme">
                <form >
                
                    <div className="input-holder">
                        <input
                            type="text"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                            placeholder=" Top-Text "
                        />

                        <input
                            type="text"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange}
                            placeholder=" Bottom-Text"
                        />
                    </div>
                    <div className="button">
                        <button  onClick={getMemeImage}>Get a new meme image 🖼</button>
                    </div>
                </form>
                

            </div>
            <div className="meme-image">
                <img src={meme.randomImage} className="meme--image" alt="harsh" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>


    )
}