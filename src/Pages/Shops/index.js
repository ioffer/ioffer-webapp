import React from 'react'
import AllShops from '../../components/AllShops'
import Catogeryicons from '../../components/catogeryicons'
import TagsInput from '../../components/Tags'
function Shops() {
    const selectedTags = tags => {console.log(tags)};
    return (
        <div>
            <TagsInput  selectedTags={selectedTags}/>
            <Catogeryicons />
            <AllShops />
        </div>
    )
}

export default Shops
