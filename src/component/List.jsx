import {Card} from './Card'

function List (props){

    const {list = []} = props;

    return <div className='list'>
        {list.length ? (
            list.map((movie) => 
             <Card {...movie}/>)
            ) : (
            <h3>НЕЧЕГО НЕ НАЙДЕНО</h3>
                )}
        </div>
        }

export {List}