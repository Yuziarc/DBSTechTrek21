
import Card from './Card';
import classes from './MeetupItem.module.css';


function MeetupItem(props) {
    return (
        <li className = {classes.item}>
            <Card>
            <div className = {classes.image}>
                <img src = {props.image} alt = {props.title}/>
            </div>
            <span>
            <div className = {classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div></span>
            <div className = {classes.actions}> 
                <button>Add To Cart</button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem