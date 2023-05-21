import classNames from "classnames";


function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  outline,
  danger,
  rounded
}) {
  const classes = classNames("px-3 py-1.5 border flex items-center",{
    "border-blue-500 bg-blue-500": primary,
    "border-gray-900 bg-gray-500": secondary,
    "border-green-500 bg-green-500": success,
    "border-yellow-500 bg-yellow-500": warning,
    "border-red-500 bg-red-500": danger,
    "rounded-full": rounded,
    "text-white": !outline && (primary || secondary || success || warning || danger),
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-500": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger,
  });
  return (
    <div>
      <button className={classes}>{children}</button>
    </div>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary,
    secondary,
    success,
    warning,
    danger
  })=>{

    const count = Number(!!primary) + Number(!!secondary) + Number(!!success)+ Number(!!warning) + Number(!!danger);
    // console.log(count, primary)
    // console.log(secondary, danger)
    if (count > 1){
      return new Error("Only one of them can be present");
    }

  }
}

export default Button
