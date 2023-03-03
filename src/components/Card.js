export default function Card(props) {
    const {object, seta_play, seta_virar} = props
    console.log(object.question)
    return (
        <div>
            <h1>{object.title}</h1>
            <img src={seta_play} alt={"seta_play"}/>
        </div>
    )
}