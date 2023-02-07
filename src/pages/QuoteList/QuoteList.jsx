import QuoteCard from "../../components/QuoteCard/QuoteCard"

const QuoteList = (props) => {
  console.log(props)
  return (
    <>
      {props.quotes.map((quote) => (
        <div key={quote._id}>
          <QuoteCard quote={quote} />
        </div>
      ))}
    </>
  )
}


export default QuoteList