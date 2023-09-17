import React from 'react';

export default function Pagination({ gotoNextPage, gotoPreviousPage}) {
    return (
        <div>
            {gotoPreviousPage && <button role="button" onClick={gotoPreviousPage}>Previous</button>}
            {gotoNextPage && <button role="button" onClick={gotoNextPage}>Next</button>}
        </div>
    )
}