import React from 'react';
import style from "./Botao.module.scss";

export default class Botao extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        const { type="button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        );
    }
}