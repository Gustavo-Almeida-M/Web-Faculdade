import ColorTheme from "./MyColorContext"

// Legacy mode
const FunctionContextD = () => {
    return (
        <ColorTheme.Consumer>{
            (cores) => 
                <div>
                    <h1 style={{background: cores.bkgD}}>Função D </h1>
                </div>
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextD