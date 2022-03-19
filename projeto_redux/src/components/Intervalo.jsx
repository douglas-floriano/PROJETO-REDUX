import "./Intervalo.css"
import React from "react"

import Card from "./Card"

export default props => {
    return (
        <Card Title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={0}>
                    </input>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={10}>
                    </input>
                </span>
            </div>
        </Card>
    )
}