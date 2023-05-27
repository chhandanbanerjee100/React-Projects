import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({to, linkText, className, activeClassName}) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames("text-blue-500",
    className,
    currentPath === to && activeClassName
   );

  const handleClick = (e)=>{
    if(e.ctrlKey || e.metaKey ){
      return;
    }
    e.preventDefault();
    navigate(to);
  }
  return (
    <a className={classes} href={to} onClick={handleClick}>{linkText}</a>
  )
}

export default Link
