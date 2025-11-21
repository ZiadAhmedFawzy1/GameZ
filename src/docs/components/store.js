import { useContext } from 'react'
import '../style/components/store.css'
import Card from './card'
import { Auth } from '../context/context'

export default function Store () {
    const {data} = useContext(Auth);
    return (
        <div className="store">
            <h2>discover</h2>
            <div className='container'>
                {data.map((e,i) =>
                    <Card key={i} id={e.id}  img={e.image} title={e.title} desc={e.description} download={e.users}/>
                )}
            </div>
        </div>
    )
}