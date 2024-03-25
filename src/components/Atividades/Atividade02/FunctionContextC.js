import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"
import { useContext } from "react"

const FunctionContextC = () => {
    const   {bkgC} = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
                    return (
                        <div>
                            <h1 style={{ background: bkgC }}>
                                Contexto C
                            </h1>
                            <FunctionContextD />
                        </div>
                    )
        </ColorTheme.Consumer>

    )
}

export default FunctionContextC