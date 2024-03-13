// import Planeta from "./Planeta";
import React from "react";

const SistemaSolar = ({children, galaxia}) => {
    return (
        <>
            <h1>Sistema Solar</h1>
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {galaxia});
                })
            }
        </>
    )
}

export default SistemaSolar;