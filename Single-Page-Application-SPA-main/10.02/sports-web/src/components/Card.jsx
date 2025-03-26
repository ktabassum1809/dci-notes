import "./Card.css"


export default function Card(cardProps) {
    return (
        <>
            <div className="card">
                <h2>{cardProps.title}</h2>
                <img src={cardProps.src} alt={cardProps.alt} className="card-img"/>
                <p>{cardProps.text}<a href={cardProps.href}>Read more...</a></p>
            </div>

            {/* <div className="card">
                <h2>League of champions</h2>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/1200px-UEFA_Champions_League.svg.png" alt="logo of champions league" className="card-img"/>
                <p>The league has started. <a href="#">Read more...</a></p>
            </div> */}
      
            {/* <div className="card">
                <h2>Formula 1</h2>
                <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012018/untitled-1_20.png?An9Fa1zRO4z6Dj__EVR4da6YOWsvtEw2&itok=6PiLMTa5" alt="logo of formula 1" className="card-img"/>
                <p>Cars going around <a href="#">Read more...</a></p>
            </div> */}
        </>
    )
}



{/* <div className="card">
        <h2>League of champions</h2>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/1200px-UEFA_Champions_League.svg.png" alt="logo of champions league" className="card-img"/>
        <p>The league has started. <a href="#">Read more...</a></p>
      </div>
      <div className="card">
        <h2>Formula 1</h2>
        <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012018/untitled-1_20.png?An9Fa1zRO4z6Dj__EVR4da6YOWsvtEw2&itok=6PiLMTa5" alt="logo of formula 1" className="card-img"/>
        <p>Cars going around <a href="#">Read more...</a></p>
      </div> */}