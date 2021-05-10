import TardisBox1 from './TardisBox.js'

class Div3 extends TardisBox1 {
    render()
    {
        return(
            <div onClick = {this.changeIt1}>
                <h3>{this.state.tardis.name}</h3>
            </div>

        );
    }
}
export default Div3