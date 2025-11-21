import '../style/components/list.css'
export default function List ({head, list}) {
    return (
        <ul className='ls'>
            <h3>{head}</h3>
            <ul>
                {list.map((e,i) =>
                    <li key={i}><a href='/'>{e}</a></li>
                )}
            </ul>
        </ul>
    )
}