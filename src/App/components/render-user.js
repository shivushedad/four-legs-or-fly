import React from "react"

class RenderUser extends React.Component {

    handleClick = (e) => {
        this.props.handleOnClick(e)
    }

    render() {
        return (
            <section align='center'>
                <div style = {{border : '1px', width : '270px'}}>
                <table width='250px' cellSpacing='0' cellPadding='0'>
                    <tbody>
                        <tr>
                            <td>
                            <img src={this.props.imageUrl} alt={this.props.firstName} onClick={e => this.handleClick(this.props.firstName)}/>
                            </td>
                            <td>
                            <p onClick={e => this.handleClick(this.props.firstName)}>{this.props.firstName} {this.props.lastName} <br/> {this.props.username}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </section>
        );
    }
}

export default RenderUser;