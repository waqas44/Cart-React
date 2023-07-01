import classes from './Input.module.css'

const InputComp = (props) => {

    return (
        <div className={classes.input} >
            <label htmlFor={props.input.id} > {props.label}</label>

            <input {...props.Input} />

        </div>

    );


};

export default InputComp;