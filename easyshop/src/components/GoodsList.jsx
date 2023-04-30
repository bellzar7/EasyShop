import Good from "./Good";


function GoodsList(props) {
    const {goods = []} = props;

    if (!goods.length){
       return <h3>Nothing Here</h3>
    }

    return <div className="cards">
        {goods.map(value => (
            <Good key={value.id} {...value} />
        ))}
    </div>
}

export {GoodsList}