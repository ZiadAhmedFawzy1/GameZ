import '../style/components/display.css'
export default function Display(props) {
    return (
        <div className='display' style={{backgroundImage: `url(${props.img})`}}></div>
    )
}