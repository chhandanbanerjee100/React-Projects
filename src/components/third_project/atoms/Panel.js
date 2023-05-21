import classNames from "classnames";

function Panel({children, className, ...rest}) {
  const finalClassName = classNames("border border-slate-400 rounded-md w-full bg-white p-3",
                                    className);

  return (
    <div {...rest} className={finalClassName} >
      {children}
    </div>
  )
}

export default Panel
