const Route         = ReactRouterDOM.Route;
const Link          = ReactRouterDOM.Link;
const HashRouter    = ReactRouterDOM.HashRouter;
const UserContext   = React.createContext(null);

// note for below how boostrap styles are passed into React components, unique syntax
function Card(props) {

  function classes(){         //helper function using ternary operators to determine what the class should be for a component using Card component/element
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-3' + bg + txt;
  }

  return(
    <div className={classes()} style={{maxWidth:"18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)} {/* if title, add title - for all these elements */}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div className="primary" id="createStatus">{props.status}</div>)}
      </div>
    </div>
  );
};
 