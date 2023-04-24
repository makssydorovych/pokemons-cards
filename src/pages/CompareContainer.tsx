import React from 'react';
import {userPokemonsType} from "../utils/types";
import {FaPlus} from "react-icons/fa";

const CompareContainer = ({pokemon = undefined, isEmpty = false}: { pokemon?: userPokemonsType, isEmpty?: boolean }
) =>
{
    return (
        <div className="compare-container">
            {isEmpty &&
            <div className="empty">
            <button><FaPlus/></button>
                <h4>Add Pokemon</h4>
            </div>
            }
        </div>
    );
}
;

export default CompareContainer;