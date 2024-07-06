import React from 'react'

function Avatar({
    children,
    backgroundColor,
    px,
    py,
    color,
    borderRadius,fonSize,cursor
}) {

    const style={
        backgroundColor,
        padding:'${py} ${px}',
        color:color||"black",
        borderRadius,
        fonSize,
        textAlign:"center",
        cursor:cursor || null,
        textDecoration: "none"
    };

    
  return (
    <div style={style}>{children}</div>
   )
}

export default Avatar