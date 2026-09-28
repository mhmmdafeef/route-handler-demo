

export default function Cta(props: { classname?: string; text: React.ReactNode;
  handlerfunction:Function
 }) {
  return (
    <button className={props.classname} onClick={()=>{props.handlerfunction()}} >
     {props.text}
    </button>
  );
}