interface amount {
    amount: number
}

const StarRating: React.FC<amount> = ({amount}) => {
  
    const stars = Array.from({length: amount}, (e, id) => {
      
      return (
        <i className="stars fa-sharp fa-solid fa-star" key={id}  ></i>
      )
      
    })
    return (
      <>{stars}</>
    )
  }
  
  export default StarRating