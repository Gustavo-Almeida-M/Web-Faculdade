
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({bkgB}) => {
                    return (
                        <div>
                            <h1 style={{ color: bkgB }}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextB