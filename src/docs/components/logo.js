import '../style/components/logo.css';

export default function Logo (props) {
    return (
        <h1 style={{fontSize: props.size || '30px'}}>game<span>Z</span></h1>
    )
}